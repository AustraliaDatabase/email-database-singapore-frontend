import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import SampleForm from "./views/sampleForm/SampleForm";
import Screenshot from "./views/screenshot/Screenshot";

const DownloadSampleMainView = () => {
  const router = useRouter();

  return (
    <Container>
      <Row>
        <Col md={5}>
          <Screenshot />
        </Col>
        <Col md={7}>{router?.query?.email ? <SampleForm /> : null}</Col>
      </Row>
    </Container>
  );
};

export default DownloadSampleMainView;
