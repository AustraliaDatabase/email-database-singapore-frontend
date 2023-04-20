import React from "react";
import { CaretDown, Target } from "phosphor-react";

import { FaqItems } from "./interface";
import styles from "./styles.module.scss";
import { Accordion } from "react-bootstrap";

interface IFaqList {
  faqItem: FaqItems;
}
const FaqList = (props: IFaqList) => {
  const { faqItem } = props;

  return (
    <>
      <div className={styles.faqItem}>
        <div className={styles.icon}>
          <Target size={32} />
        </div>
        <Accordion
          defaultActiveKey="0"
          className="beneifit-accordion faq-accordion"
        >
          <Accordion.Item eventKey="" className="mb-0">
            <Accordion.Header as="h3" className="d-flex align-items-start">
              <h3 className={styles.title}>{faqItem.title}</h3>
              <div>
                <CaretDown className="icon me-3" size={24} weight="bold" />
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div>{faqItem.element}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default FaqList;
