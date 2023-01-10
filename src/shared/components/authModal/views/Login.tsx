import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Formik, Field, Form as FormikForm } from "formik";

import Button from "../../button/Button";
import { loginUser } from "../../../../database/Authentication";
import { validateRequired } from "../../../InternalService";
import { useRoot } from "../../../contexts/RootProvider";
import { Col, Row } from "react-bootstrap";
import { setUser } from "../../../../services/helpers/tokenService";

const Login = () => {
  const {
    setAuthEnable,
    setAuthLoading,
    setForgetPasswordModalVisible,
    setLoggedInUser,
  } = useRoot();

  const [loading, setLoading] = useState(false);

  const loginCallBack = (user: any) => {
    setAuthEnable(false);
    setLoading(false);
    setAuthLoading(false);
    setLoggedInUser(user);
    setUser(user);
  };

  const loginCallBackFail = () => {
    setLoading(false);
  };

  const pressForgetPassword = () => {
    setAuthEnable(false);
    setAuthLoading(false);
    setForgetPasswordModalVisible(true);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);

          loginUser(
            values.email,
            values.password,
            loginCallBack,
            loginCallBackFail
          );
        }}
      >
        {({ errors, touched, isValidating }: any) => (
          <FormikForm>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Jhon"
                validate={validateRequired}
              />
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Password</Form.Label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="*******"
                validate={validateRequired}
              />
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col xs="12">
                <Button variant="text" onClick={pressForgetPassword}>
                  Forgot Password?
                </Button>
              </Col>
              <Col xs="12" className="text-center pb-2 pt-4">
                <Button
                  loading={loading}
                  disabled={loading}
                  size="large"
                  block
                  type="submit"
                >
                  Login
                </Button>
              </Col>
            </Row>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Login;
