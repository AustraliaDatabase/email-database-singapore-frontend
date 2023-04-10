import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import { IBeneifitList } from "../../../../interface";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { CaretDown } from "phosphor-react";

interface IBeneifitsCollapsible {
  BeneifitList: IBeneifitList[];
}
const BeneifitsCollapsible = (props: IBeneifitsCollapsible) => {
  const { BeneifitList } = props;

  const [activeKey, setActiveKey] = useState("");

  const [isActive, setIsActive] = useState(false);

  const activeFunc = () => {
    setIsActive(true);
    setActiveKey("active");
  };

  const CollapsibleComponent = BeneifitList?.map(
    (element: IBeneifitList, index: number) => {
      return (
        <Accordion.Item
          key={index}
          className={classNames(
            `${index}` == activeKey ? "active" : "",
            styles.accordionItem
          )}
          eventKey={`${index}`}
        >
          <Accordion.Header
            as="h3"
            onClick={() => {
              setActiveKey(`${index}`);
            }}
            // onClick={activeFunc}
            className={styles.header}
          >
            <CaretDown className="icon me-3" size={24} weight="bold" />{" "}
            {element.title}
          </Accordion.Header>
          <Accordion.Body
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: element.description }}
          />
        </Accordion.Item>
      );
    }
  );

  return (
    <Accordion
      defaultActiveKey="0"
      className="custom-accordion beneifit-accordion"
    >
      {CollapsibleComponent}
    </Accordion>
  );
};

export default BeneifitsCollapsible;
