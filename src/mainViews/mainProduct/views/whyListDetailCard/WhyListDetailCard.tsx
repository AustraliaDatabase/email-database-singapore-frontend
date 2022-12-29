import React, { ReactNode, useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";
import Image from "next/image";

import styles from "./style.module.scss";
import { useWindowWidth } from "@react-hook/window-size";
import ReadMore from "../../../../shared/components/readMore/ReadMore";

interface IWhyListDetailCardView {
  index: number;
  title?: string;
  description?: string;
}

const WhyListDetailCardView = (props: IWhyListDetailCardView) => {
  const { index, title, description } = props;
  const [isMobileView, setIsMobileView] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth < 576) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [windowWidth]);

  const detailImage: any = {
    0: "/Investment.png",
    1: "/free-update.png",
    2: "/effective.png",
    3: "/cost-effective.png",
    4: "/aim.png",
    5: "/satisfaction.png",
    6: "/cost-effective-marketing.png",
    7: "/data-access.png",
  };

  if (!title && !description) {
    return <></>;
  }

  return (
    <>
      <Container>
        <Row className="mb-5">
          <>
            <Col xs={12} md={3} className="">
              <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
                <Image
                  src={detailImage[index] || detailImage[0]}
                  alt="search people"
                  width={300}
                  height={225}
                />
              </div>
            </Col>
            <Col>
              {title && (
                <div
                  dangerouslySetInnerHTML={{ __html: title }}
                  className={classNames(
                    "mb-4 text-center text-md-start",
                    styles.accessOrConnectTitle
                  )}
                ></div>
              )}

              {isMobileView ? (
                <>
                  {description && (
                    <ReadMore
                      text={description}
                      className={styles.accessOrConnectDescription}
                    >
                      <div
                        className={styles.accessOrConnectDescription}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </ReadMore>
                  )}
                </>
              ) : (
                <>
                  {description && (
                    <div
                      className={styles.accessOrConnectDescription}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}
                </>
              )}
            </Col>
          </>
        </Row>
      </Container>
    </>
  );
};

export default WhyListDetailCardView;
