import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import styles from "./styles.module.scss";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import ScreenshotView from "../../../mainViews/mainProduct/views/screenshot/Screenshot";
import { IMainProductInfo } from "../../interface";
import PriceList from "./views/priceList/PriceList";

interface IProductBanner {
  currentObject: IMainProductInfo;
}

const ProductBanner = (props: IProductBanner) => {
  const { currentObject } = props;
  const bannerTitleRef: any = useRef();
  return (
    <div className={styles.bannerWrapper}>
      <Container>
        <div className={styles.breadCrumbWrapper}>
          <BreadCrumb
            databaseMainType={currentObject?.type}
            breadCrumb={currentObject?.breadCrumb}
          />
        </div>

        <Col xs={12} lg={12} className="mt-5">
          <div
            className={classNames(
              "text-center text-md-start",
              styles.bannerFont
            )}
            ref={bannerTitleRef}
            dangerouslySetInnerHTML={{ __html: currentObject?.banner?.title }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: currentObject?.banner?.description,
            }}
            className={classNames(
              "d-flex text-center text-md-start flex-column mt-4",
              styles.description
            )}
          />
        </Col>
        <Row>
          <Col xs={12} lg={6}>
            <ScreenshotView
              screenshotInfo={currentObject?.screenshot}
              currentObject={currentObject}
            />
          </Col>
          <Col xs={12} lg={6} className="p-lg-0">
            <PriceList currentObject={currentObject} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductBanner;
