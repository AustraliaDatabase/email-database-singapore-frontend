import classNames from "classnames";
import React from "react";
import MyAccountLink from "../myAccountLink/myAccountLink";
import styles from "./style.module.scss";

interface INavButton {
  title?: string;
  description?: string;
  isPrimary?: boolean;
  url?: string;
  toTop?: boolean;
  pressButton?: () => void;
  isUserMenu?: boolean;
  logoutVisible?: boolean;
}

const NavButton = (props: INavButton) => {
  const {
    title,
    description,
    isPrimary = true,
    url,
    toTop,
    pressButton,
    isUserMenu,
    logoutVisible,
  } = props;
  return (
    <a href={url}>
      <div
        onClick={pressButton}
        className={classNames(styles.navButton, {
          [styles.primary]: isPrimary,
          [styles.top]: !toTop && isPrimary,
        })}
      >
        {!isUserMenu && (
          <>
            <div>{title}</div>
          </>
        )}{" "}
        {isUserMenu && <>{<MyAccountLink logoutVisible={logoutVisible} />}</>}
        {description && <span>{description}</span>}
      </div>
    </a>
  );
};

export default NavButton;
