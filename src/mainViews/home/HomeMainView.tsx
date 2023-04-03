import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import HomeSeed from "./homeSeeds";
import Faqs from "../../shared/components/faqs/Faqs";
import { CURRENT_OBJECT_HOME } from "./constants";
// import BeneifitView from "../mainProduct/views/beneifit/Beneifit";
import FaqsSeed from "../../shared/components/faqs/faqsSeeds";
import { DATABASE_MAIN_TYPES, FEATURE_CARD_VARIANT } from "../../shared/enums";
import GenericFactCard from "./views/genericFactCard/GenericFactCard";
import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import BottomBanner from "./views/bottomBanner/BottomBanner";
import HeroBanner from "./views/hero/HeroBanner";
import styles from "./homeMainView.module.scss";
import FeatureCard from "../../shared/components/featureCard/FeatureCard";
import classNames from "classnames";
import BeneifitView from "../../shared/components/beneifit/Beneifit";

const HomeMainView = () => {
  return (
    <>
      <HeroBanner
        caption={CURRENT_OBJECT_HOME.banner.caption}
        title={CURRENT_OBJECT_HOME.banner.title}
        description={CURRENT_OBJECT_HOME.banner.description}
      />

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

      <section id="#productType" className={styles.mainProductType}>
        <Container>
          <Row>
            <Col
              md={12}
              className="d-flex flex-column justify-content-center mb-5"
            >
              <h2 className={styles.whatTypeOfProduct}>
                EmailDatas Pre-Made Lists
              </h2>
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

      <section className="mt-5 mb-5">
        <WhyCardsWithContent
          title={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.title}
          description={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.description}
          lists={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.lists}
        />
      </section>

      <section className={styles.benefits}>
        <BeneifitView beneifitInfo={CURRENT_OBJECT_HOME?.beneifits} />
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
      <BottomBanner />
    </>
  );
};

export default HomeMainView;
