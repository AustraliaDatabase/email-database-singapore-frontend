import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";
import { CaretDown, CaretRight } from "phosphor-react";

import { HEADER_LINKS } from "../../../constants";
import { IHeaderLinks } from "../../../interface";
import styles from "./styles.module.scss";

const NavigationLink = (props: IHeaderLinks) => {
  const { name, route, index, subMenu } = props;
  const router = useRouter();

  let active =
    router.pathname === route ||
    (router.pathname === "/pre-made-list" && name === "Pre-Made Lists") ||
    (router.pathname === "/by-us-states" && name === "Pre-Made Lists") ||
    (router.pathname === "/job-titles" && name === "Pre-Made Lists") ||
    (router.pathname === "/industries" && name === "Pre-Made Lists") ||
    (router.pathname === "/target" && name === "Pre-Made Lists") ||
    (router.pathname === "/by-zip-code" && name === "Pre-Made Lists") ||
    (router.pathname === "/international" && name === "Pre-Made Lists") ||
    (router.pathname === "/[readyMadeDetail]" && name === "Pre-Made Lists");

  const isDisabled =
    router.pathname === "/blogs/[blogDetail]" || router.pathname === "/blogs";

  const icons = {
    "/by-us-states": "/menu-icons/by-states.png",
    "/job-titles": "/menu-icons/job-title.png",
    "/industries": "/menu-icons/industries.png",
    "/target": "/menu-icons/target.png",
    "/international": "/menu-icons/international.png",
    "/by-zip-code": "/menu-icons/zip-code.png",
  };

  return (
    <li
      className={classNames(
        styles.elm,
        { [styles.selected]: active },
        { [styles.bar]: HEADER_LINKS.length - 1 === index && !isDisabled }
      )}
    >
      <a href={route}>
        <a>
          {name} {subMenu && <CaretDown size={20} />}
          {subMenu && subMenu.length && (
            <ul className={styles.sub}>
              {subMenu.map((link, index) => {
                return (
                  <a key={index} href={link.route}>
                    <li
                      className={classNames({
                        [styles.active]: router.pathname === link.route,
                      })}
                    >
                      {link.subMenu ? (
                        <div className={styles.subMenu}>
                          <span>
                            {link.name} <CaretRight size={20} />
                          </span>
                          <ul>
                            {link.subMenu.map((link, index) => {
                              return (
                                <a key={index} href={link.route}>
                                  <li
                                    className={classNames({
                                      [styles.active]:
                                        router.pathname === link.route,
                                    })}
                                  >
                                    {link.name}
                                  </li>
                                </a>
                              );
                            })}
                          </ul>
                        </div>
                      ) : (
                        <div>
                          <span className={styles.menuIcon}>
                            <Image
                              // @ts-ignore
                              src={icons[link.route]}
                              width={35}
                              height={35}
                              objectFit="scale-down"
                              alt={link.name}
                            />
                          </span>
                          {link.name}
                        </div>
                      )}
                    </li>
                  </a>
                );
              })}
            </ul>
          )}
        </a>
      </a>
    </li>
  );
};

export default NavigationLink;
