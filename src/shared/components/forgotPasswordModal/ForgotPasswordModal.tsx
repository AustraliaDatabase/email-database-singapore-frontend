import React, { useState } from "react";

import { useRoot } from "../../contexts/RootProvider";
import Button from "../../../shared/components/button/Button";
import UCDModal from "../UCDModal/UCDModal";
import { resetPassword } from "../../../database/Authentication";
import { validateEmail } from "../../InternalService";
import { triggerForm } from "../../../services/internalServices";

const ForgotPasswordModal = () => {
  const { forgetPasswordModalVisible, setForgetPasswordModalVisible } =
    useRoot();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const pressClose = () => {
    setForgetPasswordModalVisible(false);
  };

  const pressForgetPassword = async () => {
    if (validateEmail(email)) {
      triggerForm({
        title: "",
        text: "Valid Email is required",
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }

    setLoading(true);

    try {
      resetPassword(email, setLoading);
    } catch (error) {}
  };

  return (
    <UCDModal
      bodyClassName="px-4 pb-4"
      onHide={pressClose}
      title=" "
      open={forgetPasswordModalVisible}
    >
      <label>Email </label>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button
        loading={loading}
        disabled={loading}
        className="mt-3"
        onClick={pressForgetPassword}
      >
        Forgot Password
      </Button>
    </UCDModal>
  );
};

export default ForgotPasswordModal;
