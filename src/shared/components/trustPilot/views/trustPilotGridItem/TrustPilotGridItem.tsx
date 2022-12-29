import classNames from "classnames";
import dayjs from "dayjs";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import { REVIEW_DROP_LINK } from "../../../../constants";
import styles from "./style.module.scss";

interface ITrustPilotGridItem {
  description: ReactNode;
  positiveCount: any[];
  negativeCount: any[];
  date: string;
  name: string;
  profUrl: string;
  author: string;
}

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

const TrustPilotGridItem = (props: ITrustPilotGridItem) => {
  const { description, positiveCount, negativeCount, date, name, profUrl, author } =
    props;

  return (
    <Row className={styles.container}>
      <a
        target="_blank"
        rel="noreferrer"
        className="pt-2"
        href={REVIEW_DROP_LINK}
      >
        <div className={styles.mainTitle}>{name}</div>
      </a>
      <div className="align-items-center">
        <a
          target="_blank"
          rel="noreferrer"
          className={classNames("d-flex align-items-center ")}
          href={REVIEW_DROP_LINK}
        >
          <div
            className={classNames(
              "d-flex justify-content-between align-items-center w-100"
            )}
          >
            <div className={styles.starGroup}>
              {positiveCount.map((element, index) => {
                return (
                  <Image
                    key={index}
                    src="/star.svg"
                    width={16}
                    height={16}
                    alt="Trust Pilot Images"
                    layout="fixed"
                    className={styles.star}
                  />
                );
              })}

              {negativeCount.map((element, index) => {
                return (
                  <Image
                    key={index}
                    src="/star.svg"
                    width={16}
                    height={16}
                    layout="fixed"
                    alt="Trust Pilot Negative - UsCompanyData"
                    className={styles.star}
                  />
                );
              })}
            </div>
            {/* @ts-ignore */}
            {/* <div className={styles.agoText}>{dayjs(date).fromNow()}</div> */}
          </div>
        </a>
      </div>
      <Col>
        <div className={styles.fontContent}>
          <div style={{ opacity: 0.7 }}>{description}</div>
        </div>
        <div
          className={classNames("d-flex align-items-center", styles.author)}
          style={{ gap: 8 }}
        >
          <Image
            src="/pencil.svg"
            width={20}
            height={20}
            alt="USCompany Data Reviews"
          />
          <div>{author}</div>
        </div>
      </Col>
    </Row>
  );
};

export default TrustPilotGridItem;
