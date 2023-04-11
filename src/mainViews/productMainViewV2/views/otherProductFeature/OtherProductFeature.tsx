import React from "react";

import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";
import { IMainProductInfo } from "../../../../shared/interface";
import OtherProductItem from "../otherProductItem/OtherProductItem";
import styles from "./styles.module.scss";

interface IOtherProductFeature {
  currentObject: IMainProductInfo;
}

const OtherProductFeature = (props: IOtherProductFeature) => {
  const { currentObject } = props;

  return (
    <div>
      <h2 className={styles.title}>
        Delve into the Distinctive Features of EmailDatas {currentObject.name}{" "}
        {DATA_TYPE_TO_TITLE[currentObject?.type]} List
      </h2>

      <OtherProductItem />
    </div>
  );
};

export default OtherProductFeature;
