import React, { ReactNode, useState } from "react";
import parse from "html-react-parser";
import classNames from "classnames";

import { getNodeText } from "../../../services/internalServices";
import styles from "./style.module.scss";
import Button from "../button/Button";
import { CaretDown, CaretUp } from "phosphor-react";

interface IReadMore {
  children: ReactNode;
  text?: string;
  className: string;
}

const ReadMore = (props: IReadMore) => {
  const { children, text, className } = props;
  const [readMoreEnable, setReadMoreEnable] = useState(true);

  const text1 = children && text && getNodeText(parse(text));

  const pressReadMore = (isReadMore: boolean) => {
    setReadMoreEnable(isReadMore);
  };

  if (readMoreEnable) {
    return (
      <>
        <div className={classNames(styles.shrink, className)}>{text1}</div>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            className="text-highlight cursor"
            onClick={() => pressReadMore(false)}
            variant="text"
          >
            Read More <CaretDown size={22} />
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {children}

      <div className="d-flex align-items-center justify-content-center">
        <Button
          className="text-highlight cursor"
          onClick={() => pressReadMore(true)}
          variant="text"
        >
          Read Less <CaretUp size={22} />
        </Button>
      </div>
    </>
  );
};

export default ReadMore;
