import React from "react";
import { Col, Container, Tab, Tabs } from "react-bootstrap";
import classNames from "classnames";

import { DATA_TYPE_TO_TITLE, DATA_TYPE_TO_TITLE_FOR_CONTENT } from "../../../../shared/constants";
import { IMainProductInfo } from "../../../../shared/interface";
import StatsCard from "../../../mainProduct/views/priceList/views/stats/StatsCard";
import DataStructure from "../dataStructure/DataStructure";
import styles from "./style.module.scss";

interface IProductDescription {
  currentObject: IMainProductInfo;
}

const ProductDescription = (props: IProductDescription) => {
  const { currentObject } = props;

  const defaultHeaderName = (
    <div className={styles.tabElement}>Product Description</div>
  );

  return (
    <Container className="mt-5">
      <div className="db-details-tabs">
        <Tabs
          defaultActiveKey="0"
          id="uncontrolled-tab-example"
          className={classNames("mb-3", styles.tabs)}
        >
          <Tab eventKey="0" title={defaultHeaderName}>
            <Col md={6} lg={11} className="mx-auto">
              <h2 className={styles.statsHeader}>
                Stats of Our {currentObject?.name}{" "}
                {DATA_TYPE_TO_TITLE_FOR_CONTENT[currentObject?.type]} List
              </h2>
              <Col>
                <div className={styles.dbInfo}>
                  <div>
                    Access a high-quality, affordable {currentObject?.name} email list with
                    complete contact details for different professionals and
                    industries. Our database is sourced from reliable and
                    up-to-date sources.
                  </div>
                  <StatsCard
                    name={currentObject.name || ""}
                    databaseMainType={currentObject?.type}
                    statsInfo={currentObject?.stats}
                    displayPriceLink={false}
                  />
                </div>
              </Col>
            </Col>
            <Col xs={12} lg={11} className="mx-auto">
            </Col>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default ProductDescription;
