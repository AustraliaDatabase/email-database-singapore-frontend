import React from "react";

import styles from "./styles.module.scss";
import OtherFeaturesV2 from "../../shared/components/otherFeaturesV2/OtherFeaturesV2";

interface IAlternativeForOthers {
  alternateObject: any;
}
const AlternativeForOthers = (props: IAlternativeForOthers) => {
  const { alternateObject } = props;

  return (
    <section className={styles.topFix}>
      <OtherFeaturesV2
        title={alternateObject?.title}
        description={alternateObject?.description}
        featuresList={alternateObject?.list}
        columnNum={1}
      />
    </section>
  );
};

export default AlternativeForOthers;
