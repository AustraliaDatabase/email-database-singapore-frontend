import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Card from "../card/Card";
import styles from "./styles.module.scss";

interface lists {
  title: string;
  description: string;
}

interface IWhyCards {
  title: string;
  description: string;
  lists: lists[];
}

const WhyCardsWithContent = (props: IWhyCards) => {
  const { title, description, lists } = props;

  return (
    <div className={styles.wrapper}>
      <Container>
        <Row xs={12} lg={8}>
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Row>
      </Container>
      <Container>
        <Row>
          {lists.map((element, index) => {
            return (
              <Col xx={12} lg={6} key={index}>
                <div className={styles.cardsWrapper}>
                  <div className={styles.titleCard}>
                    <div className={styles.titleInnerContainer}>
                      <div
                        className={styles.titleCount}
                        dangerouslySetInnerHTML={{
                          __html: `${index < 10 && "0"}` + (index + 1),
                        }}
                      />
                      <h3
                        className={styles.title}
                      >
                        {element?.title}
                      </h3>
                    </div>
                  </div>
                  <Card className={styles.contentCard}>
                    <div
                      dangerouslySetInnerHTML={{ __html: element.description }}
                    />
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default WhyCardsWithContent;
