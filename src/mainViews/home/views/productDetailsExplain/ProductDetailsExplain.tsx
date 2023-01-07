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
}

const ProductDetailsExplain = (props: IProductDetailsExplain) => {
  const { id, customClass, title, description, list, subCategoy } = props;

  const [listData, setListData] = useState<any[]>([]);

  useEffect(() => {
    if (list?.length) {
      setListData(list);
    }
  }, [list]);

  return (
    <section id={id} className={classNames(styles.wrapper, `${customClass}`)}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            {title && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </Col>
        </Row>
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
