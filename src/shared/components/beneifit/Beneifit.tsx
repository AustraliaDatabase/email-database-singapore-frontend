import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { IBeneifits, IMainProductInfo } from "../../interface";
import BeneifitsCollapsible from "./components/beneifitsCollapsible/BeneifitsCollapsible";
import styles from "./style.module.scss";
import { DATA_TYPE_TO_TITLE_FOR_CONTENT } from "../../constants";
import { numberWithCommas } from "../../InternalService";
import { Col } from "react-bootstrap";
import Card from "../card/Card";
import { useRouter } from "next/router";

interface IBeneifitView {
  beneifitInfo: IBeneifits;
  currentObject?: IMainProductInfo;
}

const dynamicBenefitList = (currentObject: IMainProductInfo) => [
  {
    title: `Email Marketing`,
    description: `Are you looking to enhance your brand marketing strategy? Look no further than email marketing, which drives up to 90% of sales for many businesses. With our ${currentObject?.name
      } email marketing lists, boasting a count of ${numberWithCommas(
        currentObject?.stats?.emailAddress?.toString() || ""
      )}, we offer a deliverability rate of 95%, ensuring a successful campaign. `,
  },
  {
    title: `Telemarketing`,
    description: `
    We offer high-quality telemarketing lists, including ${numberWithCommas(
      currentObject?.stats?.phoneNumber?.toString() || "0"
    )} mobile numbers for potential customers, all at an affordable rate for businesses in the USA. Our ${currentObject?.name
      } lists provide a straightforward and effective approach, allowing you to directly contact prospects for a fast response. 
    `,
  },
  {
    title: `Fax Marketing`,
    description: `
    If you're specifically targeting ${currentObject?.name}, our list of names, addresses, and fax numbers is the perfect solution. With a count of ${currentObject?.stats?.faxNumber} fax numbers for ${currentObject?.name}, you can quickly and easily send information to key decision-makers without waiting for a response. 
    `,
  },
  {
    title: `SMS Marketing`,
    description: `Looking for a comprehensive approach to reach potential customers? Look no further than our email lists, featuring a count of ${numberWithCommas(
      currentObject?.stats?.phoneNumber?.toString() || "0"
    )} phone numbers to help you connect with a diverse range of prospects. `,
  },
  {
    title: `Direct Mailing Lists`,
    description: `If you're looking to specifically target ${currentObject?.name
      }, our Direct Mailing Lists can help. With a count of ${numberWithCommas(
        currentObject?.stats?.address?.toString() || "0"
      )}  addresses for ${currentObject?.name
      }, you can conveniently reach top-level executives and increase your chances of a successful marketing campaign.`,
  },
];

const BeneifitView = (props: IBeneifitView) => {
  const { beneifitInfo, currentObject } = props;
  const router = useRouter();
  const isProductPage = router.pathname == "/[productId]";

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
          ${DATA_TYPE_TO_TITLE_FOR_CONTENT[currentObject?.type]
            } List! Our comprehensive
          directory includes verified email IDs, phone numbers, company names,
          office addresses, and other key details.`
            : beneifitInfo?.description}
        </div>
      </div>
      <Row>
        {isProductPage ?
          <BeneifitsCollapsible BeneifitList={benefitList} />
          :
          <>
            {benefitList.map((benefit, index) => {
              return (
                <Col key={index} xs={12} lg={6} className="mt-4">
                  <Card>
                    <h3 className={styles.title}>{benefit.title}</h3>
                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: benefit.description }}
                    />
                  </Card>
                </Col>
              );
            })}
          </>
        }
      </Row>
    </Container>
  );
};

export default BeneifitView;
