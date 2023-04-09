import React from "react";
import { Col, Container, Tab, Tabs } from "react-bootstrap";
import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";

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
    <h2 className={styles.tabElement}>
      Complete Stats of {currentObject?.name}{" "}
      {DATA_TYPE_TO_TITLE[currentObject?.type]} Database
    </h2>
  );

  return (
    <Container>
      <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="0" title={defaultHeaderName}>
          <Col md={6} lg={8}>
            <Col>
              <div className={styles.dbInfo}>
                <div>
                  Access a high-quality, affordable Alaska email list with
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
          <Col className={styles.dataStructureWrapper}>
            <DataStructure currentObject={currentObject} />
          </Col>
        </Tab>
        <Tab
          eventKey="1"
          title={<div className={styles.tabElement}>Reviews</div>}
        ></Tab>
      </Tabs>
    </Container>
  );
};

export default ProductDescription;
