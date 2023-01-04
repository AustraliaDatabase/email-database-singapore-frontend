import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import { CaretDown, List, ShoppingCartSimple } from "phosphor-react";

import { IHeaderLinks } from "../interface";
import { HEADER_LINKS } from "../constants";
import NavButton from "./components/navButton/NavButton";
import { useRoot } from "../../shared/contexts/RootProvider";
import { setUser } from "../../services/helpers/tokenService";
import MyAccountLink from "./components/myAccountLink/myAccountLink";
import styles from "./publicHeaderMenu.module.scss";

const NavigationLink: React.FC<IHeaderLinks> = ({
  name,
  route,
  index,
  subMenu,
}) => {
  const router = useRouter();

  let active =
    router.pathname === route ||
    (router.pathname === "/pre-made-list/job-titles" &&
      name === "Pre-Made Lists") ||
    (router.pathname === "/pre-made-list/industries" &&
      name === "Pre-Made Lists") ||
    (router.pathname === "/pre-made-list/cities" &&
      name === "Pre-Made Lists") ||
    (router.pathname === "/pre-made-list/states" &&
      name === "Pre-Made Lists") ||
    (router.pathname === "/pre-made-list/international" &&
      name === "Pre-Made Lists") ||
    (router.pathname === "/[readyMadeDetail]" && name === "Pre-Made Lists");

  const isDisabled =
    router.pathname === "/blogs/[blogDetail]" || router.pathname === "/blogs";

  return (
    <li
      className={classNames(
        styles.elm,
        { [styles.selected]: active },
        { [styles.bar]: HEADER_LINKS.length - 1 === index && !isDisabled }
      )}
    >
      <Link href={route} passHref>
        <a>
          {name} {subMenu && <CaretDown size={20} />}
          {subMenu && subMenu.length && (
            <ul className={styles.sub}>
              {subMenu.map((link, index) => {
                return (
                  <Link passHref key={index} href={link.route}>
                    <li
                      className={classNames({
                        [styles.active]: router.pathname === link.route,
                      })}
                    >
                      {link.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </a>
      </Link>
    </li>
  );
};

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
                src="/leadLibraryLogo.png"
                alt="Email Data"
                objectFit="contain"
                objectPosition="center"
                width={200}
                height={68}
              />
            </div>
          </Link>
          <Link href="/" passHref>
            <div className={classNames(styles.logo, styles.mobile)}>
              <Image
                src="/lead-dashboard.png"
                alt="Lead Finance"
                objectFit="contain"
                objectPosition="center"
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
              // url={`${process.env.BASE_URL}/build-custom-list`}
              title={`${authLoading ? "Loading..." : "Login"}`}
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
              url={`${process.env.BASE_URL}/build-custom-list`}
              title="Build a List"
              description="Custom B2B List"
            />
          ) : (
            <NavButton
              toTop={toTop}
              url={`${process.env.BASE_URL}/build-custom-list`}
              title="Free Trial"
              description="Let’s check it out"
            />
          )}
        </div>
      </header>
    </>
  );
};

export default PublicHeaderMenu;
