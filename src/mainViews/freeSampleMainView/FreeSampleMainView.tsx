import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import classNames from "classnames";

import styles from "./styles.module.scss";
import MainCategoryList from "./views/mainCategoryList/MainCategoryList";
import instance from "../../services/baseServices";
import Card from "../../shared/components/card/Card";
import Image from "next/image";
import { IFreeSampleItemObject } from "../../shared/interface";
import { useRoot } from "../../shared/contexts/RootProvider";
import MyOwnList from "./views/myOwnList/MyOwnList";

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

  const getFreeSampleList = async () => {
    try {
      const response = await instance.get("/available-request-count");

      setCount(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getFreeSampleList();
  }, []);

  const requestLeftCount =
    (currentLimit || 0) - (myOwnList?.items?.length || 0);

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

                        <p>
                          We currently offer {count} free product samples per
                          month in any category you select.{" "}
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
                      </>
                    )}
                  </>
                )}
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
        </Col>
        <Col lg={5}>
          <div className={styles.unlockedList}>
            <h2>Your unlocked list</h2>
            <Row>
              <MyOwnList myOwnList={myOwnList} />
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
