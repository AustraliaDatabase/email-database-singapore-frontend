import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";

import styles from "./404MainView.module.scss";
import Link from "next/link";
import Button from "../../shared/components/button/Button";

const MainView404 = () => {
  return (
    <section className="sectiontopfix">
      <Container className={styles.error}>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              layout="fixed"
              src="/undraw_page_not_found_re_e9o6.svg"
              alt="404"
              width={400}
              height={300}
              objectFit="contain"
              objectPosition="center"
            />
          </Col>
          <Col xs={12} className="pt-3">
            <h2 className="text-center mb-2">
              We can&apos;t seem to find the page you are looking for
            </h2>
            <p className="text-center">
              But hey, its a beautiful day. There are so many exciting things
              out there...
            </p>
          </Col>
          <Col xs="12" className="pt-3 d-flex justify-content-center">
            <Link href="/">
              <a>
                <Button>Check them out</Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainView404;
