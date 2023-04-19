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
          <Col
            xs={{ order: 2, span: 12 }}
            lg={{ order: 1, span: 4 }}
            className="mt-5 mt-lg-0"
          >
            <FormView />
          </Col>
          <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 8 }}>
            <ContentView content={buildB2bListWithZipSeeds} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuilB2bListWithZipMainView;
