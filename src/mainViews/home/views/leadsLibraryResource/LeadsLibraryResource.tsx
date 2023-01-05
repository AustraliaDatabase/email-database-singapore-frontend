import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";

const LeadsLibraryResource = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <Col xs="12" md="10">
            <div
              className="mb-3 text-center"
              style={{ fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.5 }}
            >
              Lead Library’s Reliable Sources
            </div>
            <p className="text-center mb-0 pb-4 text-color-default">
              Buy contact lists from Leads Library. We are a data provider of
              reliable, comprehensive, and accurate B2B data lists. We gather
              information only from reliable sources, including:
            </p>
          </Col>
        </Row>
        <Row className="mt-md-3 mb-md-3">
          <Col md="4" xs={12} className="pe-md-0">
            <div className={styles.resourceList}>
              <ul>
                <li>Applications and Services</li>
                <li>Variety of consumer-facing companies</li>
                <li>Public directories & Corporate websites</li>
                <li>Business-facing companies</li>
                <li>Daily utility connections</li>
                <li>Filings and publications</li>
                <li>New business filings</li>
                <li>User-generated feedback</li>
                <li>Press releases & Annual reports</li>
                <li>Surveys & Subscriptions</li>
              </ul>
            </div>
          </Col>
          <Col
            md
            xs={12}
            className={classNames(
              "d-flex",
              "flex-column",
              "align-items-center",
              styles.resource
            )}
          >
            <p>
              The quality of data customers receive from us is impeccable, as we
              know that quality data is an essential component of the growth of
              their business.
            </p>
            <p>
              To ensure such a level of quality, we invest millions of dollars
              annually and dedicate hundreds of data experts for research and
              updates of our databases. Also, we make millions of calls every
              year for gathering data and data verification.
            </p>
            <p>
              That allows us to ensure that the mailing and email lists that we
              provide are free from errors and generate quality results for our
              customers.
            </p>
            <p>
              Moreover, you can check out with us regularly for records of new
              business filings. Capturing new businesses joining industries
              allows us to provide fresh opportunities for clientele already
              using our services.
            </p>
            <p>
              In the US and abroad, millions of new businesses open every year.
              Thus, many new entries are added to our existing database monthly.
            </p>
            <p className="mb-0">
              New data of new business listings come from the 51 states of
              America, so we are pretty sure you are interested in new people
              and businesses that you can target in your industry.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LeadsLibraryResource;
