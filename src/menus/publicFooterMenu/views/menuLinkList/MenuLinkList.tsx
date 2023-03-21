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
        width={191}
        height={46}
        objectPosition="center"
        objectFit="scale-down"
        src="/coin-payment.png"
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
