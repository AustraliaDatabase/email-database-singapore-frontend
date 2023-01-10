import React from "react";
import { Col } from "react-bootstrap";

import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";

const FooterLogo = () => (
  <Col md xs={12} className={classNames(styles.logo, "d-flex align-items-center justify-content-center")}>
    <Image src="/lead-dashboard.png" width={144} height={92} alt="leads library" />
  </Col>
);

export default FooterLogo;
