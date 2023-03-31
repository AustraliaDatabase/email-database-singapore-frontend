import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";

import Card from "../../../../shared/components/card/Card";
import styles from "./style.module.scss";
import { IBeneifitList, IBeneifits } from "../../../../shared/interface";

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
        {beneifitInfo?.list?.map((element: IBeneifitList, index: number) => {
          return (
            <Col md={12} key={index}>
              <BeneifitCard
                title={element.title}
                description={element.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BeneifitView;
