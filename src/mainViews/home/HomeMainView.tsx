import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Buildings, CaretRight, HouseLine } from "phosphor-react";

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
import { BUTTON_VARIANT_ENUM, DATABASE_MAIN_TYPES } from "../../shared/enums";
import styles from "./homeMainView.module.scss";
import GenericFactCard from "./views/genericFactCard/GenericFactCard";
import TargetView from "./views/targetView/TargetView";

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
                  <div className={styles.heroCaption}>
                    96% Email Accuracy guarantee
                  </div>
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
                          B2B Emails
                        </Button>
                      </ScrollLink>
                      <ScrollLink to="#productType" offset={-200}>
                        <Button
                          className={classNames(
                            "ms-0 ms-md-3 ms-lg-4",
                            styles.bannerBtn
                          )}
                          size="large"
                          variant={BUTTON_VARIANT_ENUM.Tertiary}
                        >
                          <HouseLine weight="fill" size={24} />
                          Realtors
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
      <FloatingMenu maxTopAgain={200} floatingMenus={HomeSeed.floatingMenu} />
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
                <b className="me-3">JozData</b>
                <ArrowRight size={18} />
              </p> */}
              <div className={styles.whatTypeOfProduct}>
                Check the Prices of the products we provide
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
                  <FeatureCard AsTag={card.asTag} type="action" {...card} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className={styles.benefits}>
        <BeneifitView beneifitInfo={CURRENT_OBJECT_HOME?.beneifits} />
      </section>

      <section
        className={classNames(
          "secondayColor",
          "secondayColor",
          styles.sourceSection
        )}
        id="#source"
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={5}>
              <h4 className={classNames(styles.sourceOfContacts)}>
                <span className="text-highlight">
                  What is the primary source of Email Lists that we offer?
                </span>
              </h4>
              <p>
                With our verification list, you can reach over a million every
                year. We do proper research on the business can capture new
                businesses so that our customers will be the first to target
                them.
              </p>
              <p>
                You can use several different techniques that will fix your
                error and obsolete entries. Our professional ensures that our
                data is accurate, current, and relevant.
              </p>
            </Col>
            <Col md={6} className="ps-lg-5 ps-md-0">
              <p className={styles.sourceItemListTitle}>
                The information of companies gather comes from various sources
                that include -
              </p>
              {[
                "Public directories",
                "New business filing",
                "Press release",
                "Corporate websites",
                "Annual report",
                "User-generated feedback",
                "Daily utility connections",
              ]?.map((element, index: number) => {
                return (
                  <Col
                    key={index}
                    className="d-flex align-items-start justify-content-center justify-content-md-start"
                  >
                    <span className="text-highlight">
                      <CaretRight size={24} />{" "}
                    </span>{" "}
                    <p>{element}</p>
                  </Col>
                );
              })}
              <Col className="text-center text-md-start">
                We have provided you with the information about the company in
                the USA. It will even help you in achieving the marketing needs
                of the person. The best thing is that we will provide you
                high-quality list which is reliable. The data provided is
                accurate, and you will get 100% ownership of the files, and you
                can use it the way you want.
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.target}>
        <TargetView />
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
