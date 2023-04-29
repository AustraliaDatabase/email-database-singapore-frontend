import React from "react";

import getBadgeInfo from "./badgeInfo";
import styles from "./styles.module.scss";

interface ICategoryBadge {
  category: string;
}

const CategoryBadge = (props: ICategoryBadge) => {
  const { category } = props;

  const badgeInfo = getBadgeInfo[category];

  return (
    <div className={styles.badgeWrapper}>
      <span
        style={{
          color: `${badgeInfo?.color}`,
          backgroundColor: `${badgeInfo?.fill ? badgeInfo?.background : ""}`,
          border: `${badgeInfo?.fill ? "" : `1px solid ${badgeInfo?.color}`}`,
        }}
      >
        {badgeInfo?.category}
      </span>
    </div>
  );
};

export default CategoryBadge;
