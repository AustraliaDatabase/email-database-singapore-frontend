import React, { ReactNode, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../../../../shared/components/card/Card";
import styles from "./styles.module.scss";

interface lists {
  title: string;
  description: ReactNode;
}

interface IWhyCards {
  title: string;
  description: ReactNode;
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
          <div className={styles.description}>{description}</div>
        </Row>
      </Container>
      <Container>
        {lists.map((element, index) => {
          return (
            <div className={styles.cardsWrapper} key={index}>
              <div className={styles.titleCard}>
                <div className={styles.titleInnerContainer}>
                  <div
                    className={styles.titleCount}
                    dangerouslySetInnerHTML={{ __html: "0" + (index + 1) }}
                  />
                  <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: element?.title }}
                  />
                </div>
              </div>
              <Card className={styles.contentCard}>
                <div>{element.description}</div>
              </Card>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default WhyCardsWithContent;
