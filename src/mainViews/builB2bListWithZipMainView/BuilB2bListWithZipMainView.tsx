import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ContentView from "./views/contentView/ContentView";
import buildB2bListWithZipSeeds from "./buildB2bListwithZipSeeds";
import styles from "./styles.module.scss";
import FormView from "./views/formView/FormView";

const BuilB2bListWithZipMainView = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <FormView />
          </Col>
          <Col xs={12} lg={8}>
            <ContentView content={buildB2bListWithZipSeeds} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuilB2bListWithZipMainView;
