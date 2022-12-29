import classNames from "classnames";
import React, { ReactNode, useState } from "react";

import DashboardMenu from "../../menus/dashboardMenu/DashboardMenu";
import { useRoot } from "../../shared/contexts/RootProvider";
import styles from "./dashboardLayout.module.scss";

interface IDashboardLayout {
  children: ReactNode;
}

const DashboardLayout = (props: IDashboardLayout) => {
  const { children } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const { authLoading } = useRoot();

  const toggleSideBar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.wrapper}>
      {authLoading && `Loading...`}
      <button
        className={classNames(styles.toggle, "d-grid d-md-none", {
          [styles.active]: menuOpen,
        })}
        onClick={toggleSideBar}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={classNames(styles.menu, { [styles.active]: menuOpen })}>
        <DashboardMenu />
      </div>
      <div className={styles.rightWrapper}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
