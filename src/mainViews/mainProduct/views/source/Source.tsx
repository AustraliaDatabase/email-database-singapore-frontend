import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ISource } from "../../../../shared/interface";
import styles from "./style.module.scss";

interface ISourceView {
  sourceInfo: ISource;
}

const SourceView = (props: ISourceView) => {
  const { sourceInfo } = props;
  // const getSourceDescription = () => {
  //   if (databaseMainType === DATABASE_MAIN_TYPES.REALTOR) {
  //     return "";
  //   }

  //   return `our calls for list verification reach over a million each year.
  //       That is our way of capturing new businesses, so our customers
  //       are the first to target them. We use different techniques to fix
  //       errors and obsolete entries and ensure that your data is
  //       current, accurate, and relevant. We gather company information
  //       from various sources, including:`;
  // };

  // const getRightSourceDescription = () => {
  //   if (databaseMainType === DATABASE_MAIN_TYPES.REALTOR) {
  //     return "The data we collect comes from various publicly accessible sources, such as public directories, daily utility connections, LinkedIn, press releases, annual reports, corporate websites, and so on. We then use our specialized programming and database capabilities to collect, combine, assemble and verify the information ourselves.";
  //   }

  //   return "";
  // };

  // const getSourceTitle = () => {
  //   if (databaseMainType === DATABASE_MAIN_TYPES.REALTOR) {
  //     return (
  //       <>
  //         What Are the Sources of{" "}
  //         <span className="text-highlight">
  //           List of Realtors in {currentObject.state}
  //         </span>{" "}
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       What Are the <span className="text-highlight">Sources</span> of These
  //       Contact Databases?
  //     </>
  //   );
  // };

  // const sourceDescription = getSourceDescription();
  // const rightSourceDescription = getRightSourceDescription();
  // const sourceTitle = getSourceTitle();

  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col md xs={12} className="justify-content-center">
          <div
            className={styles.sourceTitle}
            dangerouslySetInnerHTML={{ __html: sourceInfo?.title }}
          />
        </Col>
        <Col md xs={12}>
          <div
            className={styles.sourceDescription}
            dangerouslySetInnerHTML={{ __html: sourceInfo?.description }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default SourceView;
