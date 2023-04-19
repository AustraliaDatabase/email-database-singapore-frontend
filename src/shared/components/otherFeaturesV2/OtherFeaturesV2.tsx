import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import Card from "../card/Card";

interface IfeaturesList {
  title: string;
  description: string;
  icon: ReactNode;
}

interface IOtherFeaturesV2 {
  title?: string;
  description?: string;
  featuresList: IfeaturesList[];
  columnNum?: 1 | 2;
}
const OtherFeaturesV2 = (props: IOtherFeaturesV2) => {
  const { title, description, columnNum, featuresList } = props;
  return (
    <Container>
      <Row>
        <Col xs={12} lg={10} className="mx-auto text-center">
          {title && (
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </Col>
      </Row>
      <Row>
        {featuresList.map((element: IfeaturesList, index: number) => {
          return (
            <Col
              xs={12}
              lg={columnNum ? (columnNum == 1 ? 8 : 6) : 12}
              key={index}
              className={styles.featuresColumn}
            >
              <Card className={styles.featuresColumn}>
                <div className={styles.iconWrapper}>{element.icon}</div>
                <div>
                  <div
                    className={styles.featuresTitle}
                    dangerouslySetInnerHTML={{ __html: element.title }}
                  />
                  <div
                    className={styles.featuresDescription}
                    dangerouslySetInnerHTML={{ __html: element.description }}
                  />
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OtherFeaturesV2;
