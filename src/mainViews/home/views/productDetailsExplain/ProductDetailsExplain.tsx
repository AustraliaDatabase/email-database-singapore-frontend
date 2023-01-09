import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

interface IProductDetailsExplain {
  title: string;
  description: ReactNode;
  subCategoy?: boolean | false;
  list?: any[];
  id?: string;
  customClass?: string;
  bg?: "ghost" | "white";
}

const ProductDetailsExplain = (props: IProductDetailsExplain) => {
  const { id, customClass, title, description, list, subCategoy, bg } = props;

  const [listData, setListData] = useState<any[]>([]);

  const [isTitleBgFill, setIsTitleBgFill] = useState(false);

  useEffect(() => {
    if (list?.length) {
      setListData(list);
    }
  }, [list]);

  useEffect(() => {
    if (bg == "ghost") {
      setIsTitleBgFill(true);
    } else if (bg == "white") {
      setIsTitleBgFill(false);
    } else {
      setIsTitleBgFill(true);
    }
  }, [bg]);

  return (
    <section
      id={id}
      className={classNames(styles.wrapper, `${customClass} ${bg}`)}
    >
      <Container
        className={classNames(styles.sticky, {
          [styles.bgFill]: isTitleBgFill,
        })}
      >
        <Row className="justify-content-center">
          <Col lg={8}>
            {title && (
              <div
                className={classNames(styles.title)}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        {subCategoy && (
          <div className="mt-4">
            {listData?.map((element: any, index: number) => {
              return (
                <div className={styles.subCategoyWrapper} key={index}>
                  <div
                    className={styles.subCategoyTitle}
                    dangerouslySetInnerHTML={{ __html: element?.title }}
                  />
                  <div className={styles.subCategoyContent}>
                    {element?.content}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductDetailsExplain;
