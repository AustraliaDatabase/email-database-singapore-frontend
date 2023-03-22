import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Link as ScrollLink } from "react-scroll";
import { Buildings } from "phosphor-react";

import Button from "../../shared/components/button/Button";
import FeatureCard from "../../shared/components/featureCard/FeatureCard";
// import SideTab from "../../shared/components/sideTab/SideTab";
import HomeSeed from "./homeSeeds";
// import CollapsibleList from "../../shared/components/collapsibleList/CollapsibleList";
// import FloatingMenu from "../../menus/floatingMenu/FloatingMenu";
import Faqs from "../../shared/components/faqs/Faqs";
import FloatingMenu from "./views/floatingMenu/FloatingMenu";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";
import MainWhyDetailCard from "../mainProduct/views/mainWhyDetailCard/MainWhyDetailCard";
import WhyListDetailCardView from "../mainProduct/views/whyListDetailCard/WhyListDetailCard";
import { CURRENT_OBJECT_HOME } from "./constants";
import BeneifitView from "../mainProduct/views/beneifit/Beneifit";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import {
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
  FEATURE_CARD_VARIANT,
} from "../../shared/enums";
import GenericFactCard from "./views/genericFactCard/GenericFactCard";
import TargetView from "../../shared/components/targetView/TargetView";
import LeadsLibraryResource from "../../shared/components/leadsLibraryResource/LeadsLibraryResource";
import ProductDetailsExplain from "./views/productDetailsExplain/ProductDetailsExplain";
import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import HomeSourceView from "./views/sourceView/HomeSourceView";
import styles from "./homeMainView.module.scss";

