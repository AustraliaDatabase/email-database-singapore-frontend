import React from "react";
import { Container } from "react-bootstrap";

import { CURRENT_OBJECT_HOME } from "../home/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import BeneifitView from "../../shared/components/beneifit/Beneifit";
import { IMainProductInfo, IReviewObject } from "../../shared/interface";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import ProductBanner from "../../shared/components/productBanner/ProductBanner";
import ProductDescription from "./views/productDescription/ProductDescription";
import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import OtherStates from "../mainProduct/views/otherStates/OtherStates";
import { DATA_TYPE_TO_TITLE } from "../../shared/constants";
import OtherProductFeature from "./views/otherProductFeature/OtherProductFeature";
import FaqsView from "../mainProduct/views/faqs/Faqs";
import styles from "./style.module.scss";

interface IMainProductMainView {
  databaseMainType: DATABASE_MAIN_TYPES;
  currentObject: IMainProductInfo;
  reviewObject?: IReviewObject;
  isScrollToPrice?: boolean;
}

const ProductMainViewV2 = (props: IMainProductMainView) => {
  const { databaseMainType, currentObject } = props;

  return (
    <>
      {(currentObject.banner || currentObject.price) && (
        <section className={styles.hero}>
          <ProductBanner currentObject={currentObject} />
        </section>
      )}

      <section>
        <ProductDescription currentObject={currentObject} />
      </section>

      <section>
        <Container>
          <OtherProductFeature currentObject={currentObject} />
        </Container>
      </section>

      <section className="dark">
        <BeneifitView beneifitInfo={CURRENT_OBJECT_HOME?.beneifits} />
      </section>

      <section id="#other-states">
        <OtherStates currentObject={currentObject} />
      </section>

      {currentObject?.why && (
        <section id="#why-us" className="dark" style={{ zIndex: "-1" }}>
          <WhyCardsWithContent
            title={`Why Choose EmailDatas for Your ${currentObject.name} ${DATA_TYPE_TO_TITLE[databaseMainType]} Lists Over Other Providers?`}
            description={`EmailDatas stands out as the ideal solution for ${currentObject.name} ${DATA_TYPE_TO_TITLE[databaseMainType]} Lists, offering exceptional email lists at a more budget-friendly price than competing providers.`}
            lists={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.lists}
          />
        </section>
      )}

      <section id="#faq">
        {/* @ts-ignore */}
        <FaqsView
          faqsList={FaqsSeed[databaseMainType] || []}
          title={currentObject?.faq?.title}
        />
      </section>
    </>
  );
};

export default ProductMainViewV2;
