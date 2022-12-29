import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import PriceCalculator from "./views/priceCalculator/PriceCalculator";
import styles from "./style.module.scss";

const PricePlanMainView = () => {
  return (
    <div className={styles.wrap}>
      <section>
        <Container>
          <Row>
            <Col className="ps-md-2 ps-3">
              <PriceCalculator />
            </Col>
            <Col md={3}>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PricePlanMainView;
