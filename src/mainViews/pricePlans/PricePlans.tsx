import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import PriceCalculator from "./views/priceCalculator/PriceCalculator";
import styles from "./style.module.scss";
import classNames from "classnames";

const PricePlanMainView = () => {
  return (
    <div className={classNames(styles.wrap, "sectiontopfix")}>
      <section className="pt-0">
        <Container>
          <Row>
            <Col className="ps-md-2 ps-3">
              <PriceCalculator />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PricePlanMainView;
