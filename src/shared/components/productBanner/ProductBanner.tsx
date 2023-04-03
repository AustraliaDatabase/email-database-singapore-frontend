import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { DATABASE_MAIN_TYPES } from "../../enums";
import ScreenshotView from "../../../mainViews/mainProduct/views/screenshot/Screenshot";
import { IBanner, IScreenshot } from "../../interface";
import classNames from "classnames";

interface IProductBanner {
  databaseMainType: DATABASE_MAIN_TYPES;
  bannerInfo: IBanner;
  breadCrumb: string;
  modalScreenshotTitle?: string;
  screenshotInfo: IScreenshot;
  name: string;
  url: string;
}

const ProductBanner = (props: IProductBanner) => {
  const {
    breadCrumb,
    bannerInfo,
    databaseMainType,
    screenshotInfo,
    name,
    url,
  } = props;
  const bannerTitleRef: any = useRef();
  return (
    <div className={styles.bannerWrapper}>
      <Container>
        <div className={styles.breadCrumbWrapper}>
          <BreadCrumb
            databaseMainType={databaseMainType}
            breadCrumb={breadCrumb}
          />
        </div>

        <Col xs={12} lg={12} className="mt-5">
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
        </Col>
        <Row>
          <Col xs={12} lg={6}>
            <ScreenshotView
              databaseMainType={databaseMainType}
              screenshotInfo={screenshotInfo}
              name={name}
              url={url}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductBanner;
