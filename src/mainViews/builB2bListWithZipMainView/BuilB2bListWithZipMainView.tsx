import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ContentView from "./views/contentView/ContentView";
import styles from "./styles.module.scss";
import FormView from "./views/formView/FormView";

const BuilB2bListWithZipMainView = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Row className="justify-content-between">
          <Col lg={{ order: 1, span: 6 }}>
            <ContentView />
          </Col>
          <Col lg={{ order: 2, span: 5 }} className="mt-5 mt-lg-0">
            <FormView />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuilB2bListWithZipMainView;
