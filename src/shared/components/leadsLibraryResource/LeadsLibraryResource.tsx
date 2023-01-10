import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";

interface ILeadsLibraryResource {
  title?: string;
  description?: string;
  sourceList?: string;
  sourceExplain?: string;
}

const LeadsLibraryResource = (props: ILeadsLibraryResource) => {
  const { title, description, sourceList, sourceExplain } = props;
  return (
    <>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <Col xs="12" md="10">
            {title && (
              <>
                <div
                  className={classNames(
                    "mb-3 text-center",
                    styles.resourceTitle
                  )}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </>
            )}
            {description && (
              <>
                <div
                  className="text-center mb-0 pb-4 text-color-default"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </>
            )}
          </Col>
        </Row>
        <Row className="mt-md-3 mb-md-3">
          {sourceList && (
            <>
              <Col md="4" xs={12} className="pe-md-0">
                <div
                  className={styles.resourceList}
                  dangerouslySetInnerHTML={{ __html: sourceList }}
                />
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
                {sourceExplain && (
                  <div dangerouslySetInnerHTML={{ __html: sourceExplain }} />
                )}
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default LeadsLibraryResource;
