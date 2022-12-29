import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ICollapsibleItem } from "../../../../shared/components/collapsibleList/interface";
import Faqs from "../../../../shared/components/faqs/Faqs";
import { IFAQs } from "../../../../shared/interface";

interface IFaqsView {
  faqsList: ICollapsibleItem[];
  title?: string;
}

const FaqsView = (props: IFaqsView) => {
  const { faqsList, title } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Faqs
            faqsList={faqsList}
            title={title}
            description=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FaqsView;
