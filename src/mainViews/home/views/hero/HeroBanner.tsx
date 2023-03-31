import classNames from "classnames";
import { Buildings, List, ListPlus } from "phosphor-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import Button from "../../../../shared/components/button/Button";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/enums";

import styles from "./styles.module.scss";
interface IHeroBanner {
  title: string;
  caption: string;
  description: string;
}
const HeroBanner = (props: IHeroBanner) => {
  const { title, description, caption } = props;
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col
            md={12}
            lg={7}
            className={classNames(
              styles.titles,
              "text-center",
              "text-md-start"
            )}
          >
            <Row>
              <Col
                className="p-lg-0"
                xs={{ order: 1, span: 12 }}
                lg={{ order: 1, span: 12 }}
              >
                <div
                  className={styles.heroCaption}
                  dangerouslySetInnerHTML={{
                    __html: caption,
                  }}
                />
                <div
                  className={styles.heroTitle}
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                ></div>
              </Col>
              <Col
                className="p-lg-0"
                xs={{ order: 3, span: 12 }}
                lg={{ order: 2, span: 12 }}
              >
                <div
                  className="mt-2 mb-lg-5"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </Col>

              <Col
                className="p-lg-0"
                xs={{ order: 2, span: 12 }}
                lg={{ order: 3, span: 12 }}
              >
                <Row>
                  <Col>
                    <ScrollLink to="#productType" offset={-200}>
                      <Button
                        className={styles.bannerBtn}
                        size="large"
                        variant={BUTTON_VARIANT_ENUM.Primary}
                        icon={<ListPlus weight="fill" size={24} />}
                      >
                        Pre-Made Lists
                      </Button>
                    </ScrollLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroBanner;
