import React from "react";
import { Col } from "react-bootstrap";
import styles from "./style.module.scss";

const CopyRightContent = () => {
  return (
    <Col className={styles.copyRightContent}>
      <div>All right reserve © copyright by EmailDatas</div>
    </Col>
  );
};

export default CopyRightContent;
