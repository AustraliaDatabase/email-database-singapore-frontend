import classNames from "classnames";
import {
  CheckCircle,
  CurrencyDollarSimple,
  ShieldCheck,
  ThumbsUp,
} from "phosphor-react";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { IWhy, IWhyList } from "../../../../shared/interface";
import styles from "./style.module.scss";

const icon: any = {
  0: <CurrencyDollarSimple size={40} />,
  1: <ShieldCheck size={24} />,
  2: <CheckCircle size={24} />,
  3: <ThumbsUp size={24} />,
  4: <ThumbsUp size={24} />,
  5: <ThumbsUp size={24} />,
};

interface IMainWhyDetailCard {
  whyInfo: IWhy;
}

const MainWhyDetailCard = (props: IMainWhyDetailCard) => {
  const { whyInfo } = props;
  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="d-flex flex-column mb-5 mx-auto align-items-center justify-content-center"
        >
          <div
            className={classNames("mb-4 text-center", styles.whyTitle)}
            dangerouslySetInnerHTML={{ __html: whyInfo?.title }}
          ></div>
          <div
            className={classNames("text-center", styles.whyDescription)}
            dangerouslySetInnerHTML={{ __html: whyInfo?.description }}
          ></div>
        </Col>
        {whyInfo?.list?.map((card: IWhyList, index: number) => {
          return (
            <Col md={4} className="mb-3 mb-md-4" key={index}>
              <div className={classNames(styles.card, styles.shadow, "h-100")}>
                <div className={styles.cardIcon}>{icon[index]}</div>
                <div className={classNames("mb-3", styles.cardH6Title)}>
                  <div
                    className={styles.cardTitle}
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                </div>
                <div
                  className={styles.cardDescription}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MainWhyDetailCard;
