import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";

import styles from "./500MainView.module.scss";
import Link from "next/link";
import Button from "../../shared/components/button/Button";

const MainView500 = () => {
  return (
    <Container className={styles.error}>
      <h1 className="text-center">Shoot!</h1>
      <h2 className="text-center mb-2">Well, this is unexpected...</h2>
      <p className="text-center">
        An error occured and we&apos;re working to fix the problem! We&apos;ll
        be up and running shortly.
      </p>
      <Col xs="12" className="pt-3 d-flex justify-content-center">
        <a href="/" rel={"noreferrer"}>
          <Button>Back to Home</Button>
        </a>
      </Col>
      <Row>
        <Col xs={12} className="d-flex justify-content-center pt-4">
          <Image
            layout="fixed"
            src="/500 Internal Server Error-bro.jpg"
            alt="404"
            width={400}
            height={300}
            objectFit="contain"
            objectPosition="center"
          />
        </Col>
        <Col xs={12} className="pt-3"></Col>
      </Row>
    </Container>
  );
};

export default MainView500;
