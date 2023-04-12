import React from "react";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

import FaqList from "./faqList/FaqList";
import { ICollapsibleItem } from "../collapsibleList/interface";
import styles from "./faqs.module.scss";

interface IFaqsView {
  faqsList: ICollapsibleItem[];
  title?: string;
  description?: string;
}

const Faqs = (props: IFaqsView) => {
  const { faqsList, title, description } = props;

  const faqsLength = faqsList ? faqsList.length : 0;
  const [faqsList1, faqsList2] =
    faqsLength > 0 ? divideEqually(faqsList, 2) : [[], []];

  const router = useRouter();

  function divideEqually(array: any, numParts: number) {
    const numItems = array.length;
    const quotient = Math.floor(numItems / numParts);
    const remainder = numItems % numParts;
    const parts = new Array(numParts).fill(quotient);
    for (let i = 0; i < remainder; i++) {
      parts[i] += 1;
    }
    let index = 0;
    return parts.map((part) => {
      const slice = array.slice(index, index + part);
      index += part;
      return slice;
    });
  }

  return (
    <>
      <div className={styles.questionTitle}>FAQ </div>
      <div className={styles.faqs}>
        {title && (
          <h2
            className={styles.faqTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        )}
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
          <Col xs={12} lg={6}>
            <div className={styles.faqsCol}>
              <FaqList list={faqsList1} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className={styles.faqsCol}>
              <FaqList list={faqsList2} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Faqs;
