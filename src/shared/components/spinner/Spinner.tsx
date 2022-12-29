import classNames from "classnames";
import React from "react";
import styles from "./spinner.module.scss";

interface ISpinner {
  spinnerClass?: string;
}

const Spinner = (props: ISpinner) => {
  const { spinnerClass } = props;
  return <div className={classNames(styles.loader, spinnerClass, styles.small)} />;
};

export default Spinner;
