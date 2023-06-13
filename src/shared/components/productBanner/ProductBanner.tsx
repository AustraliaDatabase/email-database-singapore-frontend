import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import BreadCrumb from "../breadCrumb/BreadCrumb";
import ScreenshotView from "../../../mainViews/mainProduct/views/screenshot/Screenshot";
import { IMainProductInfo } from "../../interface";
import PriceList from "./views/priceList/PriceList";
import styles from "./styles.module.scss";
import { numberWithCommas, replaceContacts } from "../../InternalService";
import DataStructure from "../../../mainViews/productMainViewV2/views/dataStructure/DataStructure";

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

        <Col xs={12} lg={12} className="mt-5 mb-4 mb-lg-5">
          <div
            className={classNames(
              "text-center text-lg-start",
              styles.bannerTitle
            )}
            ref={bannerTitleRef}
            dangerouslySetInnerHTML={{
              __html: replaceContacts(
                currentObject?.banner?.title,
                currentObject
              ),
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: currentObject?.banner?.description,
            }}
            className={classNames(
              "d-flex text-center text-lg-start flex-column mt-4",
              styles.description
            )}
          />
        </Col>
        <hr className={styles.hr} />
        <Row className="pt-3 pt-lg-5">
          <Col xs={12} lg={6}>
            <DataStructure currentObject={currentObject} />
            {/* 
            <ScreenshotView
              screenshotInfo={currentObject?.screenshot}
              currentObject={currentObject}
            /> */}
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
