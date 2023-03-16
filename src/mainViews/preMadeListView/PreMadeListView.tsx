import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../shared/components/featureCard/FeatureCard";
import { FEATURE_CARD_VARIANT } from "../../shared/enums";
import { PRE_MADE_LIST_OBJECT } from "./constants";

import styles from "./styles.module.scss";

const PreMadeListView = () => {
  return (
    <>
      <section className={classNames("sectiontopfix", styles.wrapper)}>
        <Container>
          <Row>
            <Col
              md={12}
              className="d-flex flex-column justify-content-center mb-5"
            >
              {PRE_MADE_LIST_OBJECT?.title && (
                <>
                  <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                      __html: PRE_MADE_LIST_OBJECT.title,
                    }}
                  />
                </>
              )}
              {PRE_MADE_LIST_OBJECT?.description && (
                <>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: PRE_MADE_LIST_OBJECT.description,
                    }}
                  />
                </>
              )}
            </Col>
          </Row>
          <Row className="justify-content-center">
            {PRE_MADE_LIST_OBJECT.actionCards.map((card, index) => {
              return (
                <Col
                  className={classNames("mb-4", styles.productTypes)}
                  key={index}
                  md={4}
                  lg={3}
                >
                  <FeatureCard
                    AsTag={card.asTag}
                    type="action"
                    {...card}
                    variant={FEATURE_CARD_VARIANT.Light}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PreMadeListView;
