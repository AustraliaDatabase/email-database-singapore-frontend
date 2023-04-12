import classNames from "classnames";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link as ScrollLink } from "react-scroll";

import PriceCard from "../../../../shared/components/priceCard/PriceCard";
import { DATABASE_MAIN_TYPES } from "../../../../shared/enums";
import { IPrice, IPriceList, IStats } from "../../../../shared/interface";
import styles from "./style.module.scss";
import StatsCard from "./views/stats/StatsCard";

interface IPriceListView {
  databaseMainType: DATABASE_MAIN_TYPES;
  priceInfo: IPrice;
  statsInfo?: IStats;
  url: string;
  bannerPlainTitle: string;
  name: string;
}

const PriceListView = (props: IPriceListView) => {
  const {
    databaseMainType,
    priceInfo,
    statsInfo,
    url,
    bannerPlainTitle,
    name,
  } = props;


  return (
    <Container className="mt-5">
      <div
        className={classNames("text-center", styles.priceCardTitle)}
        dangerouslySetInnerHTML={{ __html: priceInfo?.title }}
      ></div>
      <Col xs={10} className="mx-auto">
        <div
          className={classNames("text-center", styles.priceCardDescription)}
          dangerouslySetInnerHTML={{ __html: priceInfo?.description }}
        ></div>
      </Col>
      <Row className={"justify-content-center"}>
        {priceInfo?.list?.length > 2 && (
          <ScrollLink to="#stats" offset={-300}>
            <div className={styles.viewPricing}>View Stats of {name} List</div>
          </ScrollLink>
        )}
        {priceInfo?.list?.map((element: IPriceList, index: number) => {
          return (
            <Col xs={12} md={7} lg={4} key={index} className={styles.price}>
              <PriceCard
                includes={element.includes}
                title={element.title}
                amount={element.price}
                caption={element.caption}
                url={url}
                directContacts={statsInfo?.emailAddress || 0}
                bannerPlainTitle={bannerPlainTitle} // TODO:
                databaseMainType={databaseMainType}
                AsTag={element?.asTag}
                isCompleteDatabase={
                  databaseMainType === DATABASE_MAIN_TYPES.REALTOR
                    ? index == 2
                    : index == 1
                }
                description={element.description}
                index={index}
              />
            </Col>
          );
        })}

        {/* {(priceInfo?.list?.length < 3 || !priceInfo?.list?.length) && (
          <Col
            style={{ maxWidth: priceInfo?.list?.length > 1 ? 500 : 700 }}
            className={styles.price}
          >
            <StatsCard
              name={name}
              databaseMainType={databaseMainType}
              statsInfo={statsInfo}
              displayPriceLink={false}
            />
          </Col>
        )} */}
      </Row>
      {/* {priceInfo?.list?.length > 2 && (
        <>
          <div className={styles.statsTitle}>Stats of {name} List</div>
          <Col className={classNames(styles.priceCardAlone)}>
            <div className={styles.statsCardAlone}>
              <StatsCard
                name={name}
                databaseMainType={databaseMainType}
                statsInfo={statsInfo}
                displayPriceLink
              />
            </div>
          </Col>
        </>
      )} */}
    </Container>
  );
};

export default PriceListView;
