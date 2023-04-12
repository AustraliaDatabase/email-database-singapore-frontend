import React from "react";
import { IProductListItem } from "../../../../shared/interface";

import styles from "./style.module.scss";

interface IOtherProductItem {
  productInfo: IProductListItem;
}

const OtherProductItem = (props: IOtherProductItem) => {
  const { productInfo } = props;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{productInfo?.title}</h3>
      <p>{productInfo?.description}</p>
    </div>
  );
};

export default OtherProductItem;
