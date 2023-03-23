import React, { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size";
import { CaretRight } from "phosphor-react";

import { useRoot } from "../../shared/contexts/RootProvider";
import Header from "./view/header/Header";
import DashboardMenu from "../../menus/dashboardMenu/DashboardMenu";
import styles from "./dashboardLayout.module.scss";

interface IDashboardLayout {
  children: ReactNode;
}

const DashboardLayout = (props: IDashboardLayout) => {
  const { children } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  
  const { authLoading } = useRoot();
  const screenWidth = useWindowWidth();

  const toggleSideBar = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (screenWidth > 992) {
      setMenuOpen(false);
    }
  }, [screenWidth]);

  return (
    <div className={styles.wrapper}>
      {authLoading && `Loading...`}
      <button
        className={classNames(styles.toggle, "d-grid d-md-none", {
          [styles.active]: menuOpen,
        })}
        onClick={toggleSideBar}
      >
        <CaretRight className={styles.toggleIcon} size={25} />
      </button>
      <div className={classNames(styles.menu, { [styles.active]: menuOpen })}>
        <DashboardMenu />
      </div>
      <div className={styles.rightWrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
