import React, { useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
// import { Col, Row, Form, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import dayjs from "dayjs";

import styles from "./contactUs.module.scss";
import {
  validateEmail,
  validateRequired,
  validURL,
} from "../../shared/InternalService";
import Card from "../../shared/components/card/Card";
import Button from "../../shared/components/button/Button";
import { contactUsEmailSend } from "../../shared/emailSend";
import { triggerForm } from "../../services/internalServices";
import axios from "axios";
import Reaptcha from "reaptcha";
import instance from "../../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const ContactUsMainViewMainView = () => {
  const [loading, setLoading] = useState(false);
  const [capchaValue, setCapchaValue] = useState<string | null>("");

  const CustomInputComponent = (props: any) => (
    <textarea type="text" {...props} />
  );

  const onChange = (value: string | null) => {
    setCapchaValue(value);
  };

  return (
    <div className={styles.wrapper}>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className={styles.header}>All Our databases are verified</h1>
            <p>Ask us anything We are here to answer your questions !</p>
            <Card title="Contact Us">
              <Formik
                initialValues={{
                  subject: "",
                  name: "",
                  email: "",
                  companyName: "",
                  message: "",
                  companyWebsite: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    setLoading(true);

                    if (!capchaValue) {
                      triggerForm({
                        text: "Capcha field is empty",
                        icon: "error",
                        confirmButtonText: "OK",
                      });

                      setLoading(false);
                      return;
                    }

                    await contactUsEmailSend(values);
                    await instance.post("/update-contact-us", {
                      ...values,
                    });

                    triggerForm({
                      title: "",
                      text: "Successfully Sent the Message",
                      icon: "success",
                      confirmButtonText: "OK",
                    });

                    resetForm();
                    setLoading(false);
                  } catch (error) {
                    triggerForm({
                      title: "",
                      text: "Oops! Something went wrong!",
                      icon: "error",
                      confirmButtonText: "OK",
                    });
                    setLoading(false);
                  }
                }}
              >
                {({ errors, touched, isValidating, values }: any) => (
                  <FormikForm>
                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="subject">Subject</Form.Label>
                          <Field
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            validate={validateRequired}
                          />
                          {errors.subject && (
                            <Form.Text className="text-danger">
                              {errors.subject}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
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
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="CompanyName">
                            Company Name
                          </Form.Label>
                          <Field
                            type="text"
                            id="companyName"
                            name="companyName"
                            placeholder="Company Name"
                            validate={validateRequired}
                          />
                          {errors.companyName && (
                            <Form.Text className="text-danger">
                              {errors.companyName}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="CompanyName">
                            Company Website
                          </Form.Label>
                          <Field
                            type="text"
                            id="companyWebsite"
                            name="companyWebsite"
                            placeholder="Company Website"
                            validate={validURL}
                          />
                          {errors.companyWebsite && (
                            <Form.Text className="text-danger">
                              {errors.companyWebsite}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="message">Message</Form.Label>
                          <Field
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Your message"
                            validate={validateRequired}
                            as={CustomInputComponent}
                          />
                          {errors.message && (
                            <Form.Text className="text-danger">
                              {errors.message}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    {values.name &&
                      values.companyName &&
                      values.companyWebsite &&
                      values.email &&
                      values.message &&
                      values.subject && (
                        <Reaptcha
                          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_API_KEY}
                          onVerify={onChange}
                        />
                      )}

                    <Form.Group className="d-flex justify-content-center pt-3 mb-3">
                      <Button
                        size="large"
                        block
                        type="submit"
                        loading={loading}
                        disabled={loading}
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </FormikForm>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsMainViewMainView;
