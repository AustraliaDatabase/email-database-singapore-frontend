import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./card.module.scss";

interface ICard {
  children: ReactNode;
  className?: string;
  title?: string | ReactNode;
  numberIcon?: ReactNode;
  rightElement?: ReactNode;
}

const Card: React.FC<ICard> = (props) => {
  const { children, className, title, numberIcon, rightElement } = props;

  return (
    <div className={classNames(className, styles.card)}>
      <div className="d-flex" style={{ gap: 8 }}>
        {numberIcon} {title && <h3>{title}</h3>}
        {rightElement}
      </div>
      {children}
    </div>
  );
};

export default Card;
