import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import {
  CaretDown,
  DownloadSimple,
  FileArrowDown,
  ListChecks,
  Money,
  PresentationChart,
  Question,
  ShoppingCartSimple,
  SignOut,
  User,
} from "phosphor-react";

import {
  DASHBOARD_MENU_SET,
  DASHBOARD_MENU_SET_PUBLIC,
} from "../../../../menus/constants";
import { IGetIcon } from "../../../../menus/interface";
import { setUser } from "../../../../services/helpers/tokenService";
import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import styles from "./styles.module.scss";

const Header = () => {
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  const [islogedin, setIslogedin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const {
    setAuthEnable,
    setCartEnable,
    loggedInUser,
    setLoggedInUser,
    currentCartItem,
  } = useRoot();

  const menuSet = loggedInUser ? DASHBOARD_MENU_SET : DASHBOARD_MENU_SET_PUBLIC;
  const router = useRouter();

  useEffect(() => {
    setTotalCartItemCount(currentCartItem?.length);
  }, [currentCartItem]);

  useEffect(() => {
    if (loggedInUser?.email) {
      setIslogedin(true);
    } else {
      setIslogedin(false);
    }
  }, [loggedInUser?.email]);

  const pressLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    setIslogedin(false);
  };

  const getIcon: IGetIcon = {
    dashboard: <PresentationChart size={24} />,
    downloads: <DownloadSimple size={24} />,
    myaccount: <User size={24} />,
    support: <Question size={24} />,
    billing: <Money size={24} />,
    orders: <ListChecks size={24} />,
    freesample: <FileArrowDown size={24} />,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadCrumb}>
        {menuSet.map((element, index) => {
          if (element.url === router.pathname) {
            return (
              <div key={index}>
                {getIcon[element.url.substring(1).replace("-", "")]}
                {element.name}
              </div>
            );
          }
        })}
      </div>
      <div className={styles.headerRight}>
        <Button className={styles.cartButton}>
          <span className={styles.cartItemCount}>{totalCartItemCount}</span>
          <ShoppingCartSimple
            size={25}
            onClick={() => {
              setCartEnable(true);
            }}
          />
        </Button>
        {islogedin ? (
          <div className={styles.userWrappre}>
            <div className={styles.user}>
              <Button
                variant="tertiary"
                onClick={() => {
                  setShowLogout(!showLogout);
                }}
              >
                Hello,{" "}
                {loggedInUser?.displayName ||
                  loggedInUser?.email?.split("@")[0]}
                <CaretDown
                  className={classNames({ [styles.active]: showLogout })}
                  size={20}
                />
              </Button>
            </div>
            <div
              className={classNames(styles.logout, {
                [styles.active]: showLogout,
              })}
              onClick={pressLogout}
            >
              <span>
                logout <SignOut size={18} />
              </span>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => {
              setAuthEnable(true);
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
