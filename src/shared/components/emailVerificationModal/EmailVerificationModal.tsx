import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";

import { useRoot } from "../../contexts/RootProvider";
import Button from "../button/Button";
import UCDModal from "../UCDModal/UCDModal";
import { triggerForm } from "../../../services/internalServices";

const EmailVerificationModal = () => {
  // @ts-ignore
  const {
    emailVerificationModalVisible,
    setEmailVerificationModalVisible,
    loggedInUser,
  } = useRoot();

  useEffect(() => {
    if (loggedInUser?.emailVerificationStatus) {
      setEmailVerificationModalVisible(
        loggedInUser?.emailVerificationStatus === "PendingVerification"
      );
    }
  }, [loggedInUser]);

  const closeModal = () => {
    setEmailVerificationModalVisible(false);
  };

  const resendCode = () => {
    try {
      // sendEmailVerificationCall({
      //   redirectUrl: "https://uscompanydata.com/redirect",
      // });

      triggerForm({
        title: "",
        text: "Email Sent Successfully !",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      triggerForm({
        title: "",
        text: "Oops something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <UCDModal
      bodyClassName="px-4 pb-4"
      onHide={closeModal}
      title=" "
      open={emailVerificationModalVisible}
    >
      <Row>
        <Col>
          <h3>A verification link has been sent to your email account.</h3>
          <p>
            Please click on the link that has just been sent to your email
            account to verify your email.
          </p>
          <h3>Did not receive an email?</h3>
          <p>Please check the spam folder or use resend option below.</p>
          <div className="pt-1">
            <Button variant="secondary" onClick={resendCode}>
              Resend Link
            </Button>
          </div>
        </Col>
        <Col xs="auto" className="d-flex align-items-bottom">
          <Image
            layout="fixed"
            alt="Inbox"
            src="/undraw_mailbox_re_dvds.svg"
            objectPosition="center"
            width={150}
            height={200}
          />
        </Col>
      </Row>
    </UCDModal>
  );
};

export default EmailVerificationModal;
