import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";

import styles from "./styles.module.scss";
import Button from "../button/Button";

interface ITargetView {
  title?: string;
  description?: string;
  serviceList?: string;
  caption?: string;
}

const TargetView = (props: ITargetView) => {
  const { title, description, serviceList, caption } = props;
  const router = useRouter();
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" md="10">
            {title && (
              <>
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </>
            )}
            {description && (
              <>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </>
            )}

            <Row className="d-flex mt-4 align-items-center justify-content-center">
              {title && (
                <>
                  <Col lg="auto" xs={12}>
                    <Image
                      objectFit="contain"
                      src="/grow-business-leads-library.png"
                      alt="grow-business-leads-library"
                      width={500}
                      height={412}
                    />
                  </Col>
                </>
              )}
              {serviceList && (
                <>
                  <Col lg xs={12} className="pt-5 px-0 px-md-3 pt-md-0">
                    <div dangerouslySetInnerHTML={{ __html: serviceList }} />
                  </Col>
                </>
              )}
            </Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="mt-5"
              >
                {caption && (
                  <>
                    <div
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: caption }}
                    />
                  </>
                )}
                {title && (
                  <>
                    <Button
                      icon={<ArrowRight size={24} />}
                      variant="primary"
                      size="large"
                      type="button"
                      onClick={() => router.push("/build-custom-list")}
                    >
                      Let&apos;s Get Started!
                    </Button>
                  </>
                )}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TargetView;
