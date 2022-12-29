import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

interface IReadingProgress {
  target: any;
}

const ReadingProgress = (props: IReadingProgress) => {
  const { target } = props;
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentscroll, setCurrentscroll] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setCurrentscroll(windowScrollTop);
    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.bar, {[styles.show]: currentscroll > 120})} style={{ width: `${readingProgress}%` }} />
    </div>
  );
};

export default ReadingProgress;
