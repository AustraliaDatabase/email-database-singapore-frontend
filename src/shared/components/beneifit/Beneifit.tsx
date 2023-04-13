import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { IBeneifits, IMainProductInfo } from "../../interface";
import BeneifitsCollapsible from "./components/beneifitsCollapsible/BeneifitsCollapsible";
import styles from "./style.module.scss";
import { DATA_TYPE_TO_TITLE_FOR_CONTENT } from "../../constants";
import { numberWithCommas } from "../../InternalService";

interface IBeneifitView {
  beneifitInfo: IBeneifits;
  currentObject?: IMainProductInfo;
}

const dynamicBenefitList = (currentObject: IMainProductInfo) => [
  {
    title: `Email Marketing`,
    description: `Email marketing is crucial for better brand marketing, with 90% of sales coming from it. Our accurate ${currentObject?.name} email marketing lists offer 95% deliverability, ensuring a successful campaign. Target a broad range of customers and improve your brand's value instantly.`,
  },
  {
    title: `Telemarketing`,
    description: `EmailDatas offers high-quality ${numberWithCommas(
      currentObject?.stats?.phoneNumber?.toString() || "0"
    )} of telemarketing lists at an affordable rate for companies in the USA. By utilizing our ${
      currentObject?.name
    } lists, you can easily obtain the mobile numbers of potential customers and directly contact them for a fast response. Simplify your marketing efforts and enhance your business with our services.`,
  },
  {
    title: `Fax Marketing`,
    description: `With our reliable and accurate list of names, addresses, and fax numbers, you can quickly send information to your target audience without waiting for a response. Our list is affordable and easy to use, helping to streamline your marketing efforts and achieve success.
    `,
  },
  {
    title: `SMS Marketing`,
    description: `With our email lists, you can easily target a broad range of potential customers, increasing the chances of a successful marketing campaign. Our lists include essential data fields such as name, email ID, phone number, company name, and office address.`,
  },
  {
    title: `Direct Mailing Lists`,
    description: ` Our Direct Mailing Lists offer a convenient way to reach a vast audience of potential customers. By using our email lists, you can increase the chances of having a successful marketing campaign.`,
  },
];

const BeneifitView = (props: IBeneifitView) => {
  const { beneifitInfo, currentObject } = props;

  const benefitList = currentObject
    ? dynamicBenefitList(currentObject)
    : beneifitInfo?.list;

  return (
    <Container>
      <div className="d-flex flex-column align-items-center">
        <h2 className={styles.beneifitTitle}>
          {currentObject
            ? `Benefits of Our ${currentObject?.name}
                ${DATA_TYPE_TO_TITLE_FOR_CONTENT[currentObject?.type]} List`
            : beneifitInfo?.title}
        </h2>
        <div className={styles.beneifitDescription}>
          {currentObject
            ? `Discover the full potential of our ${currentObject?.name}
          ${DATA_TYPE_TO_TITLE_FOR_CONTENT[currentObject?.type]} List! Our comprehensive
          directory includes verified email IDs, phone numbers, company names,
          office addresses, and other key details.`
            : beneifitInfo?.description}
        </div>
      </div>
      <Row>
        <BeneifitsCollapsible BeneifitList={benefitList} />
      </Row>
    </Container>
  );
};

export default BeneifitView;
