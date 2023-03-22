import React, { useState } from "react";
import { registerUser } from "../../../../database/Authentication";
import { Formik, Field, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
// import ReCAPTCHA from "react-google-recaptcha";
// import Reaptcha from "reaptcha";

import Button from "../../button/Button";
import { validateRequired } from "../../../InternalService";
import { useRoot } from "../../../contexts/RootProvider";
import { createAccount } from "../../../emailSend";
import { triggerForm } from "../../../../services/internalServices";
// import { ADMIN_EMAILS } from "../../../constants";
import { setUser } from "../../../../services/helpers/tokenService";

interface ISignup {
  pressLogin: () => void;
}

const SignUp = (props: ISignup) => {
  const { pressLogin } = props;
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
            values.email,
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
              <Field
                type="text"
                id="userName"
                name="userName"
                placeholder="Jhon"
                validate={validateRequired}
              />
              {errors.userName && (
                <Form.Text className="text-danger">{errors.userName}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Jhon@gmail.com"
                validate={validateRequired}
              />
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
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
                variant="tertiary"
              >
                already have an account?
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
