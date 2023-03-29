import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Lightning } from "phosphor-react";

import {
  IAllList,
  IOtherStateList,
  IOtherStates,
} from "../../../../shared/interface";
import { DATABASE_MAIN_TYPES } from "../../../../shared/enums";
import styles from "./style.module.scss";
import { CATEGORIES_TO_URLS } from "../../../../shared/constants";

interface IOtherStatesView {
  otherStatesInfo: IOtherStates;
  allList: IAllList[];
  databaseMainType: DATABASE_MAIN_TYPES;
}

const OtherStates = (props: IOtherStatesView) => {
  const { otherStatesInfo, allList, databaseMainType } = props;
  const [otherStateList, setOtherStateList] = useState<any>([]);

  useEffect(() => {
    const sortedList = allList
      ?.filter((filterElement: any) => {
        return (
          filterElement.id !== "real-estate-agent-email-list" ||
          filterElement.id !== "list-of-all-email-lists"
        );
      })
      ?.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

    setOtherStateList(sortedList);
  }, []);

  const renderState = (first: number, last: number) => {
    return otherStateList
      ?.slice(first, last)
      .map((element: IOtherStateList, index: number) => {
        return (
          <Col key={index}>
            <div
              className="d-flex align-items-center"
              style={{ fontWeight: "bold", marginBottom: 10, gap: 5 }}
            >
              <div>
                <Lightning color="#00A2E2" />
              </div>
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}${element.url?.replaceAll('+', '/')}`}>
                {element.name}
              </a>
            </div>
          </Col>
        );
      });
  };

  return (
    <Container>
      <Col xs={10} className="mb-5 mx-auto text-center">
        <div
          className={styles.otherStateTitle}
          dangerouslySetInnerHTML={{ __html: otherStatesInfo?.title }}
        ></div>
        <div
          className={styles.otherStateDescription}
          dangerouslySetInnerHTML={{ __html: otherStatesInfo?.description }}
        ></div>
      </Col>
      <Row>
        <Col>{renderState(0, 10)}</Col>
        <Col>{renderState(10, 20)}</Col>
        <Col>{renderState(20, 30)}</Col>
        <Col>{renderState(30, 40)}</Col>
        <Col>{renderState(40, 50)}</Col>
        <Col>{renderState(50, 60)}</Col>
      </Row>
    </Container>
  );
};

export default OtherStates;
