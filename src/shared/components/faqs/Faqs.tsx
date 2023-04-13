import React from "react";
import { Col, Row } from "react-bootstrap";

import FaqList from "./faqList/FaqList";
import styles from "./faqs.module.scss";
import { FaqItems } from "./faqList/interface";

interface IFaqsView {
  faqsList: FaqItems[];
  title?: string;
  description?: string;
}

const Faqs = (props: IFaqsView) => {
  const { faqsList, title, description } = props;

  return (
    <>
      <div className={styles.questionTitle}>Frequently Asked Questions</div>
      <div className={styles.faqs}>
        <Col xs={10} className="mx-auto">
          {description && (
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}
          <br />
        </Col>
        <Row>
          {faqsList?.map((faqItem, index) => {
            return (
              <Col xs={12} lg={6} key={index}>
                <div className={styles.faqsCol}>
                  <FaqList faqItem={faqItem} />{" "}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Faqs;
