import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { Breadcrumb } from "react-bootstrap";
import classNames from "classnames";
import { Formik, Field, Form as FormikForm } from "formik";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import Reaptcha from "reaptcha";
import {
  ArrowRight,
  Browser,
  Buildings,
  EnvelopeOpen,
  InstagramLogo,
  MapPin,
  PencilLine,
  User,
  YoutubeLogo,
} from "phosphor-react";

import {
  validateEmail,
  validateRequired,
  validURL,
} from "../../shared/InternalService";
import Card from "../../shared/components/card/Card";
import Button from "../../shared/components/button/Button";
import { contactUsEmailSend } from "../../shared/emailSend";
import { triggerForm } from "../../services/internalServices";
import instance from "../../services/baseServices";
import styles from "./contactUs.module.scss";

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
    <>
      <div className={styles.wrap}>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <Breadcrumb>
                <Link href="/" passHref>
                  <Breadcrumb.Item className={styles.breadcrumbLink}>
                    Home
                  </Breadcrumb.Item>
                </Link>
                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="hero-title text-white text-center text-md-start mb-3">
                Contact us
              </h1>
              <p className="text-white text-center text-md-start pb-3">
                We intend to help you discover the best business contacts on the
                market. Have questions? Don’t hesitate to contact us today!
              </p>
              <div className="d-flex align-items-start justify-content-center justify-content-md-start text-white mb-3">
                <MapPin size={24} />{" "}
                <h3 className="text-white ps-3">
                  Leads Library LLC
                  <br />
                  9169 W State St,
                  <br />
                  Garden City,
                  <br />
                  ID 83714, USA
                </h3>
              </div>
              <div
                className={classNames(
                  styles.social,
                  "d-flex align-items-start justify-content-center justify-content-md-start text-white mb-5 mb-md-3 ps-md-3 ms-md-4 mb-3"
                )}
              >
                <Link
                  passHref
                  href="https://www.linkedin.com/company/leadslibrary"
                >
                  <a className="text-white me-3">
                    <LinkedinIcon size={24} />
                  </a>
                </Link>
                <Link
                  passHref
                  href="https://www.youtube.com/channel/UCRw_QglGdZjhIzn2R4474TA"
                >
                  <a className="text-white me-3">
                    <YoutubeLogo size={24} />
                  </a>
                </Link>
                <Link passHref href="https://twitter.com/LeadsLibrary">
                  <a className="text-white me-3">
                    <TwitterIcon size={24} />
                  </a>
                </Link>
                <Link passHref href="https://www.instagram.com/leadslibrary">
                  <a className="text-white me-3">
                    <InstagramLogo size={24} />
                  </a>
                </Link>
                <Link passHref href="https://www.facebook.com/leadslibraryllc">
                  <a className="text-white me-3">
                    <FacebookIcon size={24} />
                  </a>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              className={classNames(styles.fromCard, "mt-4 md-lg-0")}
            >
              <Card title="Send Us a Message">
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
                          <Col md={12}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Ex:- Jhon"
                                  validate={validateRequired}
                                  icon={<User size={22} />}
                                />
                                <span>
                                  <User size={22} />
                                </span>
                              </span>
                              {errors.name && (
                                <Form.Text className="text-danger">
                                  {errors.name}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Form.Group className="mb-3">
                            <span className={styles.fieldWrapper}>
                              <Field
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                validate={validateRequired}
                              />
                              <span>
                                <PencilLine size={22} />
                              </span>
                            </span>
                            {errors.subject && (
                              <Form.Text className="text-danger">
                                {errors.subject}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <span className={styles.fieldWrapper}>
                              <Field
                                id="email"
                                name="email"
                                placeholder="Business Email"
                                type="email"
                                validate={validateEmail}
                              />
                              <span>
                                <EnvelopeOpen size={22} />
                              </span>
                            </span>
                            {errors.email && touched.email && (
                              <Form.Text className="text-danger">
                                {errors.email}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <span className={styles.fieldWrapper}>
                              <Field
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Company Name"
                                validate={validateRequired}
                              />
                              <span>
                                <Buildings size={22} />
                              </span>
                            </span>
                            {errors.companyName && (
                              <Form.Text className="text-danger">
                                {errors.companyName}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <span className={styles.fieldWrapper}>
                              <Field
                                type="text"
                                id="companyWebsite"
                                name="companyWebsite"
                                placeholder="Company Website"
                                validate={validURL}
                              />
                              <span>
                                <Browser size={22} />
                              </span>
                            </span>
                            {errors.companyWebsite && (
                              <Form.Text className="text-danger">
                                {errors.companyWebsite}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group className="mb-3">
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
                          className={styles.submitBtn}
                          size="large"
                          block
                          type="submit"
                          loading={loading}
                          disabled={loading}
                        >
                          Send Message Now <ArrowRight size={24} />
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
      <section className="py-4">
        <Container>
          <Row>
            <Col md={12} lg={6} className="pe-md-2">
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2924013497245!2d-116.27283768480865!3d43.6628882598227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aeff3fa94dd9ff%3A0x143d1afda4852270!2sW%20State%20St%2C%20Garden%20City%2C%20ID%2C%20USA!5e0!3m2!1sen!2slk!4v1643467875520!5m2!1sen!2slk"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUsMainViewMainView;
