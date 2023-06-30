import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ICollapsibleItem } from "../../../../shared/components/collapsibleList/interface";
import Faqs from "../../../../shared/components/faqs/Faqs";
import { IMainProductInfo } from "../../../../shared/interface";

interface IFaqsView {
  faqsList: ICollapsibleItem[];
  title?: string;
  currentObject?: IMainProductInfo;
}

const FaqsView = (props: IFaqsView) => {
  const { faqsList, title, currentObject } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Faqs faqsList={faqsList} title={title} description="" />
        </Col>
      </Row>
    </Container>
  );
};

export default FaqsView;
