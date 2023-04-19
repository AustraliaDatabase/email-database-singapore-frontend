import React from "react";

import ALTERNATIVE_FOR_THERS_OBJ from "./seeds";
import styles from "./styles.module.scss";
import OtherFeaturesV2 from "../../shared/components/otherFeaturesV2/OtherFeaturesV2";

const AlternativeForOthers = () => {
  return (
    <section className={styles.topFix}>
      <OtherFeaturesV2
        title={`<h1>SHOULD YOU CHOOSE BOOKYOURDATA OR LOOK FOR AN ALTERNATIVE ?</h1>`}
        description={`<p>A well-written promotional email is useless if you don’t have anyone to send it to. You can include an email subscription link in your blog or site to build your email list. However, it usually takes a long time to collect a significant amount of contacts. The good news is that you can now buy email lists from sites like Bookyourdata.</p>`}
        featuresList={ALTERNATIVE_FOR_THERS_OBJ}
        columnNum={1}
      />
    </section>
  );
};

export default AlternativeForOthers;
