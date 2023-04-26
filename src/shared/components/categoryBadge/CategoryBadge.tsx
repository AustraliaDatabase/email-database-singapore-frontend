import React from "react";
import classNames from "classnames";

import getBadgeInfo from "./badgeInfo";
import styles from "./styles.module.scss";

interface ICategoryBadge {
  category: string;
}

const CategoryBadge = (props: ICategoryBadge) => {
  const { category } = props;

  const {
    color,
    background,
    fill,
    category: badgeValue,
  } = getBadgeInfo[category];

  return (
    <div className={styles.badgeWrapper}>
      <span
        className={classNames({
          [styles.border]: fill,
        })}
        style={{
          color: `${color}`,
          backgroundColor: `${fill ? background : ""}`,
          borderColor: `${fill ? "" : color}`,
        }}
      >
        {badgeValue}
      </span>
    </div>
  );
};

export default CategoryBadge;
