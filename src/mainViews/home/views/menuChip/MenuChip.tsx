import React, { ReactNode } from "react";
import styles from "./style.module.scss";

interface IMenuChip {
  children: ReactNode;
  icon: ReactNode;
}

const MenuChip = (props: IMenuChip) => {
  const { children, icon } = props;

  return (
    <div className={styles.wrapper}>
      {icon}
      {children}
    </div>
  );
};

export default MenuChip;
