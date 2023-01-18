import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";
import { CircleWavyQuestion } from "phosphor-react";

import styles from "./style.module.scss";
import { IDataFields } from "../../../../shared/interface";

interface IDataFieldView {
  dataFieldsInfo: IDataFields;
}

const DataFields = (props: IDataFieldView) => {
  const { dataFieldsInfo } = props;

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div
            className={classNames("mb-4 text-center", styles.dataFieldTitle)}
            dangerouslySetInnerHTML={{ __html: dataFieldsInfo?.title }}
          ></div>
          <Col xs={10} className="mx-auto">
            <div
              className={classNames("text-center", styles.dataFieldDescription)}
              dangerouslySetInnerHTML={{ __html: dataFieldsInfo?.description }}
            />
          </Col>
          <div className={styles.chips}>
            {dataFieldsInfo?.fields?.split(";")?.map((chip, index) => (
              <div key={index}>
                <div className={styles.iconWrapper}>
                  <CircleWavyQuestion size={24} />
                </div>{" "}
                {chip}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DataFields;
