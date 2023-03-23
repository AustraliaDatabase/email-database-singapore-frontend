import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";

import instance from "../../../../services/baseServices";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import {
  IFreeSampleItemObject,
  ISelectObject,
} from "../../../../shared/interface";
import MyOwnList from "../myOwnList/MyOwnList";
import SelectFreeList from "../selectFreeList/SelectFreeList";
import styles from "./styles.module.scss";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

interface IFreeSampleList {}

const FreeSampleListByCategory = (props: IFreeSampleList) => {
  const router = useRouter();

  const { loggedInUser, setAuthEnable } = useRoot();

  const [sampleSubList, setSampleSubList] = useState<ISelectObject[]>([]);
  // const [switchSelect, setSwitchSelect] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [buildLoading, setBuildLoading] = useState(false);

  const [currentLimit, setCurrentLimit] = useState(0);
  const [myOwnList, setMyOwnList] = useState<IFreeSampleItemObject | null>(
    null
  );
  const [userInfo, setUserInfo] = useState(null);
  const [ownListLoading, setOwnListLoading] = useState(false);

  const getOwnList = async () => {
    try {
      setOwnListLoading(true);
      const response = await instance.get(`/ownFreeSampleList`);

      setMyOwnList(response.data?.ownListByUser);
      setCurrentLimit(
        Number(
          response?.data?.allowedLimit?.limitAccessForUsers?.[
            loggedInUser.localId
          ]?.limit || response?.data?.allowedLimit?.limit
        )
      );

      setUserInfo(response?.data?.user);
      setOwnListLoading(false);
    } catch (error) {
      setOwnListLoading(false);
    }
  };

  useEffect(() => {
    getOwnList();
  }, [loggedInUser, router?.pathname]);

  const buildList = (data: any) => {
    setMyOwnList(data);
  };

  const onBuildList = async (freeSample: string) => {
    if (!loggedInUser) {
      setAuthEnable(true);
      return;
    }

    setBuildLoading(true);

    try {
      const response = await instance.post(
        `/update-free-sample-by-name/${currentCategory?.toLowerCase()}`,
        {
          fileName: freeSample,
        }
      );

      buildList(response?.data);
      // setSwitchSelect(false);
      setBuildLoading(false);
      Swal.fire("Successfully Created!", "", "success");
    } catch (error: any) {
      setBuildLoading(false);

      Swal.fire("Error Message!", `${error?.response?.data}`, "error");
    }
  };

  const onSelectCategory = async (category: string) => {
    setCurrentCategory(category);
    setSampleSubList([]);
    try {
      // setLoading(true);
      const response = await instance.get(
        `/free-sample-by-name/${category?.toLowerCase()}`
      );

      const list: any = response.data?.items?.map((element: any) => {
        return {
          label: element.fileName,
          value: element.fileName,
          assignedUrl: element.assignedUrl,
        };
      });

      setSampleSubList(list);
      // setLoading(false);
    } catch (error: any) {
      // setLoading(false);
    }
  };

  if (ownListLoading) {
    return <div className="d-flex align-items-center">Loading...</div>;
  }

  const requestLeftCount =
    (currentLimit || 0) - (myOwnList?.items?.length || 0);

  return (
    <>
      {requestLeftCount <= 0 && loggedInUser && (
        <Row>
          <Col xs={12} md={7} lg={7} className="my-4">
            <Alert variant="danger">
              You have already reached your limits for this month. <br />{" "}
              Contact us if you would like another sample list or please
              consider purchasing our premium list
            </Alert>
          </Col>
        </Row>
      )}
      {requestLeftCount > 0 && (
        <Row>
          <Col xs={12} md={6} lg={3} className="my-4">
            {loggedInUser && (
              <div className={styles.remainRequst}>
                You have {requestLeftCount} more request left
              </div>
            )}
          </Col>
        </Row>
      )}

      <Row className={styles.cardsWrapper}>
        <SelectFreeList
          onBuildList={onBuildList}
          onSelectCategory={onSelectCategory}
          sampleSubList={sampleSubList}
          buildLoading={buildLoading}
          userInfo={userInfo}
          requestLeftCount={requestLeftCount}
        />
        <Col xs={12} lg={8} className={styles.rightCol}>
          <hr className="mb-4 d-block d-md-none" />
          <Row className="justify-content-center justify-content-md-start ">
            <div className={styles.unlockTitle}>Your unlocked sample list</div>
            <MyOwnList myOwnList={myOwnList} />
            {!myOwnList?.items?.length && <div>No Unlocked List found</div>}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FreeSampleListByCategory;
