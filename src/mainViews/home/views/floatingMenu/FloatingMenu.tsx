import classNames from "classnames";
import React, { useEffect, useState } from "react";
// import FloatingSideMenu from "../../../../shared/floatingSideMenu/FloatingSideMenu";
import { Link } from "react-scroll";

// import { FLOATING_MENUS } from "../../Constants";
import MenuChip from "../menuChip/MenuChip";
import styles from "./style.module.scss";

interface IFloatingMenu {
  maxTop?: number;
  maxTopAgain: number;
  floatingMenus?: any;
}

const FloatingMenu = (props: IFloatingMenu) => {
  const { maxTop = 2200, maxTopAgain, floatingMenus } = props;
  const [toTop, setToTop] = useState(false);
  const [hideMainMenu, setHideMainMenu] = useState(false);
  const [hideSideMenu, setHideSideMenu] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "scroll",
        () => {
          setToTop(window.pageYOffset > 100);
          setHideSideMenu(
            !(window.pageYOffset > maxTop && window.pageYOffset < maxTopAgain)
          );
          setHideMainMenu(
            window.pageYOffset > maxTop && window.pageYOffset < maxTopAgain
          );
        },
        { passive: true }
      );
    }
  }, [maxTop, maxTopAgain]);

  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.toTop]: toTop,
          [styles.hideMainMenu]: hideMainMenu,
        })}
      >
        {floatingMenus.map((menuItem: any, index: number) => {
          return (
            <Link
              href="/"
              key={index}
              offset={-170}
              to={menuItem.link}
              spy={true}
            >
              <MenuChip icon={menuItem.icon}>{menuItem.label}</MenuChip>
            </Link>
          );
        })}
      </div>
      {/* <div
        className={classNames({
          [styles.hideMainMenu]: hideSideMenu,
        })}
      >
        <FloatingSideMenu />
      </div> */}
    </>
  );
};

export default FloatingMenu;
