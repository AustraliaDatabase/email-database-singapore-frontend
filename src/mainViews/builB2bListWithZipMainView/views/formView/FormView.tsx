import React from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import Card from "../../../../shared/components/card/Card";
import { validateRequired } from "../../../../shared/InternalService";
import Button from "../../../../shared/components/button/Button";
import styles from "./styles.module.scss"

const FormView = () => {
  const CustomInputComponent = (props: any) => (
    <textarea type="text" {...props} />
  );
  return (
    <div className={styles.leftSide}>
      <Card>
        <Formik
          initialValues={{
            name: "",
            email: "",
            companyName: "",
            companyWebsite: "",
            location: "",
            subject: "",
            message: "",
            budget: 0,
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              console.log(values);
              resetForm();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <FormikForm>
            <Row>
              <Form.Group controlId="name" className="mt-3" as={Col} lg="6">
                <Form.Label>Name *</Form.Label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jhon Doe"
                  validate={validateRequired}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3" as={Col} lg="6">
                <Form.Label>Email *</Form.Label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jhon@gmail.com"
                  validate={validateRequired}
                />
              </Form.Group>
              <Form.Group
                controlId="companyName"
                className="mt-3"
                as={Col}
                lg="6"
              >
                <Form.Label>Company Name *</Form.Label>
                <Field
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Company Name"
                  validate={validateRequired}
                />
              </Form.Group>
              <Form.Group
                controlId="companyWebsite"
                className="mt-3"
                as={Col}
                lg="6"
              >
                <Form.Label>Company Website *</Form.Label>
                <Field
                  type="text"
                  id="companyWebsite"
                  name="companyWebsite"
                  placeholder="example.com"
                  validate={validateRequired}
                />
              </Form.Group>
              <Form.Group controlId="location" className="mt-3" as={Col} lg="6">
                <Form.Label>Country/Location *</Form.Label>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Country/Location"
                  validate={validateRequired}
                />
              </Form.Group>
              <Form.Group controlId="subject" className="mt-3" as={Col} lg="6">
                <Form.Label>Subject *</Form.Label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  validate={validateRequired}
                />
              </Form.Group>
              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message *</Form.Label>
                <Field
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  validate={validateRequired}
                  as={CustomInputComponent}
                />
              </Form.Group>
              <Form.Group controlId="budget" className="mt-3">
                <Form.Label>Your budget</Form.Label>
                <Field
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="Subject"
                />
              </Form.Group>
              <Form.Group>
                <Button className="w-100 mt-4" size="large" type="submit">
                  Request a sample and quote
                </Button>
              </Form.Group>
            </Row>
          </FormikForm>
        </Formik>
      </Card>
    </div>
  );
};

export default FormView;
