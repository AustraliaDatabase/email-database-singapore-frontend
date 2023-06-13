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
      <b className={styles.title}>{productInfo?.title} - </b>
      <span>{productInfo?.description}</span>
    </div>
  );
};

export default OtherProductItem;
