import React from "react";
import { Target } from "phosphor-react";

import { FaqItems } from "./interface";
import styles from "./styles.module.scss";

interface IFaqList {
  list: FaqItems[];
}
const FaqList = (props: IFaqList) => {
  const { list } = props;

  return (
    <>
      {list.map((element, index) => {
        return (
          <div key={index} className={styles.faqItem}>
            <div className={styles.icon}>
              <Target size={32} weight="bold" />
            </div>
            <div>
              {element.asTag ? (
                <element.asTag className={styles.title}>
                  {element.element}
                </element.asTag>
              ) : (
                <h3 className={styles.title}>{element.title}</h3>
              )}
              <div>{element.element}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaqList;
