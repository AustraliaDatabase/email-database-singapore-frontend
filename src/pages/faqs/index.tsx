import React from "react";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import Faqs from "../../shared/components/faqs/Faqs";
import styles from "./styles.module.scss";
import { FaqsSeed } from "../../shared/components/faqs/faqsSeeds";

const index = () => {
  return (
    <PublicLayout>
      <section className={classNames("ghost", styles.faqSection)} id="#faqs">
        <Container>
          <Row>
            <Col xs={12}>
              <Faqs
                title="Frequently Asked Questions"
                faqsList={FaqsSeed}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </PublicLayout>
  );
};

export default index;
