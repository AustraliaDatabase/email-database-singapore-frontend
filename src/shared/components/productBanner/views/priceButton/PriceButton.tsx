import classNames from "classnames";
import React, { ReactNode } from "react";

import { numberWithCommas } from "../../../../InternalService";
import styles from "./style.module.scss";

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
      className={styles.wrapper}
      onClick={() => {
        onClick(index);
      }}
    >
      <div
        className={classNames(styles.circle, {
          [styles.activeCircle]: isActive,
        })}
      ></div>
      <div className={styles.price}>{children}</div>
      <div className={styles.packageType}>Email Database Package</div>
      <div className={styles.contactCounts}>
        {contactCounts && numberWithCommas(contactCounts?.toString())} Direct
        Email Contacts
      </div>
    </div>
  );
};

export default PriceButton;
