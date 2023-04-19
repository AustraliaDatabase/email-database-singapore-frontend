import React from "react";

import WhyCardsWithContent from "../../shared/components/whyCardsWithContent/WhyCardsWithContent";
import ALTERNATIVE_FOR_THERS_OBJ from "./seeds";
import styles from "./styles.module.scss";

const AlternativeForOthers = () => {
  return (
    <section className={styles.topFix}>
      <WhyCardsWithContent
        isHome={true}
        title={`SHOULD YOU CHOOSE BOOKYOURDATA OR LOOK FOR AN ALTERNATIVE ?`}
        description={`A well-written promotional email is useless if you don’t have anyone to send it to. You can include an email subscription link in your blog or site to build your email list. However, it usually takes a long time to collect a significant amount of contacts. The good news is that you can now buy email lists from sites like Bookyourdata.`}
        lists={ALTERNATIVE_FOR_THERS_OBJ}
      />
    </section>
  );
};

export default AlternativeForOthers;
