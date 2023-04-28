import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowSquareOut } from "phosphor-react";

import { IMainProductInfo } from "../../../../shared/interface";
import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";
import styles from "./style.module.scss";

interface IOtherStatesView {
  currentObject: IMainProductInfo;
}

const OtherStates = (props: IOtherStatesView) => {
  const { currentObject } = props;
  const [otherStateList, setOtherStateList] = useState<any>([]);

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

  const chunkSize = 3; // set the number of columns
  const chunkedItems = otherStateList.reduce((acc: any, cur: any, i: number) => {
    const index = i % chunkSize;
    acc[index] = [...(acc[index] || []), cur];
    return acc;
  }, []);

  return (
    <Container>
      <Col
        xs={10}
        className="d-flex flex-column mb-5 mx-auto align-items-center justify-content-center"
      >
        <h2 className={styles.otherStateTitle}>
          Explore Lists for {DATA_TYPE_TO_TITLE[currentObject?.type]} Beyond the{" "}
          {currentObject.name} List
        </h2>
        <div className={styles.otherStateDescription}>
          Our services extend to acquiring{" "}
          {DATA_TYPE_TO_TITLE[currentObject?.type]} lists for states other than{" "}
          {currentObject.name}, allowing you to save on costs while still
          obtaining the vital data your business needs.
        </div>
      </Col>
      <Row>
        <Col md={12} className="mb-4 mb-lg-0">
          <div className={styles.rowWrapper}>
            {chunkedItems.map((chunk: any, i: number) => (
              <Row key={i}>
                {chunk.map((item: any, j: number) => (
                  <Col key={j} md={3} className={styles.column}>
                    <a
                      href={`${
                        process.env.NEXT_PUBLIC_BASE_URL
                      }${item.url?.replaceAll("+", "/")}`}
                    >
                      <Row className={styles.statesRow}>
                        <Col xs={10}>{item.name}</Col>
                        <Col xs={2}>
                          <ArrowSquareOut size={22} />
                        </Col>
                      </Row>
                    </a>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OtherStates;
