import React from "react";

import { DATA_TYPE_TO_TITLE } from "../../../../shared/constants";
import { IMainProductInfo } from "../../../../shared/interface";
import styles from "./style.module.scss";

interface IDataStructure {
  currentObject: IMainProductInfo;
}

const DataStructure = (props: IDataStructure) => {
  const { currentObject } = props;
  return (
    <div>
      <h2 className={styles.mainTitle}>
        Data Structure of {currentObject.name}{" "}
        {DATA_TYPE_TO_TITLE[currentObject?.type]} Database{" "}
      </h2>
      <div className={styles.structureWrapper}>
        <h3>Personal Info</h3>
        <h3>Office Info</h3>
      </div>
    </div>
  );
};

export default DataStructure;
