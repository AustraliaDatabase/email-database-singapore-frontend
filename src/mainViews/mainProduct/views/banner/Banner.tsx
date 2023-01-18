import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link as ScrollLink } from "react-scroll";

import { LAST_UPDATE_DATE } from "../../../../shared/constants";
import Button from "../../../../shared/components/button/Button";
import styles from "./style.module.scss";
import { DATABASE_MAIN_TYPES } from "../../../../shared/enums";
import { IBanner, IPrice } from "../../../../shared/interface";
import BreadCrumb from "../../../../shared/components/breadCrumb/BreadCrumb";
import classNames from "classnames";
import { useRouter } from "next/router";

interface IBannerView {
  databaseMainType: DATABASE_MAIN_TYPES;
  bannerInfo: IBanner;
  priceInfo: IPrice;
  breadCrumb: string;
}

const BannerView = (props: IBannerView) => {
  const { databaseMainType, bannerInfo, priceInfo, breadCrumb } = props;
  const bannerTitleRef: any = useRef();

  const router = useRouter();

  const productId = router.query.productId;

  return (
    <div className={styles.hero}>
      <Container>
        <Row>
          <Col md={6} lg={8} xs={12}>
            <div className={styles.breadcrumb}>
              {/* TODO: */}
              <BreadCrumb
                databaseMainType={databaseMainType}
                breadCrumb={breadCrumb}
              />
            </div>
            <div
              className={classNames(
                "text-center text-md-start",
                styles.bannerFont
              )}
              ref={bannerTitleRef}
              dangerouslySetInnerHTML={{ __html: bannerInfo?.title }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: bannerInfo?.description }}
              className={classNames(
                "d-flex text-center text-md-start flex-column mt-4",
                styles.description
              )}
            />
            <div className="d-flex flex-column flex-md-row align-items-center mb-3 mt-4">
              <ScrollLink to="#buy-now" className={styles.scrollLink}>
                <Button className="me-md-5 me-0" size="large" block>
                  See Pricing
                </Button>
              </ScrollLink>
            </div>
            {/* <span className="text-highlight">35% Discount until 31 </span> */}
          </Col>

          <Col md={6} lg={4}>
            <Col>
              <div className={styles.dbInfo}>
                <div className={styles.title}>Database Info</div>
                <div className={styles.fromUsd}>
                  From {priceInfo?.list?.[0]?.price} USD
                </div>
                <p className={styles.lastUpdate}>{LAST_UPDATE_DATE} </p>
              </div>
              {/* {getBannerDescription()} */}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerView;
