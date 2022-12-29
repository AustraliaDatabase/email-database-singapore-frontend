import React, { useEffect, useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { Col, Row, Form } from "react-bootstrap";
import Select from "react-select";
import dayjs from "dayjs";

import { validateRequired, validURL } from "../../../../shared/InternalService";
import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { registerUser } from "../../../../database/Authentication";
import { triggerForm } from "../../../../services/internalServices";
import { COUNTRY_LIST } from "../../../../shared/seeds/countryList";
import instance from "../../../../services/baseServices";
import { setUser } from "../../../../services/helpers/tokenService";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
interface IBillingAddress {
  cancelEdit: () => void;
}

const BillingAddress = (props: IBillingAddress) => {
  const { cancelEdit } = props;
  const { loggedInUser, setLoggedInUser, setAuthLoading, setAuthEnable } = useRoot();
  const [country, setCountry] = useState(loggedInUser?.country);
  const [loading, setLoading] = useState(false);

  const setUserData = async () => {
    const oldLoggedInUser = { ...loggedInUser };

    try {
      const userData = await instance.post(`/user`);
      setLoggedInUser({ ...oldLoggedInUser, ...userData.data });
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const changeHandler = (value: any) => {
    setCountry(value);
  };

  const loginCallBack = (userResponse: any) => {
    setLoading(false);
    setAuthEnable(false);
    setLoggedInUser(userResponse);
    setAuthLoading(false);
    setUser(userResponse);
  };

  const loginCallBackFail = () => {
    setLoading(false);
    setAuthLoading(false);
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        companyName: loggedInUser?.companyName,
        companyWebsite: loggedInUser?.companyWebsite,
        streetAddress: loggedInUser?.streetAddress,
        streetAddress2: loggedInUser?.streetAddress2,
        city: loggedInUser?.city,
        state: loggedInUser?.state,
        zip: loggedInUser?.zip,
      }}
      onSubmit={async (values, { resetForm }) => {
        if (!country) {
          triggerForm({
            text: "Country field is empty",
            icon: "error",
            confirmButtonText: "OK",
          });

          return;
        }

        setLoading(true);

        if (!loggedInUser) {
          setAuthLoading(true);

          const obj = {
            streetAddress: values?.streetAddress,
            streetAddress2: values?.streetAddress2 || "",
            companyName: values?.companyName,
            companyWebsite: values?.companyWebsite,
            city: values?.city,
            state: values?.state,
            zip: values?.zip,
            country,
          };

          registerUser(
            values.userName,
            values.email,
            values.password,
            loginCallBack,
            loginCallBackFail,
            obj
          );

          return;
        }

        const oldLoggedInUser = { ...loggedInUser };

        try {
          // await UserService.update(loggedInUser.uid, {
          //   companyName: values?.companyName,
          //   companyWebsite: values?.companyWebsite,
          //   streetAddress: values?.streetAddress,
          //   city: values?.city,
          //   state: values?.state,
          //   zip: values?.zip,
          //   streetAddress2: values.streetAddress2 || "",
          //   country,
          //   date: dayjs().unix(),
          // });

          await instance.post(`/updateUser`, {
            companyName: values?.companyName,
            companyWebsite: values?.companyWebsite,
            streetAddress: values?.streetAddress,
            city: values?.city,
            state: values?.state,
            zip: values?.zip,
            streetAddress2: values.streetAddress2 || "",
            country,
            date: dayjs().unix(),
            name: loggedInUser.displayName,
          });

          triggerForm({
            text: "Successfully Saved!",
            icon: "success",
            confirmButtonText: "OK",
          });

          // const userData = await UserService.getOne(loggedInUser.uid);

          // const userData = await instance.post(`/user`);
          setUserData();

          // setLoggedInUser({ ...oldLoggedInUser, ...userData.data });
          cancelEdit();
          resetForm();

          setLoading(false);
        } catch (error: any) {
          triggerForm({
            title: "",
            text: error.response.data?.message,
            icon: "error",
            confirmButtonText: "OK",
          });
          setLoading(false);
        }
      }}
    >
      {({ errors, touched, isValidating }: any) => (
        <FormikForm>
          <Row>
            {!loggedInUser && (
              <>
                <Col md={6}>
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
                      <Form.Text className="text-danger">
                        {errors.userName}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
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
                      <Form.Text className="text-danger">
                        {errors.email}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
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
                      <Form.Text className="text-danger">
                        {errors.password}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </>
            )}

            {!loggedInUser && <Col md={6} />}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="companyName">Company Name</Form.Label>
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
                <Form.Label htmlFor="companyWebsite">
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
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="streetAddress">Street Address</Form.Label>
                <Field
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="House number and Street Name"
                  validate={validateRequired}
                />
                {errors.streetAddress && (
                  <Form.Text className="text-danger">
                    {errors.streetAddress}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="streetAddress">&nbsp;</Form.Label>
                <Field
                  type="text"
                  id="streetAddress2"
                  name="streetAddress2"
                  placeholder="Apartment, Suite, Unit etc. (optional)"
                />
                {errors.streetAddress2 && (
                  <Form.Text className="text-danger">
                    {errors.streetAddress2}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Country</Form.Label>
                <Select
                  className="custom-select"
                  classNamePrefix="custom-select"
                  // @ts-ignore
                  options={COUNTRY_LIST}
                  value={country}
                  // @ts-ignore
                  onChange={changeHandler}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Town / City</Form.Label>
                <Field
                  id="city"
                  name="city"
                  placeholder=""
                  type="text"
                  validate={validateRequired}
                />
                {errors.city && touched.city && (
                  <Form.Text className="text-danger">{errors.city}</Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="state">State</Form.Label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  placeholder="New York"
                  validate={validateRequired}
                />
                {errors.state && (
                  <Form.Text className="text-danger">{errors.state}</Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message">Zip</Form.Label>
                <Field
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder=""
                  validate={validateRequired}
                />
                {errors.zip && (
                  <Form.Text className="text-danger">{errors.zip}</Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Row className="justify-content-end pt-3">
              <Col xs md="auto">
                {loggedInUser?.country && (
                  <Button
                    onClick={cancelEdit}
                    variant="tertiary"
                    size="large"
                    type="submit"
                    className="w-100"
                  >
                    Cancel
                  </Button>
                )}
              </Col>
              <Col xs={12} md="auto">
                <Button
                  size="large"
                  type="submit"
                  disabled={loading}
                  loading={loading}
                  className="w-100"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </FormikForm>
      )}
    </Formik>
  );
};

export default BillingAddress;
