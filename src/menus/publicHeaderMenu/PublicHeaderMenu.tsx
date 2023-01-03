// import React, { useEffect, useState } from "react";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import classNames from "classnames";
// import { CaretDown, ShoppingCartSimple, SignIn } from "phosphor-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";

// import styles from "./publicHeaderMenu.module.scss";
// import { useRoot } from "../../shared/contexts/RootProvider";
// import { MENU_SET } from "../constants";
// import { IMainPublicMenuItem, ISubPublicMenuItem } from "../interface";
// import MyAccountLink from "./components/myAccountLink/myAccountLink";
// import { getRealtorObject } from "../../shared/InternalService";
// import { DATABASE_MAIN_TYPES } from "../../shared/enums";
// import Spinner from "../../shared/components/spinner/Spinner";
// import Search from "./components/search/Search";

// const PublicHeaderMenu = () => {
//   const router = useRouter();
//   const currentCompanyDBState = router.query.companyDBState;
//   const [loading, setLoading] = useState(false);
//   const [currentUrl, setCurrentUrl] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(false);
//     setCurrentUrl(null);
//   }, [router.pathname]);

//   const {
//     setAuthEnable,
//     setCartEnable,
//     loggedInUser,
//     currentCartItem,
//     authLoading,
//   } = useRoot();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const pressLogin = () => {
//     setAuthEnable(true);
//   };

//   const pressCart = () => {
//     setCartEnable(true);
//   };

//   const toggleSideBar = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const realtorObject = getRealtorObject(
//     currentCompanyDBState?.toString() || router.pathname
//   );
//   const databaseMainTypes = realtorObject?.databaseMainTypes;

//   const getActiveMenus: any = {
//     "/": "Home",
//     "/list-of-all-us-companies": "Company Database",
//     "/us-company-database-by-state": "Company Database",
//     "/real-estate-agent-email-list": "Realtors",
//     "/realtors-by-state": "Realtors",
//     "/contact-us": "Contact Us",
//     "/usa-job-titles": "Job Titles",
//     "/special-databases": "Industry Databases",
//     "/other-countries": "Other Countries",
//     "/consumer-emails": "Consumer Emails",
//   };

//   const getChildActive = (childElementUrl: string) => {
//     const active =
//       childElementUrl?.replace(/\//g, "") ===
//       router.pathname?.replace(/\//g, "");

//     return active;
//   };

//   const pressNav = (url?: string) => {
//     if (url === router.pathname) {
//       return;
//     }
//     setLoading(true);
//     setCurrentUrl(url || null);
//   };

//   return (
//     <>
//       <nav className={styles.navigation}>
//         <Container>
//           <Row>
//             <Col
//               xs={{ order: 4, span: 12 }}
//               md={{ order: 1, span: true }}
//               className="d-none d-lg-block pt-4 pt-md-0"
//               style={{ zIndex: 3 }}
//             >
//               <Search />
//             </Col>
//             <Col
//               xs={{ span: true, order: 1 }}
//               md={{ order: 3, span: 3 }}
//               lg={{ order: 2, span: 2 }}
//               className="d-flex justify-content-center align-items-center align-items-md-start"
//             >
//               <div className="w-100">
//                 <Link href="/">
//                   <a>
//                     <Image
//                       width={302}
//                       height={87}
//                       layout="responsive"
//                       src="/jozData-logo.png"
//                       alt="Joz Data Logo"
//                     />
//                   </a>
//                 </Link>
//               </div>
//             </Col>
//             <Col xs={{ order: 2, span: true }} md={{ order: 3, span: true }}>
//               <ul className={styles.top}>
//                 {authLoading ? (
//                   <Spinner spinnerClass={styles.spinner} />
//                 ) : loggedInUser ? (
//                   <li>
//                     <MyAccountLink />
//                   </li>
//                 ) : (
//                   <li onClick={pressLogin} className="ps-1 ps-md-0">
//                     <SignIn size={24} />
//                     <span className="d-none d-md-inline">Login</span>
//                   </li>
//                 )}

