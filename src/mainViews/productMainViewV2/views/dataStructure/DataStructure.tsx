import React from "react";
import { Col, Row } from "react-bootstrap";

import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";
import { IMainProductInfo } from "../../../../shared/interface";
import { hideMiddleChars } from "../../../../shared/InternalService";
import styles from "./style.module.scss";

interface IDataStructure {
  currentObject: IMainProductInfo;
}

const DataStructure = (props: IDataStructure) => {
  const { currentObject } = props;

  const SAMPLE_SINGLE_CONTACT_STRUCTURE = [
    { column: "First Name", value: "Patty", starCount: 3 },
    { column: "Last Name", value: "Linduska" },
    {
      column: "Job Title",
      value: "Sr. Director of Training and Technical Assistance",
    },
    { column: "Email Address", value: "pattyl@alaskapca.org", starCount: 4 },
    { column: "Cell Number", value: "+1 907-232-8395", starCount: 4 },
    {
      column: "Linkedin Profile",
      value: "https://www.linkedin.com/in/patty-linduska-11304940",
      starCount: 17,
    },
    { column: "Company", value: "Alaska Primary Care Association" },
    { column: "Website", value: "alaskapca.org" },
    { column: "Phone Number", value: "907-929-2739", starCount: 3 },
    { column: "Fax Number", value: "907-929-2734", starCount: 4 },

    {
      column: "Address",
      value: "903 W. Northern Lights Blvd. Ste. 200",
      starCount: 10,
    },
    { column: "City", value: "Anchorage" },
    { column: "State", value: "AK" },
    { column: "Postal Code", value: "99503" },
    { column: "Country", value: "United States" },
    { column: "No of Employees", value: "20 - 49" },
    { column: "Revenue", value: "10 - 20 Million" },
    { column: "Industry", value: "Healthcare Facility/Healthcare Services" },
    { column: "SIC Code", value: "8099" },
  ];

  return (
    <div>
      <h2 className={styles.mainTitle}>
        {/* Data Structure of single  Contact */}
        Data Structure of Single {currentObject.name} Contact
      </h2>
      <div className={styles.structureWrapper}>
        <Row>
          {SAMPLE_SINGLE_CONTACT_STRUCTURE.map((element, index) => {
            return (
              <Col md={10} key={index}>
                <Row className="mb-3">
                  <Col>{element.column}</Col>
                  <Col>
                    <b>
                      {element.starCount
                        ? hideMiddleChars(element.value, element.starCount)
                        : element.value}
                    </b>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default DataStructure;
