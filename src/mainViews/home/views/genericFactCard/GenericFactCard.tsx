import React, { ReactNode } from "react";

import { Col } from "react-bootstrap";
import CSS from "csstype";

import styles from "./style.module.scss";

interface IGenericFactCard {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  showNavCardBg?: boolean;
  footer?: ReactNode;
}

const GenericFactCard = (props: IGenericFactCard) => {
  const { title, description, icon, footer } = props;

  return (
    <Col md={3} className={styles.wrapper}>
      <div className={styles.circle}>{icon}</div>
      <h3
        className="text-center mb-3"
        style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.5 }}
      >
        {title}
      </h3>
      <p className="text-center">{description}</p>
      <div className={styles.line} />
    </Col>
  );
};

export default GenericFactCard;
