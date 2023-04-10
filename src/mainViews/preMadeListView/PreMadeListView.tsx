import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../shared/components/featureCard/FeatureCard";
import { FEATURE_CARD_VARIANT } from "../../shared/enums";
import { CURRENT_OBJECT_HOME } from "../home/constants";
import { PRE_MADE_LIST_OBJECT } from "./constants";

import styles from "./styles.module.scss";

const PreMadeListView = () => {
  return (
    <>
      <section id="#productType" className={styles.mainProductType}>
        <Container>
          <Row>
            <Col
              md={12}
              className="sectiontopfix d-flex flex-column justify-content-center mb-5"
            >
              <h2 className={styles.whatTypeOfProduct}>
                EmailDatas Pre-Made Lists
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {CURRENT_OBJECT_HOME.actionCards.map((card, index) => {
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
