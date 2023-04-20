import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowSquareOut } from "phosphor-react";

import {
  IMainProductInfo,
  IOtherStateList,
} from "../../../../shared/interface";
import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";
import styles from "./style.module.scss";

interface IOtherStatesView {
  currentObject: IMainProductInfo;
}

const OtherStates = (props: IOtherStatesView) => {
  const { currentObject } = props;
  const [otherStateList, setOtherStateList] = useState<any>([]);

  const numColumns = 3;
  const columnSize = Math.ceil(otherStateList?.length / numColumns);

  useEffect(() => {
    const sortedList = currentObject?.allList?.sort((a, b) => {
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
      <Col
        xs={10}
        className="d-flex flex-column mb-5 mx-auto align-items-center justify-content-center"
      >
        <h2 className={styles.otherStateTitle}>
          Explore Lists for {DATA_TYPE_TO_TITLE[currentObject?.type]} Beyond the {currentObject.name} List
        </h2>
        <div className={styles.otherStateDescription}>
          Our services extend to acquiring{" "}
          {DATA_TYPE_TO_TITLE[currentObject?.type]} lists for states other than{" "}
          {currentObject.name}, allowing you to save on costs while still
          obtaining the vital data your business needs.
        </div>
      </Col>
      <Row>
        {Array.from({ length: numColumns }, (_, i) => i).map((columnIndex) => (
          <Col key={columnIndex} xs={12} md={6} lg={4} className="mb-4 mb-lg-0">
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
