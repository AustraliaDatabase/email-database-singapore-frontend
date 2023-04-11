import React from "react";
import classNames from "classnames";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Card from "../card/Card";
import {  IBeneifits } from "../../interface";
import BeneifitsCollapsible from "./components/beneifitsCollapsible/BeneifitsCollapsible";
import styles from "./style.module.scss";

const BeneifitCard = ({ title, description }: any) => {
  return (
    <Card className={classNames("p-3 mb-3 pl-4", styles.card, styles.line)}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div
        className={styles.cardDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Card>
  );
};

interface IBeneifitView {
  beneifitInfo: IBeneifits;
}

const BeneifitView = (props: IBeneifitView) => {
  const { beneifitInfo } = props;
  return (
    <Container>
      <div className="d-flex flex-column align-items-center">
        <h2 className={styles.beneifitTitle}>{beneifitInfo?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: beneifitInfo?.description }}
          className={styles.beneifitDescription}
        ></div>
      </div>
      <Row>
        <BeneifitsCollapsible BeneifitList={beneifitInfo?.list} />
      </Row>
    </Container>
  );
};

export default BeneifitView;
