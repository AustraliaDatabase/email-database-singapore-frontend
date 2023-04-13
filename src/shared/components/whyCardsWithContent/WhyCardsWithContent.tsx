import classNames from "classnames";
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
  isHome?: boolean;
}

const WhyCardsWithContent = (props: IWhyCards) => {
  const { title, description, lists, isHome } = props;

  return (
    <div className={styles.wrapper}>
      <Container>
        <Row
          xs={10}
          className={classNames(
            "d-flex flex-column mb-5 mx-auto align-items-center justify-content-center",
            { [styles.isHome]: isHome }
          )}
        >
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className={classNames(styles.description, {
              [styles.isHome]: isHome,
            })}
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
                      <h3 className={styles.title}>{element?.title}</h3>
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
