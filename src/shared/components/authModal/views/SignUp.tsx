import React, { useState } from "react";
import { registerUser } from "../../../../database/Authentication";
import { Formik, Field, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import {
  EnvelopeSimpleOpen,
  Eye,
  EyeSlash,
  Password,
  User,
} from "phosphor-react";
// import ReCAPTCHA from "react-google-recaptcha";
// import Reaptcha from "reaptcha";

import Button from "../../button/Button";
import {
  validateRequired,
  emailValidation,
  passwordValidation,
} from "../../../InternalService";
import { useRoot } from "../../../contexts/RootProvider";
import { createAccount } from "../../../emailSend";
import { triggerForm } from "../../../../services/internalServices";
// import { ADMIN_EMAILS } from "../../../constants";
import { setUser } from "../../../../services/helpers/tokenService";
import styles from "../style.module.scss";

interface ISignup {
  pressLogin: () => void;
  pressToggle: () => void;
  toggleValue: boolean;
}

const SignUp = (props: ISignup) => {
  const { pressLogin, pressToggle, toggleValue } = props;
  const { setAuthLoading, setAuthEnable, setLoggedInUser } = useRoot();
  const [loading, setLoading] = useState(false);
  // const [capchaValue, setCapchaValue] = useState<string | null>("");

  const loginCallBack = (userResponse: any) => {
    setLoading(false);
    setAuthEnable(false);
    setLoggedInUser(userResponse);
    setAuthLoading(false);
    setUser(userResponse);
  };

  // const onChange = (value: string | null) => {
  //   setCapchaValue(value);
  // };

  const loginCallBackFail = () => {
    setLoading(false);
  };

  const AsTag = "span";

  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);

          setAuthLoading(true);

          registerUser(
            values.userName,
            `${process.env.SITE_PRE_FIX}${values.email}`,
            values.password,
            loginCallBack,
            loginCallBackFail
          );

          createAccount(values.userName, values.email);

          resetForm();
        }}
      >
        {({ errors, touched, isValidating, values }: any) => (
          <FormikForm>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="userName">Name</Form.Label>
              <AsTag className={styles.fieldWrapper}>
                <Field
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Jhon"
                  validate={validateRequired}
                  className="ps-5"
                />
                <AsTag>
                  <User size={22} />
                </AsTag>
              </AsTag>
              {errors.userName && (
                <Form.Text className="text-danger">{errors.userName}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <AsTag className={styles.fieldWrapper}>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Jhon@gmail.com"
                  validate={emailValidation}
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
              <Form.Label htmlFor="password">Password</Form.Label>
              <AsTag className={styles.fieldWrapper}>
                <Field
                  type={toggleValue ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="*******"
                  validate={passwordValidation}
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
            {/* 
            <Reaptcha
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_API_KEY}
              onVerify={onChange}
            /> */}

            <Form.Group className="pt-3 mb-3">
              <Button
                onClick={pressLogin}
                className="w-100 mb-3"
                size="large"
                variant="text"
              >
                Already have an account? Log In
              </Button>
              <Button
                className="w-100"
                loading={loading}
                disabled={loading}
                size="large"
                type="submit"
              >
                Sign Up
              </Button>
            </Form.Group>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
