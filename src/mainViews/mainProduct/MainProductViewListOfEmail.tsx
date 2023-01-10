import React from "react";

import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import BannerView from "./views/banner/Banner";
import styles from "./style.module.scss";
import FloatingMenu from "../../menus/floatingMenu/FloatingMenu";
import {
  FLOATING_MENU_LIST_OF_US_COMPANIES,
  HEADER_COLUMNS_COMPLETE_DATABASE,
} from "../../shared/constants";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";
import DataFields from "./views/dataFields/DataFields";
import ScreenshotView from "./views/screenshot/Screenshot";
import SourceView from "./views/source/Source";
import FaqsView from "./views/faqs/Faqs";
import WhyListDetailCardView from "./views/whyListDetailCard/WhyListDetailCard";
// import { WHY_DETAIL_CARD } from "./dummyText";
import MainWhyDetailCard from "./views/mainWhyDetailCard/MainWhyDetailCard";
import OtherStates from "./views/otherStates/OtherStates";
import BeneifitView from "./views/beneifit/Beneifit";
import { IMainProductInfo } from "../../shared/interface";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import Table from "../../shared/components/table/Table";
import { COMPANY_SET_ATTRIBUTES } from "../../pages/industries";
import { Col, Container } from "react-bootstrap";

interface IMainProductViewListOfEmail {
  databaseMainType: DATABASE_MAIN_TYPES;
  currentObject: IMainProductInfo;
  tableDataSet: any;
}

const MainProductViewListOfEmail = (props: IMainProductViewListOfEmail) => {
  const { databaseMainType, currentObject, tableDataSet } = props;

  return (
    <>
      {(currentObject.banner || currentObject.price) && (
        <section className={styles.hero}>
          <BannerView
            databaseMainType={databaseMainType}
            bannerInfo={currentObject.banner}
            priceInfo={currentObject.price}
            breadCrumb={currentObject.breadCrumb}
          />
        </section>
      )}
      <FloatingMenu menuList={FLOATING_MENU_LIST_OF_US_COMPANIES} />
      <div style={{ paddingTop: 150 }}>
        <TrustPilot title={currentObject?.review?.title} />
      </div>
      {currentObject?.why && (
        <section id="#why-us" className="ghost">
          <MainWhyDetailCard whyInfo={currentObject?.why} />
        </section>
      )}
      {currentObject?.why?.list && (
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
      )}
      {currentObject?.dataFields && (
        <section className="angel">
          <DataFields dataFieldsInfo={currentObject?.dataFields} />
        </section>
      )}
      {currentObject?.screenshot && (
        <section id="#free-sample">
          <ScreenshotView
            databaseMainType={databaseMainType}
            screenshotInfo={currentObject?.screenshot}
            name={currentObject?.name}
            url={currentObject?.url}
          />
        </section>
      )}
      {/* {(currentObject.price || currentObject.stats) && (
        <section id="#buy-now">
          <PriceListView
            databaseMainType={databaseMainType}
            priceInfo={currentObject.price}
            statsInfo={currentObject.stats}
            name={currentObject?.name}
            url={currentObject?.url}
            bannerPlainTitle={currentObject?.banner?.plainTitle}
          />
        </section>
      )} */}
      {currentObject?.beneifits && (
        <section className="ghost">
          <BeneifitView beneifitInfo={currentObject?.beneifits} />
        </section>
      )}
      {(currentObject.otherStates || currentObject.allList) && (
        <section id="#buy-now">
          <Col xs={10} className="mb-5 mx-auto text-center">
            <Container>
              <div
                className={styles.otherStateTitle}
                dangerouslySetInnerHTML={{
                  __html: currentObject?.otherStates?.title,
                }}
              ></div>
              <Table
                columns={HEADER_COLUMNS_COMPLETE_DATABASE}
                data={tableDataSet}
                isProductPage={false}
                attributesSet={COMPANY_SET_ATTRIBUTES}
              />
            </Container>
          </Col>
          {/* <OtherStates
            otherStatesInfo={currentObject.otherStates}
            allList={currentObject.allList}
            databaseMainType={databaseMainType}
          /> */}
        </section>
      )}
      {currentObject.sources && (
        <section className="gradient" id="#source">
          <SourceView sourceInfo={currentObject.sources} />
        </section>
      )}
      <section id="#faq" className="ghost">
        <FaqsView
          faqsList={FaqsSeed[databaseMainType] || []}
          title={currentObject?.faq?.title}
        />
      </section>
    </>
  );
};

export default MainProductViewListOfEmail;