const HomeMainView = () => {
  const router = useRouter();

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <Row>
            <Col
              md={12}
              lg={7}
              className={classNames(
                styles.titles,
                "text-center",
                "text-md-start"
              )}
            >
              <Row>
                <Col
                  className="p-lg-0"
                  xs={{ order: 1, span: 12 }}
                  lg={{ order: 1, span: 12 }}
                >
                  <div
                    className={styles.heroCaption}
                    dangerouslySetInnerHTML={{
                      __html: CURRENT_OBJECT_HOME?.banner?.caption,
                    }}
                  />
                  <div
                    className={styles.heroTitle}
                    dangerouslySetInnerHTML={{
                      __html: CURRENT_OBJECT_HOME.banner.title,
                    }}
                  ></div>
                </Col>
                <Col
                  className="p-lg-0"
                  xs={{ order: 3, span: 12 }}
                  lg={{ order: 2, span: 12 }}
                >
                  <div
                    className="mt-2 mb-lg-5"
                    dangerouslySetInnerHTML={{
                      __html: CURRENT_OBJECT_HOME.banner.description,
                    }}
                  />
                </Col>

                <Col
                  className="p-lg-0"
                  xs={{ order: 2, span: 12 }}
                  lg={{ order: 3, span: 12 }}
                >
                  <Row>
                    <Col>
                      <ScrollLink to="#productType" offset={-200}>
                        <Button
                          className={styles.bannerBtn}
                          size="large"
                          variant={BUTTON_VARIANT_ENUM.Primary}
                          icon={<Buildings weight="fill" size={24} />}
                        >
                          Explore the Products
                        </Button>
                      </ScrollLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            {/* <Col
              md={12}
              lg={6}
              className={classNames(styles.banner, "mt-5 mt-lg-0")}
            >
              <Image
                width={650}
                height={400}
                objectFit="scale-down"
                layout="fixed"
                objectPosition="center"
                src="/dashboard.png"
                alt="dashboard"
              />
            </Col> */}
          </Row>
        </Container>
      </section>
      {/* <FloatingMenu maxTopAgain={200} floatingMenus={HomeSeed.floatingMenu} /> */}
      {/* <FloatingMenu menuList={HomeSeed.floatingMenu} /> */}
      {/* <section className="pb-0">
        <TrustPilot title={CURRENT_OBJECT_HOME.review.title} />
      </section> */}
      {/* <section id="#why-us">
        <MainWhyDetailCard whyInfo={CURRENT_OBJECT_HOME.why} />
      </section> */}

      <section id="#why-us">
        <Container className={styles.facts}>
          <Row>
            {HomeSeed.solutionFactList.map((option: any, index: number) => (
              <GenericFactCard
                key={index}
                title={option.title}
                icon={option.icon}
                description={option.description}
              />
            ))}
          </Row>
        </Container>
      </section>
      {CURRENT_OBJECT_HOME?.why?.list && (
        <section className="ghost">
          {CURRENT_OBJECT_HOME?.why?.list?.map((element, index) => {
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
      <section id="#productType" className={styles.mainProductType}>
        <Container>
          <Row>
            <Col
              md={12}
              className="d-flex flex-column justify-content-center mb-5"
            >
              {/* <p className="text-highlight mb-1 text-center text-md-start">
                <b className="me-3">EmailDatas</b>
                <ArrowRight size={18} />
              </p> */}
              <div className={styles.whatTypeOfProduct}>
                Explore the Products of Leads Library
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {CURRENT_OBJECT_HOME.actionCards.map((card, index) => {
              return (
                <Col
                  className={classNames("mb-4", styles.productTypes)}
                  key={index}
                  md={4}
                  lg={3}
                >
                  <FeatureCard
                    AsTag={card.asTag}
                    type="action"
                    {...card}
                    variant={FEATURE_CARD_VARIANT.Dark}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <ProductDetailsExplain
        subCategoy={true}
        id=""
        title={HomeSeed?.jobTitleAndJobLevelsTopic?.title}
        description={HomeSeed?.jobTitleAndJobLevelsTopic?.description}
        list={HomeSeed?.jobTitleAndJobLevelsTopic?.list}
        bg="white"
      />

      <ProductDetailsExplain
        subCategoy={false}
        id=""
        title={HomeSeed?.listByIndustryTopic?.title}
        description={HomeSeed?.listByIndustryTopic?.description}
        bg="ghost"
      />

      <ProductDetailsExplain
        subCategoy={true}
        id=""
        title={HomeSeed?.listByLocationTopic?.title}
        description={HomeSeed?.listByLocationTopic?.description}
        list={HomeSeed?.listByLocationTopic?.list}
        bg="white"
      />
      <ProductDetailsExplain
        subCategoy={false}
        id=""
        title={HomeSeed?.internationalListTopic?.title}
        description={HomeSeed?.internationalListTopic?.description}
        bg="ghost"
      />
      <section id="">
        <WhyCardsWithContent
          title={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.title}
          description={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.description}
          lists={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.lists}
        />
      </section>

      <section className={styles.benefits}>
        <BeneifitView beneifitInfo={CURRENT_OBJECT_HOME?.beneifits} />
      </section>

      <section className={classNames(styles.sourceSection)} id="#source">
        <HomeSourceView />
      </section>

      <section className={styles.target}>
        <TargetView
          title={CURRENT_OBJECT_HOME.targetTopic.title}
          description={CURRENT_OBJECT_HOME.targetTopic.description}
          serviceList={CURRENT_OBJECT_HOME.targetTopic.serviceList}
          caption={CURRENT_OBJECT_HOME.targetTopic.caption}
        />
      </section>

      <section>
        <LeadsLibraryResource
          title={CURRENT_OBJECT_HOME?.leadsLibraryRecource?.title}
          description={CURRENT_OBJECT_HOME?.leadsLibraryRecource?.description}
          sourceList={CURRENT_OBJECT_HOME?.leadsLibraryRecource?.source}
          sourceExplain={
            CURRENT_OBJECT_HOME?.leadsLibraryRecource?.sourceExplain
          }
        />
      </section>
      <section className="ghost" id="#faqs">
        <Container>
          <Row>
            <Col xs={12}>
              <Faqs
                title="Frequently Asked Questions"
                faqsList={FaqsSeed[DATABASE_MAIN_TYPES.COMPANY_DATABASE]}
                hideContactUs
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.bottomBanner}>
        <Container>
          <Row>
            <Col xs={12} className="d-flex align-items-center flex-column">
              <div className={classNames("text-center mb-4", styles.ourJob)}>
                It&apos;s our Job to{" "}
                <span className="text-highlight">Grow Your Business</span>
              </div>
              <Button
                size="large"
                onClick={() => {
                  router.push("/contact-us");
                }}
                block
              >
                Have More Questions?
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeMainView;
