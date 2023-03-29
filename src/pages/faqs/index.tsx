import React from "react";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import Faqs from "../../shared/components/faqs/Faqs";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import styles from "./styles.module.scss";

const index = () => {
  return (
    <PublicLayout>
      <section className={classNames("ghost", styles.faqSection)} id="#faqs">
        <Container>
          <Row>
            <Col xs={12}>
              <Faqs
                title="Frequently Asked Questions"
                faqsList={FaqsSeed[DATABASE_MAIN_TYPES.COMPANY_DATABASE]}
                hideContactUs
              />
            </Col>
          </Row>
        </Container>
      </section>
    </PublicLayout>
  );
};

export default index;
