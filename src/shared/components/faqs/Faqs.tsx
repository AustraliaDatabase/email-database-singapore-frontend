import React from "react";
import { useRouter } from "next/router";
import { PhoneCall } from "phosphor-react";
import { Col, Row } from "react-bootstrap";

import FaqList from "./faqList/FaqList";
import Button from "../button/Button";
import { ICollapsibleItem } from "../collapsibleList/interface";
import styles from "./faqs.module.scss";

interface IFaqsView {
  faqsList: ICollapsibleItem[];
  title?: string;
  description?: string;
  hideContactUs?: boolean;
}

const Faqs = (props: IFaqsView) => {
  const { faqsList, title, description, hideContactUs } = props;

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

  const pressMoreQuestion = () => {
    router.push("/contact-us");
  };

  return (
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
      {!hideContactUs && (
        <div
          className="text-center mt-5 d-block d-md-flex  align-items-center justify-content-center"
          style={{ gap: 10 }}
        >
          <div className={styles.questionTitle}>
            <span className="text-highlight">Do you have</span> any questions?
          </div>
          <Button
            icon={<PhoneCall size={25} />}
            onClick={pressMoreQuestion}
            block
            size="large"
            className="mt-4 mt-md-0 mb-5 mb-md-0"
          >
            Contact Us
          </Button>
        </div>
      )}
    </div>
  );
};

export default Faqs;
