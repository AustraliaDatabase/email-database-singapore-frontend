import React from "react";
import Link from "next/link";

import { FOOTER_LINKS } from "../../constants";
import styles from "./style.module.scss";
import Image from "next/image";
import { Col } from "react-bootstrap";

const MenuLinkList = () => (
  <Col className={styles.wrapper}>
    <div className={styles.payments}>
      <Image
        width={284}
        height={40}
        objectPosition="center"
        objectFit="scale-down"
        src="/payments.png"
        alt="Coin Payment"
      />
    </div>
    <div className={styles.menuWrapper}>
      {FOOTER_LINKS.map((element, index) => (
        <Link key={index} passHref href={element.route}>
          <a>
            <span key={index}>{element.name}</span>
          </a>
        </Link>
      ))}
    </div>
  </Col>
);

export default MenuLinkList;
