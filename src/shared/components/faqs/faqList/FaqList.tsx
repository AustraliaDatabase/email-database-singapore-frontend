import React from "react";
import { Target } from "phosphor-react";

import { FaqItems } from "./interface";
import styles from "./styles.module.scss";

interface IFaqList {
  faqItem: FaqItems;
}
const FaqList = (props: IFaqList) => {
  const { faqItem } = props;

  return (
    <>
      <div className={styles.faqItem}>
        <div className={styles.icon}>
          <Target size={32} />
        </div>
        <div>
        <h3 className={styles.title}>{faqItem.title}</h3>
          <div>{faqItem.element}</div>
        </div>
      </div>
    </>
  );
};

export default FaqList;
