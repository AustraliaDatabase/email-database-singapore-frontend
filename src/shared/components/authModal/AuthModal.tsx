import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useRoot } from "../../contexts/RootProvider";
import UCDModal from "../UCDModal/UCDModal";
import styles from "./style.module.scss";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

const AuthModal = () => {
  const { authEnable, setAuthEnable, loginVisible, setLoginVisible } =
    useRoot();

  const [passToggle, setPassToggle] = useState(false);

  const pressClose = () => {
    setAuthEnable(false);
  };

  const pressLoginTab = () => {
    setLoginVisible(true);
  };

  const pressSignUpTab = () => {
    setLoginVisible(false);
  };

  const pressPassToggler = () => {
    setPassToggle(!passToggle);
  };

  return (
    <UCDModal
      size="lg"
      bodyClassName={classNames("px-4 pb-4", styles.authModal)}
      onHide={pressClose}
      title=" "
      open={authEnable}
    >
      <Row>
        <Col xs={12} lg={4} className={styles.leftColumn}>
          <Image
            src={loginVisible ? "/login.png" : "/signup.png"}
            width={197}
            height={169}
            alt={loginVisible ? "Login image" : "Signup image"}
          />
          <div className={styles.textGroup}>
            {loginVisible ? (
              <>
                <h4>Login</h4>
                <p>
                  Please log in to your account if you already have one.
                  Otherwise, please sign up.
                </p>
              </>
            ) : (
              <>
                <h4>Signup</h4>
                <p>
                  If you already have an account, please switch to the login
                  tab.
                </p>
              </>
            )}
          </div>
        </Col>
        <Col xs={12} lg={8}>
          {/* <div className={styles.tabs}>
            <div
              onClick={pressLoginTab}
              className={classNames(styles.tab, {
                [styles.active]: loginVisible,
              })}
            >
              Login
            </div>
            <div
              onClick={pressSignUpTab}
              className={classNames(styles.tab, {
                [styles.active]: !loginVisible,
              })}
            >
              Sign Up
            </div>
          </div> */}

          <div>
            <h4 className={styles.title}>
              {loginVisible ? "Login" : "Create Account"}
            </h4>
          </div>
          <div className="pt-3">
            {loginVisible ? (
              <Login
                pressToggle={pressPassToggler}
                toggleValue={passToggle}
                pressSignUp={pressSignUpTab}
              />
            ) : (
              <SignUp pressLogin={pressLoginTab} />
            )}
          </div>
        </Col>
      </Row>
    </UCDModal>
  );
};

export default AuthModal;
