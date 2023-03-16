import React, { useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { CheckCircle } from "phosphor-react";
import { useRouter } from "next/router";

import {
  validateEmail,
  validateRequired,
} from "../../../../shared/InternalService";
import Button from "../../../../shared/components/button/Button";
import styles from "./style.module.scss";
import Card from "../../../../shared/components/card/Card";
import instance from "../../../../services/baseServices";
import { triggerForm } from "../../../../services/internalServices";

const SampleForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card
            title="Download 50 Free Realtors from 2.28 Million Email Lists"
            className="mt-5 mb-5"
          >
            <p className={styles.hereWhy}>
              Here&apos;s why EmailDatas&apos;s Real Estate Listings are worth
              checking out,
            </p>
            <ul className={styles.bulletPoints}>
              <li>
                <CheckCircle size={24} color="#FF4800" weight="fill" /> Enhance
                your ROI
              </li>
              <li>
                <CheckCircle size={24} color="#FF4800" weight="fill" /> Target
                the List of Realtors by Location
              </li>
              <li>
                <CheckCircle size={24} color="#FF4800" weight="fill" /> 1-year
                Updates for Free
              </li>
              <li>
                <CheckCircle size={24} color="#FF4800" weight="fill" />{" "}
                Guaranteed 95% Email Deliverability
              </li>
            </ul>
            <Formik
              initialValues={{
                name: router?.query?.name,
                email: router?.query?.email,
              }}
              onSubmit={async (values, { resetForm }) => {
                setLoading(true)
                try {
                  await instance.post("/sample-download-marketting", {
                    ...values,
                  });
                } catch (error) {}

                router.push(
                  "https://drive.google.com/uc?export=download&id=1A4VFq_tKNmJjmFCPazw6PjB-UW7OIVrz"
                );

                resetForm();

                triggerForm({
                  title: "",
                  text: `Thanks for Downloading!`,
                  icon: "success",
                  confirmButtonText: "OK",
                });

                setLoading(false)
              }}
            >
              {({ errors, touched, isValidating, values }: any) => (
                <FormikForm>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Doe"
                          validate={validateRequired}
                        />
                        {errors.name && (
                          <Form.Text className="text-danger">
                            {errors.name}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Field
                          id="email"
                          name="email"
                          placeholder="jane@acme.com"
                          type="email"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && (
                          <Form.Text className="text-danger">
                            {errors.email}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="d-flex justify-content-center pt-3 mb-3">
                    <Button
                      size="large"
                      block
                      type="submit"
                      loading={loading}
                      disabled={loading}
                    >
                      Download for Free
                    </Button>
                  </Form.Group>
                </FormikForm>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SampleForm;
