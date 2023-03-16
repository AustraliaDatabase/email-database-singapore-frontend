import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import TrustPilotGridItem from "./views/trustPilotGridItem/TrustPilotGridItem";
import Star from "./views/star/Star";
import { TRUST_PILOT_LIST } from "./constants";
import { CaretLeft, CaretRight } from "phosphor-react";
import { REVIEW_DROP_LINK } from "../../constants";

interface ITrustPilot {
  title?: string;
}

const TrustPilot = (props: ITrustPilot) => {
  const { title } = props;

  const slideLeft = () => {
    var slider = document.getElementById("slider111");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider111");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 300;
    }
  };
  return (
    <Container className={styles.mainContainer} id="#reviews">
      <div className="d-flex align-items-center justify-content-center mb-5">
        {title && <blockquote className={styles.blockquote} dangerouslySetInnerHTML={{ __html: title }} />}
      </div>
      <Row className={styles.slider}>
        <Col
          md={4}
          xs={9}
          className={classNames(
            "d-flex align-items-center mb-md-0",
            styles.headerGroup
          )}
        >
          <div className={styles.headWrapper}>
            <div className={styles.image}>
              <a
                target="_blank"
                rel="noreferrer"
                href={REVIEW_DROP_LINK}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="align-items-end justify-content-center mb-2">
                  <span className={classNames(styles.rating, " d-block text-center text-md-start")}>
                    REVIEWS
                  </span>
                  <div className={styles.title}>Email Datas</div>
                </span>
                <span className={classNames("mb-2", styles.starRow)}>
                  <Star url="/star.svg" />
                  <Star url="/star.svg" />
                  <Star url="/star.svg" />
                  <Star url="/star.svg" />
                  <Star url="/star.svg" />
                </span>
                <span className={styles.viewAll}>VIEW ALL REVIEWS</span>
              </a>
            </div>
          </div>

        </Col>
        <Col
          md={9}
          xs={12}
          className={classNames("d-flex", styles.secondGroup)}
        >
          <div className={styles.arrow}>
            <div onClick={slideLeft} style={{ cursor: "pointer" }}>
              <CaretLeft size={32} />
            </div>
          </div>
          <div className={styles.scroll} id="slider111">
            <div className={styles.wrapper}>
              {TRUST_PILOT_LIST.map(
                ({
                  id,
                  description,
                  positiveCount,
                  negativeCount,
                  date,
                  name,
                  profUrl,
                  author,
                }) => (
                  <TrustPilotGridItem
                    key={id}
                    positiveCount={positiveCount}
                    negativeCount={negativeCount}
                    description={description}
                    date={date}
                    name={name}
                    profUrl={profUrl}
                    author={author}
                  />
                )
              )}
            </div>
          </div>
          <div className={styles.arrow}>
            <div onClick={slideRight} style={{ cursor: "pointer" }}>
              <CaretRight size={32} />
            </div>
          </div>
        </Col>
      </Row>
      <div className={classNames("text-center", styles.powered)}>
        <div className="mb-0">
          {" "}
          Powered by{" "}
          <b>
            {/* @ts-ignore */}
            <a target="_blank" rel="noreferrer">
              Reviewdrop
            </a>
          </b>{" "}
          ⚡️{" "}
        </div>
      </div>
    </Container>
  );
};

export default TrustPilot;
