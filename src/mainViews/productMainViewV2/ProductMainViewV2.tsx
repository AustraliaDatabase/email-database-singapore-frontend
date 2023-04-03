import React, { useEffect } from "react";
import Scroll from "react-scroll";

import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import FaqsView from "../mainProduct/views/faqs/Faqs";
import BeneifitView from "../../shared/components/beneifit/Beneifit";
import { IMainProductInfo, IReviewObject } from "../../shared/interface";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import styles from "./style.module.scss";

interface IMainProductMainView {
  databaseMainType: DATABASE_MAIN_TYPES;
  currentObject: IMainProductInfo;
  reviewObject?: IReviewObject;
  isScrollToPrice?: boolean;
}

const scroller = Scroll.scroller;

const ProductMainViewV2 = (props: IMainProductMainView) => {
  const { databaseMainType, currentObject, reviewObject, isScrollToPrice } =
    props;

  useEffect(() => {
    if (isScrollToPrice) {
      scroller.scrollTo("#buy-now", {});
    }
  }, []);
  return (
    <>
      {(currentObject.banner || currentObject.price) && (
        <section className={styles.hero}>
        </section>
      )}
      {(currentObject?.beneifits?.title ||
        currentObject?.beneifits?.description ||
        currentObject?.beneifits?.list?.length) && (
        <section className={styles.beneifits}>
          <BeneifitView beneifitInfo={currentObject?.beneifits} />
        </section>
      )}
      <section id="#faq" className="ghost">
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
