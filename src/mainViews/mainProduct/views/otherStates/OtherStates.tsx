import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { ArrowSquareOut, Lightning } from "phosphor-react";

import {
  IMainProductInfo,
  IOtherStateList,
} from "../../../../shared/interface";
import styles from "./style.module.scss";
import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";

interface IOtherStatesView {
  currentObject: IMainProductInfo;
}

const OtherStates = (props: IOtherStatesView) => {
  const { currentObject } = props;
  const [otherStateList, setOtherStateList] = useState<any>([]);

  const numColumns = 4;
  const columnSize = Math.ceil(otherStateList.length / numColumns);

  useEffect(() => {
    const sortedList = currentObject?.allList
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
    return (
      <>
        <div className={styles.rowWrapper}>
          {otherStateList
            ?.slice(first, last)
            .map((element: IOtherStateList, index: number) => {
              return (
                <Col key={index}>
                  <a
                    href={`${
                      process.env.NEXT_PUBLIC_BASE_URL
                    }${element.url?.replaceAll("+", "/")}`}
                  >
                    <Row className={styles.statesRow}>
                      <Col xs={6}>{element.name}</Col>
                      <Col xs={4}>721,480</Col>
                      <Col xs={2}>
                        <ArrowSquareOut size={22} />
                      </Col>
                    </Row>
                  </a>
                </Col>
              );
            })}
        </div>
      </>
    );
  };

  return (
    <Container>
      <Col xs={10} className="mb-5 mx-auto text-center">
        <h2 className={styles.otherStateTitle}>
          Explore Lists for US States Beyond the {currentObject.name} List
        </h2>
        <div className={styles.otherStateDescription}>
          Our services extend to acquiring{" "}
          {DATA_TYPE_TO_TITLE[currentObject?.type]} lists for states other than
          {currentObject.name}, allowing you to save on costs while still
          obtaining the vital data your business needs.
        </div>
      </Col>
      {/* <Row>
        <Col>{renderState(0, 10)}</Col>
        <Col>{renderState(10, 20)}</Col>
        <Col>{renderState(20, 30)}</Col>
        <Col>{renderState(30, 40)}</Col>
        <Col>{renderState(40, 50)}</Col>
        <Col>{renderState(50, 60)}</Col>
      </Row> */}
      <Row>
        {Array.from({ length: numColumns }, (_, i) => i).map((columnIndex) => (
          <Col key={columnIndex}>
            {renderState(
              columnIndex * columnSize,
              (columnIndex + 1) * columnSize
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OtherStates;
