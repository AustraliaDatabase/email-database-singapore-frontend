import React from "react";
import { CaretDown, Target } from "phosphor-react";

import { FaqItems } from "./interface";
import styles from "./styles.module.scss";
import { Accordion } from "react-bootstrap";
import classNames from "classnames";

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
          className={classNames("beneifit-accordion faq-accordion", styles.accordion)}
        >
          <Accordion.Item eventKey="" className="mb-0">
            <Accordion.Header as="h3" className="d-flex">
              <div>
                <CaretDown className="icon me-2" size={16} weight="bold" />
              </div>
              <h3 className={styles.title}>{faqItem.title}</h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className={styles.description}>{faqItem.element}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default FaqList;
