import React from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import Button from "../../../../shared/components/button/Button";
import styles from "./styles.module.scss";

const BottomBanner = () => {
  const router = useRouter();
  return (
    <section className={styles.bottomBanner}>
      <Container>
        <Row>
          <Col xs={12} className="d-flex align-items-center flex-column">
            <div className={classNames("text-center mb-4", styles.ourJob)}>
              It&apos;s our Job to{" "}
              <span className="text-highlight">Grow Your Business</span>
            </div>
            <Button
              size="large"
              onClick={() => {
                router.push("/contact-us");
              }}
              block
            >
              Have More Questions?
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BottomBanner;
