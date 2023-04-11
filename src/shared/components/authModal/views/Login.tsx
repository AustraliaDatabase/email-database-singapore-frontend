import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { EnvelopeSimpleOpen, Eye, EyeSlash, Password } from "phosphor-react";
import { Formik, Field, Form as FormikForm } from "formik";

import Button from "../../button/Button";
import { loginUser } from "../../../../database/Authentication";
import { validateRequired } from "../../../InternalService";
import { useRoot } from "../../../contexts/RootProvider";
import { Col, Row } from "react-bootstrap";
import { setUser } from "../../../../services/helpers/tokenService";
import styles from "../style.module.scss";
interface ILogin {
  toggleValue: boolean;
  pressSignUp: () => void;
  pressToggle: () => void;
}

const Login = (props: ILogin) => {
  const { pressSignUp, pressToggle, toggleValue } = props;
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

  const AsTag = "span";

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
              <AsTag className={styles.fieldWrapper}>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Jhon"
                  validate={validateRequired}
                  className="ps-5"
                />
                <AsTag>
                  <EnvelopeSimpleOpen size={22} />
                </AsTag>
              </AsTag>
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Password</Form.Label>
              <AsTag className={styles.fieldWrapper}>
                <Field
                  type={toggleValue ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="*******"
                  validate={validateRequired}
                  className="ps-5"
                />
                <AsTag>
                  <Password size={22} />
                </AsTag>
                <AsTag className={styles.passToggler} onClick={pressToggle}>
                  {toggleValue ? <EyeSlash size={22} /> : <Eye size={22} />}
                </AsTag>
              </AsTag>
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
                  onClick={pressSignUp}
                  size="large"
                  className="w-100 mb-3"
                  variant="text"
                >
                  Don’t have an account? Sign Up
                </Button>
                <Button
                  loading={loading}
                  disabled={loading}
                  className="w-100"
                  size="large"
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
