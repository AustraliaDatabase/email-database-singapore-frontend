import React from "react";
import {
  IMainProductInfo,
  IProductListItem,
} from "../../../../shared/interface";
import { replaceContacts } from "../../../../shared/InternalService";

import styles from "./style.module.scss";

interface IOtherProductItem {
  productInfo: IProductListItem;
  currentObject: IMainProductInfo;
}

const OtherProductItem = (props: IOtherProductItem) => {
  const { productInfo, currentObject } = props;

  return (
    <div className={styles.wrapper}>
      <h3>
        <b className={styles.title}>
          {replaceContacts(productInfo?.title, currentObject)} -{" "}
        </b>
      </h3>
      <span
        dangerouslySetInnerHTML={{
          __html: replaceContacts(productInfo?.description, currentObject),
        }}
      ></span>
    </div>
  );
};

export default OtherProductItem;
