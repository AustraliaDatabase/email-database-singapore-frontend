import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../../../../shared/components/button/Button";

import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";
import { IMainProductInfo } from "../../../../shared/interface";
import styles from "./style.module.scss";

interface IDataStructure {
  currentObject: IMainProductInfo;
}

const DataStructure = (props: IDataStructure) => {
  const { currentObject } = props;
  return (
    <div>
      <h2 className={styles.mainTitle}>
        Data Structure of {currentObject.name}{" "}
        {DATA_TYPE_TO_TITLE[currentObject?.type]} List{" "}
      </h2>
      <div className={styles.structureWrapper}>
        <h3 className="mb-3 text-highlight">Personal Info</h3>
        <Col md={5}>
          <Row className="mb-2">
            <Col>First Name</Col>
            <Col>
              <b>Sean</b>
            </Col>
          </Row>
          <Row>
            <Col>Last Name</Col>
            <Col>Hoffbeck</Col>
          </Row>
          <Row>
            <Col>Email</Col>
            <Col>shoffbeck@alaskacc.edu</Col>
          </Row>
          <Row>
            <Col>Mobile Direct Dial</Col>
            <Col>+1 907-888-9166</Col>
          </Row>
          <Row>
            <Col>Employee Linkedin</Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/barbarajaneblake"
                rel="noreferrer"
                target="_blank"
              >
                Link
              </a>
            </Col>
          </Row>
          <Row>
            <Col>Company Name</Col>
            <Col>First Alaskans Institute</Col>
          </Row>
          <Row>
            <Col>Company URL</Col>
            <Col>firstalaskans.org</Col>
          </Row>
        </Col>
        <h3 className="mt-4 text-highlight">Office Info</h3>
      </div>
    </div>
  );
};

export default DataStructure;
