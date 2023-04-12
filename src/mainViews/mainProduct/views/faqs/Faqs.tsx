import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ICollapsibleItem } from "../../../../shared/components/collapsibleList/interface";
import Faqs from "../../../../shared/components/faqs/Faqs";
import { IMainProductInfo } from "../../../../shared/interface";
import {
  DATA_TYPE_TO_TITLE,
  DATA_TYPE_TO_TITLE_FOR_CONTENT,
} from "../../../../shared/constants";
import { numberWithCommas } from "../../../../shared/InternalService";

interface IFaqsView {
  faqsList: ICollapsibleItem[];
  title?: string;
  currentObject?: IMainProductInfo;
}

const updateDynamicFaqsSeed = (currentObject: IMainProductInfo) => {
  const type = currentObject?.type
    ? DATA_TYPE_TO_TITLE[currentObject?.type]
    : "";
  const typeContent = currentObject?.type
    ? DATA_TYPE_TO_TITLE_FOR_CONTENT[currentObject?.type]
    : "";
  const name = currentObject?.name;
  const count = currentObject?.stats?.emailAddress;

  return [
    {
      title: `Are there any duplicate contacts in your ${name} ${typeContent} List?`,
      element: `No, all the contacts in our list are unique, so you won't receive any duplicates.`,
    },
    {
      title: `How Often do you update this ${name} database?`,
      element: `We update our list every three months to ensure that you receive only fresh and valid contacts. As of today, our ${name} ${typeContent} List contains ${numberWithCommas(
        count?.toString() || "0"
      )} contacts.
        `,
    },
    {
      title: `What payment method do you accept for the ${name} List?`,
      element: (
        <p>
          We accept major credit card payments such as VISA, MasterCard,
          American Express, and Discover via PayPal payment gateway. PayPal is
          100% secured payment method for buyers. Therefore, your payment is
          secured. <br /> <br /> We also accept Bitcoin payments which will be
          processed via Coinpayment.net and is 100% secured.
        </p>
      ),
    },
    {
      title: `How do you deliver the ${name} List?`,
      element: `You can download the ${name} List directly from the dashboard of our website. You can download it for 1 year and will get the latest updates every three months.`,
    },
    {
      title: `Can I export the ${name} List to CRM software?`,
      element: `Yes, our files are in CSV format, therefore you can easily feed them to any CRM platform.`,
    },
    {
      title: `Can I purchase a specific ${type} other than the ${name} List?`,
      element: `Yes, you can purchase a ${type} based on your specific requirements. We have not listed all of our contacts yet, so please feel free to contact us for custom requirements.`,
    },
    {
      title: `Where do these contacts in the ${name} List come from?`,
      element: `These data were collected from publicly available sources, LinkedIn, Yellow pages, Yelp, associations, MLS, licensing boards, government databases, and more.`,
    },
    {
      title: `Will I get unlimited access and usage of the ${name} List?`,
      element: `Yes, we will sell actual contact files to you. You will get complete access to this file. You will get 100% ownership of the files.`,
    },
  ];
};

const FaqsView = (props: IFaqsView) => {
  const { faqsList, title, currentObject } = props;

  const updatedFaqList = currentObject
    ? updateDynamicFaqsSeed(currentObject)
    : faqsList;

  return (
    <Container>
      <Row>
        <Col>
          <Faqs faqsList={updatedFaqList} title={title} description="" />
        </Col>
      </Row>
    </Container>
  );
};

export default FaqsView;
