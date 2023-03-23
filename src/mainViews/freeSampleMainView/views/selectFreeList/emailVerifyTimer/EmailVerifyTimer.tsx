import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { EMAIL_TEMPLATE_IDS } from "../../../../../menus/constants";
import instance from "../../../../../services/baseServices";

import Button from "../../../../../shared/components/button/Button";
import { useRoot } from "../../../../../shared/contexts/RootProvider";
import { EMAIL_VERIFICATION_TYPE } from "../../../../../shared/enums";
import styles from "./style.module.scss";

interface IEmailVerifyTimer {
  className?: string;
  verificationType: EMAIL_VERIFICATION_TYPE;
}

const EmailVerifyTimer = (props: IEmailVerifyTimer) => {
  const { className, verificationType } = props;
  const [count, setCount] = useState(60);
  const [loading, setLoading] = useState(false);
  const router: any = useRouter();
  const { loggedInUser } = useRoot();

  const mainCategory: any = router?.query?.productId;

  const handleClick = async () => {
    try {
      setLoading(true);
      await instance.post("/verifyEmail", {
        templatedId: EMAIL_TEMPLATE_IDS.VERIFY_EMAIL,
        subject: "Verify your Email",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/verify-user?id=${loggedInUser?.localId}&&type=${verificationType}&&category=${mainCategory}`,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    const interval = setInterval((value) => {
      setCount((prevCount) => {
        if (prevCount == 0) {
          clearInterval(interval);
          setCount(60);
        }

        return prevCount - 1;
      });
    }, 1000);
  };

  return (
    <div>
      {count === 60 ? (
        <Button
          onClick={handleClick}
          loading={loading}
          disabled={loading}
          className={classNames("mt-3", styles.buildButton, className)}
        >
          Verify your Email
        </Button>
      ) : (
        <>
          <br />
          <div className={styles.color}>
            Please click on the link that has just been sent to your email
            account to verify your email.
          </div>
          {/* <br /> */}
          <div>Resend in {count} seconds</div>
        </>
      )}
    </div>
  );
};

export default EmailVerifyTimer;
