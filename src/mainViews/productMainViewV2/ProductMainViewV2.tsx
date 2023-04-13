import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";

import { CURRENT_OBJECT_HOME } from "../home/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import BeneifitView from "../../shared/components/beneifit/Beneifit";
import { IMainProductInfo, IReviewObject } from "../../shared/interface";
import ProductBanner from "../../shared/components/productBanner/ProductBanner";
import ProductDescription from "./views/productDescription/ProductDescription";
import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import OtherStates from "../mainProduct/views/otherStates/OtherStates";
import { DATA_TYPE_TO_TITLE } from "../../shared/constants";
import OtherProductFeature from "./views/otherProductFeature/OtherProductFeature";
import { FaqsSeed } from "../../shared/components/faqs/faqsSeeds";
import FaqsView from "../mainProduct/views/faqs/Faqs";
import FloatingPurchase from "../../shared/components/floatingPurchase/FloatingPurchase";
import styles from "./style.module.scss";
import SectionIntersect from "../../shared/components/sectionIntersect/SectionIntersect";

interface IMainProductMainView {
  databaseMainType: DATABASE_MAIN_TYPES;
  currentObject: IMainProductInfo;
  reviewObject?: IReviewObject;
  isScrollToPrice?: boolean;
}

const ProductMainViewV2 = (props: IMainProductMainView) => {
  const { databaseMainType, currentObject } = props;
  const [purchaseVisible, setPurchaseVisible] = useState(false);

  const bannerId = "product-banner";
  const handlePurchaseVisible = (value: boolean) => {
    setPurchaseVisible(value);
  };

  return (
    <>
      <SectionIntersect onChange={handlePurchaseVisible}>
        {(currentObject.banner || currentObject.price) && (
          <section className={styles.hero} id={bannerId}>
            <ProductBanner currentObject={currentObject} />
          </section>
        )}
      </SectionIntersect>

      <FloatingPurchase id={bannerId} visiblity={purchaseVisible}  currentObject={currentObject}/>

      <section>
        <ProductDescription currentObject={currentObject} />
      </section>

      <section className={classNames(styles.beneifits, "dark")}>
        <BeneifitView
          beneifitInfo={CURRENT_OBJECT_HOME?.beneifits}
          currentObject={currentObject}
        />
      </section>

      <section>
        <Container>
          <OtherProductFeature currentObject={currentObject} />
        </Container>
      </section>

      <section id="#other-states" className="ghost">
        <OtherStates currentObject={currentObject} />
      </section>

      {currentObject?.why && (
        <section
          id="#why-us"
          className={classNames(styles.whySection, "dark")}
          style={{ zIndex: "-1" }}
        >
          <WhyCardsWithContent
            title={`EmailDatas is the best choice for your ${currentObject.name} ${DATA_TYPE_TO_TITLE[databaseMainType]} Lists`}
            description={`EmailDatas stands out as the ideal solution for ${currentObject.name} ${DATA_TYPE_TO_TITLE[databaseMainType]} Lists, offering exceptional email lists at a more budget-friendly price than competing providers.`}
            lists={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.lists}
          />
        </section>
      )}

      <section id="#faq">
        <FaqsView
          faqsList={FaqsSeed}
          title={currentObject?.faq?.title}
          currentObject={currentObject}
        />
      </section>
    </>
  );
};

export default ProductMainViewV2;
