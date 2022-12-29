import React from "react";
import { useRouter } from "next/router";
import { PhoneCall } from "phosphor-react";
import { Col } from "react-bootstrap";

import CollapsibleList from "../collapsibleList/CollapsibleList";
import styles from "./faqs.module.scss";
import Button from "../button/Button";
import { IFAQs } from "../../interface";
import { ICollapsibleItem } from "../collapsibleList/interface";

interface IFaqsView {
  faqsList: ICollapsibleItem[];
  title?: string;
  description?: string;
  hideContactUs?: boolean;
}

const Faqs = (props: IFaqsView) => {
  const { faqsList, title, description, hideContactUs } = props;
  const router = useRouter();

  const pressMoreQuestion = () => {
    router.push("/contact-us");
  };

  return (
    <div className={styles.faqs}>
      {title && (
        <div
          className={styles.faqTitle}
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
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
      <CollapsibleList collapsibleList={faqsList} />
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
