import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik, Field, Form as FormikForm } from "formik";
import axios from "axios";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

import { useRoot } from "../../contexts/RootProvider";
import Button from "../button/Button";
import UCDModal from "../UCDModal/UCDModal";
import {
  validateEmail,
  validateRequired,
  validURL,
} from "../../InternalService";
import { emailSendSampleLink } from "../../emailSend";
import { triggerForm } from "../../../services/internalServices";
// import { ADMIN_EMAILS } from "../../constants";

const DownloadModal = () => {
  const { downloadLoadModalEnable, setDownloadLoadModalEnable, downloadInfo } =
    useRoot();

  const [loading, setLoading] = useState(false);
  const [capchaValue, setCapchaValue] = useState<string | null>("");

  const onChange = (value: string | null) => {
    setCapchaValue(value);
  };

  const pressClose = () => {
    setDownloadLoadModalEnable(false);
  };

  const mailChimpSubscription = async (
    businessEmail: string,
    fullName: string,
    companyName: string,
    companyWebsite: string
  ) => {
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

      const subscribedResponse = await axios.post("/api/newsletter", {
        businessEmail,
        fullName,
        companyName,
        companyWebsite,
      });

      const mailResponse = emailSendSampleLink(
        businessEmail,
        fullName,
        downloadInfo?.title,
        downloadInfo?.links,
        downloadInfo?.attachmentUrl || "#"
      );

      // ADMIN_EMAILS.forEach((email) => {
      //   emailSendSampleLinkAdmin(
      //     email,
      //     fullName,
      //     downloadInfo?.title,
      //     downloadInfo?.links,
      //     downloadInfo?.attachmentUrl || "#"
      //   );
      // });

      Promise.all([subscribedResponse, mailResponse])
        .then(() => {
          triggerForm({
            title: "Email has Sent!",
            text: `Thank you for requesting Sample. Free ${downloadInfo?.title} Sample has been to your email account. If you do not see the email in a few minutes, check your or “spam” folder Or If you have difficulty downloading or viewing the sample, Contact Us`,
            icon: "success",
            confirmButtonText: "OK",
          });

          setDownloadLoadModalEnable(false);
          setLoading(false);
        })
        .catch((error) => {
          triggerForm({
            title: "",
            text: "Is this a real email? If so, send an email to support@uscompanydata.com and we will add you to the list manually.",
            icon: "error",
            confirmButtonText: "OK",
          });

          setLoading(false);
        });
    } catch (error) {
      triggerForm({
        title: "Oops, something went wrong...",
        text: "Is this a real email? If so, send an email to support@uscompanydata.com and we will add you to the list manually.",
        icon: "error",
        confirmButtonText: "OK",
      });

      setLoading(false);
    }
  };

  return (
    <UCDModal
      bodyClassName="px-4 pb-4 pt-0"
      onHide={pressClose}
      title={`Free Sample List of ${downloadInfo?.title}`}
      size="lg"
      open={downloadLoadModalEnable}
    >
      <Col xs="12" className="pt-2">
        <Row>
          <Col>{downloadInfo?.description}</Col>
          <Col xs="auto">
            <Image
              objectFit="scale-down"
              objectPosition="center"
              width={200}
              height={120}
              layout="fixed"
              src="/undraw_folder_files_re_2cbm.svg"
              alt="download"
            />
          </Col>
        </Row>
      </Col>
      <Formik
        initialValues={{
          fullName: "",
          businessEmail: "",
          companyName: "",
          companyWebsite: "",
        }}
        onSubmit={async (values) => {
          mailChimpSubscription(
            values.businessEmail,
            values.fullName,
            values.companyName,
            values.companyWebsite
          );
        }}
      >
        {({ errors, touched, isValidating }: any) => (
          <FormikForm>
            <Row className="pt-4">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="fullName">Full Name</Form.Label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Ex:- Jhon"
                    validate={validateRequired}
                  />
                  {errors.fullName && (
                    <Form.Text className="text-danger">
                      {errors.fullName}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="businessEmail">
                    Business Email
                  </Form.Label>
                  <Field
                    type="text"
                    id="businessEmail"
                    name="businessEmail"
                    placeholder="Ex:- jhon@trim.com"
                    validate={validateEmail}
                  />
                  {errors.businessEmail && (
                    <Form.Text className="text-danger">
                      {errors.businessEmail}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Company Name</Form.Label>
                  <Field
                    id="companyName"
                    name="companyName"
                    placeholder="Your Company Name"
                    type="text"
                  />
                  {errors.companyName && touched.companyName && (
                    <Form.Text className="text-danger">
                      {errors.companyName}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="companyWebsite">
                    Company Website
                  </Form.Label>
                  <Field
                    type="text"
                    id="companyWebsite"
                    name="companyWebsite"
                    placeholder={`Ex:- ${process.env.NEXT_PUBLIC_BASE_URL}`}
                  />
                  {errors.companyWebsite && (
                    <Form.Text className="text-danger">
                      {errors.companyWebsite}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <ReCAPTCHA
              // @ts-ignore
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_API_KEY}
              onChange={onChange}
            />

            <Form.Group className="d-flex justify-content-center pt-3 mb-3">
              <Button
                onClick={() => setDownloadLoadModalEnable(true)}
                size="large"
                block
                type="submit"
                loading={loading}
              >
                Submit
              </Button>
            </Form.Group>
          </FormikForm>
        )}
      </Formik>
    </UCDModal>
  );
};

export default DownloadModal;
