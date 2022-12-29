import classNames from "classnames";
import { useRouter } from "next/router";
import {
  DownloadSimple,
  ListChecks,
  Money,
  PresentationChart,
  Question,
  SignOut,
  User,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { signOut } from "firebase/auth";

import Image from "next/image";
import { DASHBOARD_MENU_SET, DASHBOARD_MENU_SET_PUBLIC } from "../constants";
import { IGetIcon } from "../interface";
import styles from "./dashboardMenu.module.scss";
import { useRoot } from "../../shared/contexts/RootProvider";
import { setUser } from "../../services/helpers/tokenService";
// import { auth } from "../../database/firebase";

const DashboardMenu = () => {
  const router = useRouter();

  const { loggedInUser, setAuthEnable, setLoggedInUser } = useRoot();

  const [currentActiveElement, setCurrentActiveElement] =
    useState("/dashboard");

  useEffect(() => {
    if (router.pathname) {
      setCurrentActiveElement(router.pathname);
    }
  }, [router.pathname]);

  const pressMenuItem = (url: string) => {
    router.push(url);
  };

  const pressLogout = () => {
    // signOut(auth)
    setUser(null);
    setLoggedInUser(null)
  };

  const pressLogin = () => {
    setAuthEnable(true);
  };

  const getIcon: IGetIcon = {
    dashboard: <PresentationChart size={24} />,
    downloads: <DownloadSimple size={24} />,
    myaccount: <User size={24} />,
    support: <Question size={24} />,
    billing: <Money size={24} />,
    orders: <ListChecks size={24} />,
  };

  const menuSet = loggedInUser ? DASHBOARD_MENU_SET : DASHBOARD_MENU_SET_PUBLIC;

  return (
    <div className={styles.wrap}>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ cursor: "pointer", marginBottom: 20 }}
      >
        <Link href="/" passHref={true}>
          <Image
            objectFit="scale-down"
            src="/usdata-logo-icon.png"
            alt="usdata logo"
            layout="fixed"
            width={50}
            height={42}
          />
        </Link>
      </div>
      {menuSet.map((element, index) => {
        return (
          <div
            key={index}
            onClick={() => pressMenuItem(element.url)}
            className={classNames(styles.link, {
              [styles.active]: currentActiveElement === element.url,
            })}
          >
            {getIcon[element.url.substring(1).replace("-", "")]}
            <p>{element.name}</p>
          </div>
        );
      })}
      <div
        className={styles.link}
        onClick={loggedInUser ? pressLogout : pressLogin}
      >
        <SignOut size={24} />
        {loggedInUser ? <p>Log out</p> : <p> Log In</p>}
      </div>
    </div>
  );
};

export default DashboardMenu;
