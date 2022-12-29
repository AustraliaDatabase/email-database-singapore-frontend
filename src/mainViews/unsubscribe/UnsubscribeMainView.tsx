import React, { useEffect, useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
// import { Col, Row, Form, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dayjs from "dayjs";

import styles from "./unsubscribe.module.scss";
import Card from "../../shared/components/card/Card";
import Button from "../../shared/components/button/Button";
import classNames from "classnames";
import { useRouter } from "next/router";
import { validateEmail } from "../../shared/InternalService";
import { triggerForm } from "../../services/internalServices";
import Spinner from "../../shared/components/spinner/Spinner";
import instance from "../../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const UnSubscribeMainView = () => {
  const router = useRouter();
  const [reason, setReason] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);
  // const [checkIfExistLoading, setCheckIfExistLoading] = useState(false);
  const [thankResponse, setThankResponse] = useState(false);

  const email = router?.query?.email?.toString();

  useEffect(() => {
    mainCheck();
  }, [email]);

  const mainCheck = async () => {
    if (email) {
      const isExist = await checkIfExist();
      if (!isExist) {
        // unsubscribe("", setCheckIfExistLoading);
      } else {
        setThankResponse(true);
      }
    }
  };

  const checkIfExist = async () => {
    try {
      const response = await instance.post(`unsubscribe-exist`, {
        email,
      });

      if (response.data?.reason !== undefined) {
        // setCheckIfExistLoading(false);
        triggerForm({
          title: "",
          text: "You have already unsubscribed!",
          icon: "success",
          confirmButtonText: "OK",
        });
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  };

  const unsubscribe = async (
    unsubscribedReason: string,
    setLoading: Function,
    showSuccess?: boolean
  ) => {
    try {
      await instance.post(`unsubscribe`, {
        email,
        reason: unsubscribedReason || "",
      });
      if (showSuccess) {
        triggerForm({
          title: "",
          text: "Thanks for the response! You will not receive any emails from now on.",
          icon: "success",
          confirmButtonText: "OK",
        });

        setThankResponse(true);
      }

      setLoading(false);
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error?.response.data?.message || error?.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
      setLoading(false);
    }
  };

  const submit = async () => {
    if (validateEmail(email || "")) {
      triggerForm({
        title: "",
        text: validateEmail(email || ""),
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!reason) {
      triggerForm({
        title: "",
        text: "You have not selected any option yet!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setSaveLoading(true);
    unsubscribe(reason, setSaveLoading, true);
  };

  const onChange = (reason: string) => {
    setReason(reason);
  };

  if (thankResponse) {
    return (
      <div className={classNames("text-highlight", styles.thanksResponse)}>
        Successfully unsubscribed and thanks for the feedback!
      </div>
    );
  }

  // if (checkIfExistLoading) {
  //   return (
  //     <div className={styles.spinnerWrapper}>
  //       <div className={styles.loader} />
  //     </div>
  //   );
  // }

  return (
    <div className={styles.wrapper}>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={8}>
            {/* <div className={styles.header}>
              You have been successfully unsubscribed from Joz List!
            </div> */}

            <Card
              title={
                <div className="text-highlight">Successfully unsubscribed</div>
              }
            >
              <p className="text-align-center">
                You won&apos;t receive further emails from us and Please tell us
                why you no longer wish to hear from us. <br />
                If you have a moment, please let us know why you unsubscribed.
              </p>

              <Col xs={12} md="auto" className="pt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() =>
                      onChange("I no longer want to receive these emails")
                    }
                  />
                  <label
                    className={classNames(styles.radioButton, {
                      [styles.active]: true,
                    })}
                    htmlFor="flexRadioDefault1"
                  >
                    <div className={styles.paypal}>
                      I no longer want to receive these emails
                    </div>
                  </label>
                </div>
              </Col>
              <Col xs={12} md="auto" className="pt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onClick={() =>
                      onChange("I never signed up for these newsletters")
                    }
                  />
                  <label
                    className={classNames(styles.radioButton, {
                      [styles.active]: false,
                    })}
                    htmlFor="flexRadioDefault2"
                  >
                    <div className={styles.paypal}>
                      I never signed up for these newsletters
                    </div>
                  </label>
                </div>
              </Col>
              <Col xs={12} md="auto" className="pt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    onClick={() =>
                      onChange("I receive too many emails in general")
                    }
                  />
                  <label
                    className={classNames(styles.radioButton, {
                      [styles.active]: false,
                    })}
                    htmlFor="flexRadioDefault3"
                  >
                    <div className={styles.paypal}>
                      I receive too many emails in general
                    </div>
                  </label>
                </div>
              </Col>
              <Col xs={12} md="auto" className="pt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    onClick={() => onChange("My inbox is too full")}
                  />
                  <label
                    className={classNames(styles.radioButton, {
                      [styles.active]: false,
                    })}
                    htmlFor="flexRadioDefault4"
                  >
                    <div className={styles.paypal}>My inbox is too full</div>
                  </label>
                </div>
              </Col>
              <Col xs={12} md="auto" className="pt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    onClick={() =>
                      onChange("I do not want to tell the reasons")
                    }
                  />
                  <label
                    className={classNames(styles.radioButton, {
                      [styles.active]: true,
                    })}
                    htmlFor="flexRadioDefault5"
                  >
                    <div className={styles.paypal}>
                      I do not want to tell the reasons
                    </div>
                  </label>
                </div>
              </Col>
              <Col xs={12} md="auto" className="pt-4">
                <Button loading={saveLoading} onClick={submit}>
                  Unsubscribe
                </Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UnSubscribeMainView;
