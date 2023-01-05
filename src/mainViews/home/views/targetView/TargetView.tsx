import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";

import Button from "../../../../shared/components/button/Button";

const TargetView = () => {
  const router = useRouter();
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" md="10">
            <h3
              className="text-center text-white mb-3"
              style={{
                fontSize: "2.25rem",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              Target and Build Email List to Boost Your Business
            </h3>
            <p className="text-center text-white mb-5">
              emaildatas.com,we provide our customers targeted email lists ,
              which contains verified and accurate contact name ,job titles ,
              phone numbers, email addresses, postal addresses,industry ,
              revenue,number of employees and etc !
            </p>

            <Row className="d-flex mt-4 align-items-center justify-content-center">
              <Col lg="auto" xs={12}>
                <Image
                  objectFit="contain"
                  src="/grow-business-leads-library.png"
                  alt="grow-business-leads-library"
                  width={500}
                  height={412}
                />
              </Col>
              <Col lg xs={12} className="pt-5 px-0 px-md-3 pt-md-0">
                <p className="text-white">
                  We can build an email list for you depending on what you need,
                  may it be per:
                </p>

                <ul className="text-white">
                  <li>Job type (C-Level ,VP ,Director,Manager and Staff )</li>
                  <li>Job Title (CEO , CFO ,Descion makers or any title )</li>
                  <li>
                    Departments (HR,Sales,Marketing,Finance & Administration
                    ,Support,Engineering & Research,Operations & IT & IS )
                  </li>
                  <li>Industry (Industry Name/SIC Code /NAICS code)</li>
                  <li>Location (State ,City ,Zip Codes)</li>
                  <li>Revenue</li>
                  <li>Number of Employees</li>
                  <li>
                    Location type (Branch,Headquarters and Single Location )
                  </li>
                </ul>
              </Col>
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
                <p className="text-center text-white">
                  We can ensure the quality of our data because these have been
                  aggressively mined and are thoroughly cleaned by actual,
                  real-life people.
                </p>

                <Button
                  icon={<ArrowRight size={24} />}
                  variant="primary"
                  size="large"
                  type="button"
                  onClick={() => router.push("/build-custom-list")}
                >
                  Let&apos;s Get Started!
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TargetView;
