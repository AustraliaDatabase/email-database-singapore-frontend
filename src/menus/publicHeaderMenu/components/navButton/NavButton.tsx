import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

interface INavButton {
  title: string;
  description?: string;
  isPrimary?: boolean;
  url?: string;
  toTop?: boolean;
  pressButton?: () => void;
}

const NavButton = (props: INavButton) => {
  const { title, description, isPrimary = true, url, toTop, pressButton } = props;

  return (
    <a href={url}>
      <div
        onClick={pressButton}
        className={classNames(styles.navButton, {
          [styles.primary]: isPrimary,
          [styles.top]: !toTop && isPrimary,
        })}
      >
        <div>{title}</div>
        {description && <span>{description}</span>}
      </div>
    </a>
  );
};

export default NavButton;
