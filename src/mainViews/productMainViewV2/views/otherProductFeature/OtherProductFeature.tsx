import React from "react";
import { Col, Row } from "react-bootstrap";

import { IMainProductInfo } from "../../../../shared/interface";
import OtherProductItem from "../otherProductItem/OtherProductItem";
import styles from "./styles.module.scss";

interface IOtherProductFeature {
  currentObject: IMainProductInfo;
}

const OtherProductFeature = (props: IOtherProductFeature) => {
  const { currentObject } = props;

  return (
    <div>
      <h2 className={styles.title}>{currentObject?.productInfo?.title}</h2>

      <Row>
        {currentObject?.productInfo?.list?.map((productInfo, index: number) => {
          return (
            <Col key={index} xs={12} lg={6}>
              <OtherProductItem productInfo={productInfo} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default OtherProductFeature;
