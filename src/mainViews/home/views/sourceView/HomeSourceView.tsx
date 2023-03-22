import React from "react";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import { CaretRight } from "phosphor-react";

const HomeSourceView = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={5}>
          <h4 className={classNames(styles.sourceOfContacts)}>
            <span>
              What is the primary source of Email Lists that we offer?
            </span>
          </h4>
          <p>
            With our verification list, you can reach over a million every year.
            We do proper research on the business can capture new businesses so
            that our customers will be the first to target them.
          </p>
          <p>
            You can use several different techniques that will fix your error
            and obsolete entries. Our professional ensures that our data is
            accurate, current, and relevant.
          </p>
        </Col>
        <Col md={6} className="ps-lg-5 ps-md-0">
          <p className={styles.sourceItemListTitle}>
            The information of companies gather comes from various sources that
            include -
          </p>
          {[
            "Public directories",
            "New business filing",
            "Press release",
            "Corporate websites",
            "Annual report",
            "User-generated feedback",
            "Daily utility connections",
          ]?.map((element, index: number) => {
            return (
              <Col
                key={index}
                className="d-flex align-items-start justify-content-center justify-content-md-start"
              >
                <span className="text-highlight">
                  <CaretRight size={24} />{" "}
                </span>{" "}
                <p>{element}</p>
              </Col>
            );
          })}
          <Col className="text-center text-md-start">
            We have provided you with the information about the company in the
            USA. It will even help you in achieving the marketing needs of the
            person. The best thing is that we will provide you high-quality list
            which is reliable. The data provided is accurate, and you will get
            100% ownership of the files, and you can use it the way you want.
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSourceView;
