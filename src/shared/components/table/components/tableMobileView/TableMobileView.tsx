import { ArrowRight } from "phosphor-react";
import React, { useState } from "react";
// @ts-ignore
import { useRouter } from "next/router";
import { numberWithCommas } from "../../../../InternalService";
import Button from "../../../button/Button";
import Card from "../../../card/Card";

import styles from "./tableMobileView.module.scss";
import { Col, Row } from "react-bootstrap";

const TableMobileView = (props: any) => {
  const {
    columns,
    dynamicFullDataSet,
    attributesSet,
    isProductPage,
    pressRow,
  } = props;
  const [currentNumber, setCurrentNumber] = useState(-1);
  const router = useRouter();

  return (
    <div>
      {dynamicFullDataSet?.map((element: any, index: number) => {
        let url = element.url;

        return (
          <Card className={styles.mobileViewCard} key={`card_${index}`}>
            <div>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${url
                  ?.split("/")
                  .join("")
                  ?.replace("+", "/")}`}
              >
                <b
                  onClick={() => {
                    pressRow(index);
                  }}
                  className={styles.stateName}
                >
                  {element.name}
                </b>
              </a>
            </div>
            <div className={styles.cardInnerWrapper}>
              {Object.keys(attributesSet).map((value, columnIndex) => {
                return (
                  <div key={`cell_${columnIndex}`}>
                    {numberWithCommas(element.stats?.[value])}
                    <div className={styles.headerColumns}>
                      {" "}
                      {columns[columnIndex]}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.pricing}>
              <Row>
                <Col>
                  {element?.price?.list?.[0]?.price &&
                    `$${numberWithCommas(element?.price?.list?.[0]?.price)}`}
                  <div className={styles.headerColumns}>
                    Email Database Price{" "}
                  </div>
                </Col>
                <Col>
                  {element?.price?.list?.[1]?.price &&
                    `$${numberWithCommas(element?.price?.list?.[1]?.price)}`}
                  <div className={styles.headerColumns}>
                    Complete Database Price{" "}
                  </div>
                </Col>
              </Row>
            </div>
            <Col>
              <Button
                className={styles.viewDetails}
                onClick={() => {
                  router.push(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/${url
                      ?.split("/")
                      .join("")
                      ?.replace("+", "/")}`
                  );
                }}
                variant="text"
              >
                View Details <ArrowRight />
              </Button>
            </Col>
          </Card>
        );
      })}
    </div>
  );
};

export default TableMobileView;
