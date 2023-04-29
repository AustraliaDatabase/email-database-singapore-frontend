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

  const numColumns = 2;
  const columnSize = Math.ceil(faqsList?.length / numColumns);

  const renderFaqs = (start: number, end: number) => {
    return (
      <>
        {faqsList?.slice(start, end).map((faqItem, index) => {
          return (
            <div key={index} className={styles.faqsCol}>
              <FaqList faqItem={faqItem} />
            </div>
          );
        })}
      </>
    );
  };

  const faqsColumns = Array.from({ length: numColumns }, (_, i) => {
    const start = i * columnSize;
    const end = start + columnSize;
    return renderFaqs(start, end);
  });

  return (
    <>
      <h2 className={styles.questionTitle}>Frequently Asked Questions</h2>
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
          {faqsColumns.map((column, index) => (
            <Col xs={12} lg={6} key={index}>
              {column}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Faqs;
