import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import classNames from "classnames";

import styles from "./styles.module.scss";
import MainCategoryList from "./views/mainCategoryList/MainCategoryList";
import instance from "../../services/baseServices";
import Card from "../../shared/components/card/Card";
import Image from "next/image";

const FreeSampleMainView = () => {
  const router = useRouter();
  const [count, setCount] = useState<number | null>(null);

  const getFreeSampleList = async () => {
    try {
      const response = await instance.get("/available-request-count");

      setCount(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getFreeSampleList();
  }, []);

  return (
    <>
      <Row>
        <Col xs={12} lg={7}>
          <div className={styles.alertWrapper}>
            <Row className="align-items-center">
              <Col xs={12} lg={8}>
                <span className={styles.title}>
                  You have 1 more request left
                </span>
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
        </Col>
        <Col xs={12} lg={5}>
          test
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
