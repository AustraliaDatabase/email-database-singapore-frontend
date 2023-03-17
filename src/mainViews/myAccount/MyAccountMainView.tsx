import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import classNames from "classnames";
import Image from "next/image";
import dayjs from "dayjs";
import Select from "react-select";
import { Formik, Field, Form as FormikForm } from "formik";
import {
  Buildings,
  Camera,
  EnvelopeSimpleOpen,
  Flag,
  Globe,
  GlobeHemisphereEast,
  House,
  MapPin,
  Package,
  Path,
  User,
} from "phosphor-react";

import styles from "./myAccountMainView.module.scss";
import Button from "../../shared/components/button/Button";
import { useRoot } from "../../shared/contexts/RootProvider";
import { triggerForm } from "../../services/internalServices";
import { COUNTRY_LIST } from "../../shared/seeds/countryList";
import { validateRequired, validURL } from "../../shared/InternalService";
import { resetPassword } from "../../database/Authentication";
import instance from "../../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const MyAccountMainView = () => {
  const { loggedInUser, setLoggedInUser } = useRoot();
  const [editable, setEditable] = useState(false);
  const [country, setCountry] = useState(loggedInUser?.country);

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  useEffect(() => {
    setCountry(loggedInUser?.country);
  }, [loggedInUser]);

  const pressEditable = () => {
    setEditable(!editable);
  };

  const changeHandler = (value: any) => {
    setCountry(value);
  };

  const pressChange = () => {
    setResetLoading(true);
    loggedInUser?.email && resetPassword(loggedInUser?.email, setResetLoading);
  };

  return (
    <>
      <div className={classNames("dashboard-card p-4", styles.card)}>
        <h2>My Info</h2>
        <Row className="mt-4">
          <Col md={4} lg={3}>
            <div className={styles.pictureWrapper}>
              <div className="px-3 pb-3 d-inline-block">
                <div className="position-relative">
                  <div className={styles.picture}>
                    {/* <Image
                      src="/profile_dummy.jpg"
                      width={200}
                      layout="fixed"
                      height={200}
                      alt="Profile picture"
                    /> */}
                    <User size={100} />
                  </div>
                  <div className={styles.upload}>
                    <label>
                      <input type="file" disabled />
                      <Button disabled type="button" variant="tertiary">
                        <Camera size={24} />
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <div className="mb-5 text-center text-md-start">
                <h2>{loggedInUser?.name}</h2>
                <p>
                  <EnvelopeSimpleOpen size={20} className={styles.icon} />{" "}
                  {loggedInUser?.email}
                </p>
              </div>
              {loggedInUser && (
                <div>
                  <div className={styles.infoWrapper}>
                    {loggedInUser?.companyName && (
                      <p>
                        <Buildings size={20} className={styles.icon} />
                        {loggedInUser?.companyName}
                      </p>
                    )}
                    {loggedInUser?.companyWebsite && (
                      <p>
                        <Globe size={20} className={styles.icon} />
                        {loggedInUser?.companyWebsite}
                      </p>
                    )}
                  </div>
                  <div>
                    <p>
                      <MapPin size={20} className={styles.icon} />
                      <>
                        {loggedInUser?.streetAddress}{" "}
                        {loggedInUser?.streetAddress}{" "}
                        {loggedInUser?.streetAddress2} {loggedInUser?.zip}{" "}
                        {loggedInUser?.city} {loggedInUser?.state && ","}{" "}
                        {loggedInUser?.state} {loggedInUser?.country?.label}
                      </>
                    </p>
                  </div>
                  {/* <p>
                        {loggedInUser?.name} {loggedInUser?.name && <br />}
                        {loggedInUser?.streetAddress}
                        {loggedInUser?.streetAddress && <br />}
                        {loggedInUser?.streetAddress2 ? (
                          <>
                            {loggedInUser?.streetAddress2}
                            {loggedInUser?.streetAddress2 && <br />}
                          </>
                        ) : (
                          ""
                        )}
                        {loggedInUser?.city}
                        {loggedInUser?.state && ","} {loggedInUser?.state}{" "}
                        {loggedInUser?.zip} {loggedInUser?.zip && <br />}
                        {loggedInUser?.country?.label}
                        <br />
                      </p> */}
                </div>
              )}
            </div>
            <div className="mb-4 mt-5">
              <Row className="justify-content-center justify-content-md-start">
                <Col xs="auto" className="my-2 my-lg-0">
                  <Button
                    variant="primary"
                    onClick={pressEditable}
                    disabled={editable}
                  >
                    Edit My Basic Info
                  </Button>
                </Col>
                <Col xs="auto" className="my-2 my-lg-0">
                  <Button
                    loading={resetLoading}
                    onClick={pressChange}
                    variant="tertiary"
                  >
                    Change Password
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            {editable && (
              <>
                <div className={styles.userFormWrapper}>
                  <h2 className="mb-4">Edit Personal Info</h2>
                  <Formik
                    initialValues={{
                      userName: loggedInUser?.name,
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

                      const oldLoggedInUser = { ...loggedInUser };

                      // TODO: Check
                      try {
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
                          name: values.userName,
                        });
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
                        //   name: values.userName,
                        // });
                        triggerForm({
                          text: "Successfully Saved!",
                          icon: "success",
                          confirmButtonText: "OK",
                        });

                        // const userData = await UserService.getOne(
                        //   loggedInUser.uid
                        // );
                        const userData = await instance.post(`/user`);

                        setLoggedInUser({ ...oldLoggedInUser, ...userData });
                        setEditable(false);

                        setLoading(false);
                      } catch (error: any) {
                        triggerForm({
                          title: "",
                          text:
                            error.response.data?.message || error.response.data,
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
                          <Col md={12}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="userName"
                                  name="userName"
                                  placeholder="Jhon"
                                  validate={validateRequired}
                                  className={styles.input}
                                />
                                <span>
                                  <User size={16} />
                                </span>
                              </span>
                              {errors.userName && (
                                <Form.Text className="text-danger">
                                  {errors.userName}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="companyName"
                                  name="companyName"
                                  placeholder="Company Name"
                                  validate={validateRequired}
                                  className={styles.input}
                                />
                                <span>
                                  <Buildings size={20} />
                                </span>
                              </span>
                              {errors.companyName && (
                                <Form.Text className="text-danger">
                                  {errors.companyName}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="companyWebsite"
                                  name="companyWebsite"
                                  placeholder="Company Website"
                                  validate={validURL}
                                  className={styles.input}
                                />
                                <span>
                                  <Globe size={20} />
                                </span>
                              </span>
                              {errors.companyWebsite && (
                                <Form.Text className="text-danger">
                                  {errors.companyWebsite}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="streetAddress"
                                  name="streetAddress"
                                  placeholder="House number and Street Name"
                                  validate={validateRequired}
                                  className={styles.input}
                                />
                                <span>
                                  <Path size={20} />
                                </span>
                              </span>
                              {errors.streetAddress && (
                                <Form.Text className="text-danger">
                                  {errors.streetAddress}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="streetAddress2"
                                  name="streetAddress2"
                                  placeholder="Apartment, Suite, Unit etc. (optional)"
                                  className={styles.input}
                                />
                                <span>
                                  <Path size={20} />
                                </span>
                              </span>
                              {errors.streetAddress2 && (
                                <Form.Text className="text-danger">
                                  {errors.streetAddress2}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Select
                                  className="custom-select my-accounts"
                                  classNamePrefix="custom-select"
                                  // @ts-ignore
                                  options={COUNTRY_LIST}
                                  value={country}
                                  // @ts-ignore
                                  onChange={changeHandler}
                                  placeholder="Country"
                                />
                                <span>
                                  <Flag size={20} />
                                </span>
                              </span>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  id="city"
                                  name="city"
                                  placeholder="Town/City"
                                  type="text"
                                  validate={validateRequired}
                                  className={styles.input}
                                />
                                <span>
                                  <House size={20} />
                                </span>
                              </span>
                              {errors.city && touched.city && (
                                <Form.Text className="text-danger">
                                  {errors.city}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="state"
                                  name="state"
                                  placeholder="State"
                                  validate={validateRequired}
                                  className={styles.input}
                                />
                                <span>
                                  <GlobeHemisphereEast size={20} />
                                </span>
                              </span>
                              {errors.state && (
                                <Form.Text className="text-danger">
                                  {errors.state}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <span className={styles.fieldWrapper}>
                                <Field
                                  type="text"
                                  id="zip"
                                  name="zip"
                                  placeholder="Zip"
                                  validate={validateRequired}
                                  className={styles.input}
                                />
                                <span>
                                  <Package size={20} />
                                </span>
                              </span>
                              {errors.zip && (
                                <Form.Text className="text-danger">
                                  {errors.zip}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group>
                          <Col className="pt-3">
                            <Col xs md="auto">
                              <Button
                                onClick={pressEditable}
                                variant="tertiary"
                                size="large"
                                type="submit"
                                className="w-100  mb-3"
                              >
                                Cancel
                              </Button>
                            </Col>
                            <Col xs md="auto">
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
                          </Col>
                        </Form.Group>
                      </FormikForm>
                    )}
                  </Formik>
                </div>
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MyAccountMainView;
