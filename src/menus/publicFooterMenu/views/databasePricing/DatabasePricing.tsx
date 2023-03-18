import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "./style.module.scss";

interface IDatabasePricing {
  title: string;
  list: any;
}

const DatabasePricing = (props: IDatabasePricing) => {
  const { title, list } = props;

  const getSeeMoreLinks: any = {
    "By States": "/pre-made-list/job-titles",
    "Job Titles": "/pre-made-list/job-titles",
    Industries: "/pre-made-list/industries",
    International: "/pre-made-list/states",
  };

  return (
    <Col md xs={6} className={styles.databasePricingWrapper}>
      <span className={styles.title}>{title}</span>
      <Row className={styles.priceList}>
        <Col className={styles.priceColumnLeft}>
          {list.map((priceListItem: any, index: number) => {
            return (
              <Col key={index}>
                <Link passHref href={`${priceListItem.url}`}>
                  {priceListItem.name}
                </Link>
              </Col>
            );
          })}
        </Col>
      </Row>
      <div className={styles.seeMoreText}>
        <Link href={getSeeMoreLinks[title]}>See More</Link>
      </div>
    </Col>
  );
};

export default DatabasePricing;
