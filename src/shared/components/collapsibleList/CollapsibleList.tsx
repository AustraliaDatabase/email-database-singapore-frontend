import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import { ICollapsibleItem } from "./interface";
import styles from "./collapsibleList.module.scss";

interface ICollapsibleList {
  collapsibleList: ICollapsibleItem[];
}

const CollapsibleList = (props: ICollapsibleList) => {
  const { collapsibleList } = props;

  const [activeKey, setActiveKey] = useState("");

  const CollapsibleComponent = collapsibleList?.map(
    (element: ICollapsibleItem, index: number) => {
      return (
        <Accordion.Item
          key={index}
          className={`${index}` == activeKey ? "active" : ""}
          eventKey={`${index}`}
        >
          <Accordion.Header
            as={element.asTag || "div"}
            onClick={() => {
              setActiveKey(`${index}`);
            }}
            className={styles.header}
          >
            {element.title}
          </Accordion.Header>
          <Accordion.Body>{element.element}</Accordion.Body>
        </Accordion.Item>
      );
    }
  );

  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      {CollapsibleComponent}
    </Accordion>
  );
};

export default CollapsibleList;
