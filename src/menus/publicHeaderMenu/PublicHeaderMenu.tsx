import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { List, ShoppingCartSimple } from "phosphor-react";

import { IHeaderLinks } from "../interface";
import { HEADER_LINKS } from "../constants";
import NavButton from "./components/navButton/NavButton";
import { useRoot } from "../../shared/contexts/RootProvider";
import { setUser } from "../../services/helpers/tokenService";
import MyAccountLink from "./components/myAccountLink/myAccountLink";
const NavigationLink = dynamic(
  () => import("./components/navigationLink/NavigationLink"),
  {
    ssr: false,
  }
);
import styles from "./publicHeaderMenu.module.scss";

const PublicHeaderMenu = () => {
  const [toTop, setToTop] = useState(false);
  const [islogedin, setIslogedin] = useState(false);
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    setAuthEnable,
    setCartEnable,
    loggedInUser,
    setLoggedInUser,
    currentCartItem,
    authLoading,
    setAuthLoading,
  } = useRoot();

  const toggleSideBar = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "scroll",
        () => setToTop(window.pageYOffset > 100),
        { passive: true }
      );
    }

    return () => {
      window.removeEventListener("scroll", () =>
        setToTop(window.pageYOffset > 100)
      );
    };
  }, []);

  const pressLogin = () => {
    setAuthEnable(true);
    setAuthLoading(true);
  };

  const pressLogout = () => {
    setUser(null);
    setLoggedInUser(null);
  };

  const pressCart = () => {
    setCartEnable(true);
  };

  useEffect(() => {
    if (loggedInUser?.email) {
      setIslogedin(true);
    } else {
      setIslogedin(false);
    }
  }, [loggedInUser?.email]);

  useEffect(() => {
    setTotalCartItemCount(currentCartItem.length);
  }, [currentCartItem]);

  return (
    <>
      <header className={classNames(styles.header, { [styles.normal]: toTop })}>
        <div
          className={classNames(styles.left, {
            [styles.user]: !islogedin,
          })}
        >
          <Link href="/" passHref>
            <div className={styles.logo}>
              <Image
                src="/email-db-singapore.png"
                alt="Email Data"
                objectFit="scale-down"
                width={200}
                height={68}
              />
            </div>
          </Link>
          <Link href="/" passHref>
            <div className={classNames(styles.logo, styles.mobile)}>
              <Image
                src="/email-db-singapore.png"
                alt="Lead Finance"
                objectFit="scale-down"
                width={40}
                height={40}
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={toggleSideBar}
            className={styles.toggle}
          >
            <List size={24} />
          </button>
          <ul className={classNames(styles.main, { [styles.show]: menuOpen })}>
            {HEADER_LINKS.map((link: IHeaderLinks, index) => (
              <NavigationLink
                key={index}
                name={link.name}
                route={link.route}
                index={index}
                subMenu={link.subMenu}
              />
            ))}
          </ul>
        </div>
        <div
          className={classNames(styles.right, {
            [styles.guest]: !islogedin,
          })}
        >
          {
            <div onClick={pressCart} className={styles.cart}>
              <div>
                <ShoppingCartSimple size={26} />
                <span className={styles.cartItemCount}>
                  {totalCartItemCount}
                </span>
              </div>
            </div>
          }
          {!islogedin && (
            <NavButton
              toTop={toTop}
              title="Login"
              isPrimary={false}
              pressButton={pressLogin}
            />
          )}
          {islogedin && (
            <div className={styles.myAccountLinks}>
              <MyAccountLink />
            </div>
          )}
          {islogedin ? (
            <NavButton
              toTop={toTop}
              url={`${process.env.NEXT_PUBLIC_BASE_URL}/downloads`}
              title="My Downloads"
              description="Premium Email List"
            />
          ) : (
            <NavButton
              toTop={toTop}
              url={`${process.env.NEXT_PUBLIC_BASE_URL}/free-sample`}
              title="Free Sample"
              description="Download"
            />
          )}
        </div>
      </header>
    </>
  );
};

export default PublicHeaderMenu;
