import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import classNames from "classnames";

import styles from "./styles.module.scss";
import MainCategoryList from "./views/mainCategoryList/MainCategoryList";
import instance from "../../services/baseServices";
import Card from "../../shared/components/card/Card";
import Image from "next/image";
import { IFreeSampleItemObject, ISelectObject } from "../../shared/interface";
import { useRoot } from "../../shared/contexts/RootProvider";
import MyOwnList from "./views/myOwnList/MyOwnList";
import SelectFreeList from "./views/selectFreeList/SelectFreeList";
import Swal from "sweetalert2";

const FreeSampleMainView = () => {
  const router = useRouter();
  const { loggedInUser, setAuthEnable } = useRoot();
  const [count, setCount] = useState<number | null>(null);
  const [currentLimit, setCurrentLimit] = useState(0);
  const [myOwnList, setMyOwnList] = useState<IFreeSampleItemObject | null>(
    null
  );
  const [ownListLoading, setOwnListLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [buildLoading, setBuildLoading] = useState(false);
  const [sampleSubList, setSampleSubList] = useState<ISelectObject[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
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
    getOwnList();
  }, [loggedInUser, router?.pathname]);

  const getFreeSampleList = async () => {
    try {
      const response = await instance.get("/available-request-count");

      setCount(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getFreeSampleList();
  }, []);

  // console.log(sampleSubList, "sample sub list")
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
      console.log(response?.data, "build list");
      // setSwitchSelect(false);
      setBuildLoading(false);
      Swal.fire("Successfully Created!", "", "success");
    } catch (error: any) {
      setBuildLoading(false);

      Swal.fire("Error Message!", `${error?.response?.data}`, "error");
    }
  };

  const requestLeftCount =
    (currentLimit || 0) - (myOwnList?.items?.length || 0);

  const mainCategories = [
    {
      "Company Database": "company_database",
    },
    {
      Realtor: "realtor",
    },
    {
      Industry: "industry",
    },
    {
      Consumer: "consumer",
    },
    {
      Target: "target",
    },
  ];

  return (
    <>
      <Row>
        <Col xs={12} lg={7}>
          <div className={styles.alertWrapper}>
            <Row className="align-items-center">
              <Col xs={12} lg={8}>
                {requestLeftCount <= 0 && loggedInUser && (
                  <p>
                    You have already reached your limits for this month. <br />{" "}
                    Contact us if you would like another sample list or please
                    consider purchasing our premium list
                  </p>
                )}

                {requestLeftCount > 0 && (
                  <>
                    {loggedInUser && (
                      <>
                        <span className={styles.title}>
                          You have {requestLeftCount} more request left
                        </span>
                      </>
                    )}
                  </>
                )}
                <p>
                  We currently offer {count} free product samples per month in
                  any category you select.{" "}
                  <span
                    onClick={() => {
                      router.push("/support");
                    }}
                    className={classNames(styles.contactus)}
                  >
                    Contact Us
                  </span>{" "}
                  for more sample list
                </p>
              </Col>
              <Col xs={12} lg={4}>
                <Image
                  src="/free-sample-illustration.png"
                  width={224}
                  height={177}
                  alt=""
                />
              </Col>
            </Row>
          </div>
          <div className={classNames(styles.title, "my-5")}>
            Select free sample
          </div>
          <Row>
            {mainCategories.map((element, i) => {
              return (
                <SelectFreeList
                  key={i}
                  onBuildList={onBuildList}
                  // onSelectCategory={onSelectCategory}
                  // sampleSubList={sampleSubList}
                  buildLoading={buildLoading}
                  userInfo={userInfo}
                  requestLeftCount={requestLeftCount}
                  title={Object.keys(element)[0]}
                  mainCategory={Object.values(element)[0]}
                />
              );
            })}
          </Row>
        </Col>
        <Col lg={5}>
          <div className={styles.unlockedList}>
            <div className={styles.title}>Your unlocked list</div>
            <Row>
              <MyOwnList myOwnList={myOwnList} />
              {!myOwnList?.items?.length && <div>No Unlocked List found</div>}
            </Row>
          </div>
        </Col>

        <Col xs={12} lg={10}>
          <Row className="align-items-center text-center text-md-start">
            <Col xs={12} md={7} lg={7} className="my-4">
              {count && (
                <Alert>
                  We currently offer {count} free product samples per month in
                  any category you select. <br />
                  <span
                    onClick={() => {
                      router.push("/support");
                    }}
                    className={classNames(styles.contactus)}
                  >
                    Contact Us
                  </span>{" "}
                  for more sample list
                </Alert>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <MainCategoryList />
    </>
  );
};

export default FreeSampleMainView;
