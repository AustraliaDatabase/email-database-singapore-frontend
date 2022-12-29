import React, { useState } from "react";
import classNames from "classnames";

import styles from "./sideTab.module.scss";
import { ISideMenuList } from "./interface";

interface ISideTab {
  sideMenuList: ISideMenuList[];
}

const SideTab = (props: ISideTab) => {
  const { sideMenuList } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const pressButton = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className={styles.tab}>
      <div className={styles.menu}>
        {sideMenuList?.map((element: ISideMenuList, index: number) => {
          return (
            <div
              key={index}
              className={classNames({
                [styles.active]: index === currentIndex,
              })}
              onClick={() => pressButton(index)}
            >
              <div>{element.title}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.panel}>{sideMenuList?.[currentIndex]?.childElement}</div>
    </div>
  );
};

export default SideTab;