//                 <li onClick={pressCart}>
//                   {currentCartItem?.length ? (
//                     <span className={styles.badge}>
//                       {currentCartItem?.length}
//                     </span>
//                   ) : null}
//                   <ShoppingCartSimple size={24} />
//                   <span className="d-none d-md-block">Cart</span>
//                 </li>
//               </ul>
//             </Col>
//             <Col
//               xs={{ order: 3, span: "auto" }}
//               className="d-lg-none d-flex align-items-center"
//             >
//               <div
//                 onClick={toggleSideBar}
//                 className={classNames(styles.trigger, {
//                   [styles.active]: menuOpen,
//                 })}
//               >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <ul
//                 className={classNames(styles.menu, {
//                   [styles.active]: menuOpen,
//                 })}
//               >
//                 {MENU_SET.map((element: IMainPublicMenuItem, index: number) => {
//                   const active =
//                     getActiveMenus?.[router.pathname] === element.name ||
//                     (databaseMainTypes ===
//                       DATABASE_MAIN_TYPES.COMPANY_DATABASE &&
//                       element.name === "Company Database") ||
//                     (databaseMainTypes === DATABASE_MAIN_TYPES.JOB_TITLE &&
//                       element.name === "Job Titles") ||
//                     (databaseMainTypes === DATABASE_MAIN_TYPES.REALTOR &&
//                       element.name === "Realtors") ||
//                     (databaseMainTypes === DATABASE_MAIN_TYPES.COUNTRY &&
//                       element.name === "Other Countries") ||
//                     (databaseMainTypes === DATABASE_MAIN_TYPES.INDUSTRY &&
//                       element.name === "Industry Databases") ||
//                     (databaseMainTypes === DATABASE_MAIN_TYPES.CONSUMER &&
//                       element.name === "Consumer Emails");

//                   return (
//                     <li
//                       key={index}
//                       className={classNames({ [styles.activeMenu]: active })}
//                     >
//                       {element.url ? (
//                         <div style={{ minWidth: element?.width }}>
//                           <a
//                             href={`${process.env.NEXT_PUBLIC_BASE_URL}${element.url}`}
//                           >
//                             {element.name}
//                           </a>
//                         </div>
//                       ) : (
//                         <div>
//                           {element.name}
//                           {element?.child?.length && (
//                             <CaretDown style={{ marginLeft: 3 }} size={18} />
//                           )}
//                         </div>
//                       )}
//                       {element?.child?.length && (
//                         <ul className={styles.sub}>
//                           <div className={styles.innerSub}>
//                             {element?.child?.map(
//                               (
//                                 childElement: ISubPublicMenuItem,
//                                 index: number
//                               ) => {
//                                 const childActive = getChildActive(
//                                   childElement.url
//                                 );

//                                 return (
//                                   <a
//                                     key={index}
//                                     href={`${process.env.NEXT_PUBLIC_BASE_URL}${childElement.url}`}
//                                   >
//                                     <li
//                                       className={classNames(
//                                         styles.defaultColor,
//                                         {
//                                           [styles.activeMenu]: childActive,
//                                         }
//                                       )}
//                                     >
//                                       {childElement.name}
//                                     </li>
//                                   </a>
//                                 );
//                               }
//                             )}
//                           </div>
//                         </ul>
//                       )}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </Col>
//           </Row>
//         </Container>
//       </nav>
//     </>
//   );
// };

// export default PublicHeaderMenu;

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";

// import { HEADER_LINKS } from "./constants";
// import { IHeaderLinks } from "./interfaces";
// import { LOGIN_OR_SIGNUP } from "../../../shared/enums";
// import {
//   updateAuthTypeState,
//   updateModalVisible,
// } from "../../../redux/auth/authSlice";
// import useUser from "../../../shared/hooks/UseUser";
// import styles from "./style.module.scss";
import {
  CaretDown,
  List,
  ShoppingCart,
  ShoppingCartSimple,
} from "phosphor-react";
import Image from "next/image";
import { IHeaderLinks } from "../interface";
import { HEADER_LINKS } from "../constants";

import styles from "./publicHeaderMenu.module.scss";
import NavButton from "./components/navButton/NavButton";
import { useRoot } from "../../shared/contexts/RootProvider";
import { setUser } from "../../services/helpers/tokenService";

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
                src="/lead-dashboard-logo-only.png"
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
            <NavButton
              toTop={toTop}
              title="Logout"
              isPrimary={false}
              pressButton={pressLogout}
            />
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
