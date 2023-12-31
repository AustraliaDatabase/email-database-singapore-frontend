import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";

import HomeSeed from "./homeSeeds";
import Faqs from "../../shared/components/faqs/Faqs";
import { CURRENT_OBJECT_HOME } from "./constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import GenericFactCard from "./views/genericFactCard/GenericFactCard";
import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import BottomBanner from "./views/bottomBanner/BottomBanner";
import HeroBanner from "./views/hero/HeroBanner";
import BeneifitView from "../../shared/components/beneifit/Beneifit";
import { FaqsSeed } from "../../shared/components/faqs/faqsSeeds";
import SiteReviews from "./views/siteReviews/SiteReviews";
import ServicesView from "../../shared/components/servicesView/ServicesView";
import styles from "./homeMainView.module.scss";
import ScrollableDetails from "./views/scrollableDetails/ScrollableDetails";

const HomeMainView = () => {
  return (
    <>
      <HeroBanner
        caption={CURRENT_OBJECT_HOME.banner.caption}
        title={CURRENT_OBJECT_HOME.banner.title}
        description={CURRENT_OBJECT_HOME.banner.description}
      />

      <section id="#why-us" className={styles.facts}>
        <Container>
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

      <section className="dark">
        <ServicesView
          title={CURRENT_OBJECT_HOME.services.title}
          description={CURRENT_OBJECT_HOME.services.description}
          services={CURRENT_OBJECT_HOME.services.serviceList}
        />
      </section>

      <section className={classNames("mt-5 mb-5")}>
        <WhyCardsWithContent
          title={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.title}
          description={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.description}
          lists={CURRENT_OBJECT_HOME?.whyLeadLibraryTopic.lists}
          isHome
        />
      </section>

      <section className="ghost">
        <ScrollableDetails explainDetails={CURRENT_OBJECT_HOME.productExplain} />
      </section>

      <section className="dark">
        <BeneifitView beneifitInfo={CURRENT_OBJECT_HOME?.beneifits} />
      </section>

      <section id="#faqs">
        <Container>
          <Row>
            <Col xs={12}>
              <Faqs title="Frequently Asked Questions" faqsList={FaqsSeed} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="ghost">
          <SiteReviews />
      </section> */}
    </>
  );
};

export default HomeMainView;
