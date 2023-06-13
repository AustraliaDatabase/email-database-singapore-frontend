import React from "react";
import { Col, Container, Tab, Tabs } from "react-bootstrap";
import classNames from "classnames";

import { DATA_TYPE_TO_TITLE_FOR_CONTENT } from "../../../../shared/constants";
import { IMainProductInfo } from "../../../../shared/interface";
import StatsCard from "../../../mainProduct/views/priceList/views/stats/StatsCard";
import styles from "./style.module.scss";
import OtherProductFeature from "./views/otherProductFeature/OtherProductFeature";

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
            <Col xs={12} lg={11} className="mx-auto">
              <h2 className={styles.statsHeader}>
                Stats of Our {currentObject?.name}{" "}
                {DATA_TYPE_TO_TITLE_FOR_CONTENT[currentObject?.type]} List
              </h2>
              <Col>
                <div className={styles.dbInfo}>
                  <StatsCard
                    name={currentObject.name || ""}
                    databaseMainType={currentObject?.type}
                    statsInfo={currentObject?.stats}
                    displayPriceLink={false}
                  />
                </div>
              </Col>
              <OtherProductFeature currentObject={currentObject} />
            </Col>
            <Col xs={12} lg={11} className="mx-auto"></Col>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default ProductDescription;
