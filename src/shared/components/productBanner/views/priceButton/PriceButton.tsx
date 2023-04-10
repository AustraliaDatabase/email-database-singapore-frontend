import classNames from "classnames";
import React, { ReactNode } from "react";

import { numberWithCommas } from "../../../../InternalService";
import styles from "./style.module.scss";
import { CheckCircle, UserList } from "phosphor-react";

interface IPriceButton {
  children: ReactNode;
  isActive: boolean;
  onClick: (event: number) => void;
  index: number;
  contactCounts?: number;
}

const PriceButton = (props: IPriceButton) => {
  const { children, isActive, onClick, index, contactCounts } = props;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.cardActive]: isActive,
      })}
      onClick={() => {
        onClick(index);
      }}
    >
      <div
        className={classNames(styles.circle, {
          [styles.activeCircle]: isActive,
        })}
      >
        <CheckCircle weight="fill" size={28} />
      </div>
      <div className={styles.price}>{children}</div>
      <div className={styles.packageType}>Email Database Package</div>
      <div className={styles.contactCounts}>
        <UserList size={22} />{" "}
        {contactCounts && numberWithCommas(contactCounts?.toString())} Direct
        Email Contacts
      </div>
    </div>
  );
};

export default PriceButton;
