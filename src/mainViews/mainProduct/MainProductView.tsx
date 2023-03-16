import React, { useEffect } from "react";
import Scroll from "react-scroll";

import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import BannerView from "./views/banner/Banner";
import PriceListView from "./views/priceList/PriceList";
import FloatingMenu from "../../menus/floatingMenu/FloatingMenu";
import { FLOATING_MENU, FLOATING_MENU_OLD } from "../../shared/constants";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";
import DataFields from "./views/dataFields/DataFields";
import ScreenshotView from "./views/screenshot/Screenshot";
import SourceView from "./views/source/Source";
import FaqsView from "./views/faqs/Faqs";
import WhyListDetailCardView from "./views/whyListDetailCard/WhyListDetailCard";
import OtherStates from "./views/otherStates/OtherStates";
import BeneifitView from "./views/beneifit/Beneifit";
import { IMainProductInfo, IReviewObject } from "../../shared/interface";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import OwnReviews from "./views/ownReviews/OwnReviews";
import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import styles from "./style.module.scss";
import classNames from "classnames";

interface IMainProductMainView {
  databaseMainType: DATABASE_MAIN_TYPES;
  currentObject: IMainProductInfo;
  reviewObject?: IReviewObject;
  isScrollToPrice?: boolean;
}

const scroller = Scroll.scroller;

const MainProductMainView = (props: IMainProductMainView) => {
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
          <BannerView
            databaseMainType={databaseMainType}
            bannerInfo={currentObject.banner}
            priceInfo={currentObject.price}
            breadCrumb={currentObject.breadCrumb}
            statsInfo={currentObject.stats}
            name={currentObject?.name}
          />
        </section>
      )}
      <FloatingMenu
        menuList={
          databaseMainType === DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD ||
          databaseMainType === DATABASE_MAIN_TYPES.REALTOR_OLD ||
          databaseMainType === DATABASE_MAIN_TYPES.INDUSTRY
            ? FLOATING_MENU_OLD
            : FLOATING_MENU
        }
      />
      {/* <div style={{ paddingTop: 150 }}>
        <TrustPilot title={currentObject?.review?.title} />
      </div> */}

      {currentObject?.why && (
        <section id="#why-us">
          <WhyCardsWithContent
            title={currentObject?.why.title}
            description={currentObject?.why.description}
            lists={currentObject?.why.list}
          />
        </section>
      )}

      {/* {currentObject?.why?.list && (
        <section className="ghost">
          {currentObject?.why?.list?.map((element, index) => {
            return (
              <WhyListDetailCardView
                key={index}
                index={index}
                title={element.contentTitle}
                description={element.content}
              />
            );
          })}
        </section>
      )} */}

      {currentObject?.dataFields && (
        <section className={styles.dataFields}>
          <DataFields dataFieldsInfo={currentObject?.dataFields} />
        </section>
      )}
      {currentObject?.screenshot && (
        <section id="#free-sample" className="ghost">
          <ScreenshotView
            databaseMainType={databaseMainType}
            screenshotInfo={currentObject?.screenshot}
            name={currentObject?.name}
            url={currentObject?.url}
          />
        </section>
      )}
      {(currentObject.price || currentObject.stats) && (
        <section id="#buy-now" className={styles.pricing}>
          <PriceListView
            databaseMainType={databaseMainType}
            priceInfo={currentObject.price}
            statsInfo={currentObject.stats}
            name={currentObject?.name}
            url={currentObject?.url}
            bannerPlainTitle={currentObject?.banner?.plainTitle}
          />
        </section>
      )}
      {currentObject.sources && (
        <section id="#source">
          <SourceView sourceInfo={currentObject.sources} />
        </section>
      )}
      {(currentObject?.beneifits?.title ||
        currentObject?.beneifits?.description ||
        currentObject?.beneifits?.list?.length) && (
        <section className={styles.beneifits}>
          <BeneifitView beneifitInfo={currentObject?.beneifits} />
        </section>
      )}
      {(currentObject.otherStates || currentObject.allList) &&
        databaseMainType !== DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD &&
        databaseMainType !== DATABASE_MAIN_TYPES.REALTOR_OLD && (
          <section id="#other-states">
            <OtherStates
              otherStatesInfo={currentObject.otherStates}
              allList={currentObject.allList}
              databaseMainType={databaseMainType}
            />
          </section>
        )}

      <section id="#faq" className="ghost">
        {/* @ts-ignore */}
        <FaqsView
          faqsList={FaqsSeed[databaseMainType] || []}
          title={currentObject?.faq?.title}
        />
      </section>
      {(databaseMainType == DATABASE_MAIN_TYPES.REALTOR ||
        databaseMainType == DATABASE_MAIN_TYPES.COMPANY_DATABASE ||
        databaseMainType == DATABASE_MAIN_TYPES.TARGET ||
        databaseMainType == DATABASE_MAIN_TYPES.JOB_TITLE) && (
        <section>
          <OwnReviews reviewObject={reviewObject} name={currentObject?.name} />
        </section>
      )}
    </>
  );
};

export default MainProductMainView;
