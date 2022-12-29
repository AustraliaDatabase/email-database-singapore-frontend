import classNames from "classnames";
import React from "react";

import { useRoot } from "../../contexts/RootProvider";
import UCDModal from "../UCDModal/UCDModal";
import styles from "./style.module.scss";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

const AuthModal = () => {
  const { authEnable, setAuthEnable, loginVisible, setLoginVisible } =
    useRoot();

  const pressClose = () => {
    setAuthEnable(false);
  };

  const pressLoginTab = () => {
    setLoginVisible(true);
  };

  const pressSignUpTab = () => {
    setLoginVisible(false);
  };

  return (
    <UCDModal bodyClassName="px-4 pb-4" onHide={pressClose} title=" " open={authEnable}>
      <div className={styles.tabs}>
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
      </div>
      <div className="pt-3">
        {loginVisible ? <Login /> : <SignUp />}
      </div>
    </UCDModal>
  );
};

export default AuthModal;
