import React, { ReactNode, useState } from "react";
import styles from "./featureCard.module.scss";
import {
  FEATURE_CARD_TYPE,
  PRODUCT_MAIN_TYPE_ENUM,
  FEATURE_CARD_VARIANT,
} from "../../enums";
import classNames from "classnames";
import Button from "../button/Button";
import {
  ArrowRight,
  CaretRight,
  HouseLine,
  ShoppingCart,
} from "phosphor-react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

interface IFeatureCard {
  type: "info" | "action";
  title?: string;
  circle?: boolean;
  icon?: ReactNode;
  description?: string;
  onClick?: (link?: string) => void;
  label?: string;
  isH2?: boolean;
  link?: string;
  AsTag: any;
  cardType?: PRODUCT_MAIN_TYPE_ENUM;
  variant: FEATURE_CARD_VARIANT;
}

const FeatureCard: React.FC<IFeatureCard> = (props) => {
  const {
    title,
    type,
    circle,
    label,
    icon,
    description,
    onClick,
    isH2,
    link,
    AsTag,
    cardType,
    variant,
  } = props;

  const [loading, setLoading] = useState(false);

  const getBackgroundStyle = {
    [PRODUCT_MAIN_TYPE_ENUM.BY_B2B_EMAILS]: (
      <div className={styles.b2bBgStyle} />
    ),
    [PRODUCT_MAIN_TYPE_ENUM.BY_REALTORS]: (
      <div className={styles.realtorBgStyle} />
    ),
    [PRODUCT_MAIN_TYPE_ENUM.BY_PROFESSION]: (
      <div className={styles.professionBgStyle} />
    ),
  };

  // @ts-ignore
  const backgroundStyle = getBackgroundStyle[cardType];

  return (
    <div
      onClick={() => {
        setLoading(true);
      }}
      className={classNames(
        styles.card,
        { [styles.action]: type == FEATURE_CARD_TYPE.Action },
        { [styles.info]: type == FEATURE_CARD_TYPE.Info },
        { [styles.darkCard]: variant == FEATURE_CARD_VARIANT.Dark },
        { [styles.lightCard]: variant == FEATURE_CARD_VARIANT.Light }
      )}
    >
      <AsTag className={styles.cardText}>{title}</AsTag>

      <Row>
        {type !== FEATURE_CARD_TYPE.Action && (
          <Col md={3}>
            {icon && (
              <div
                className={classNames(styles.icon, {
                  [styles.circle]: circle,
                })}
              >
                {icon}
              </div>
            )}
          </Col>
        )}

        <Col>
          <p>{description}</p>
          {type !== FEATURE_CARD_TYPE.Action && (
            <>
              {loading ? (
                <div className={styles.height}>Loading...</div>
              ) : (
                <div className={styles.height} />
              )}
            </>
          )}

          <div className={styles.fetureBtnWrapper}>
            {type == FEATURE_CARD_TYPE.Action && (
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}${link}`}>
                <Button>
                  View All Products
                  <ArrowRight size={24} />
                </Button>
              </a>
            )}
          </div>
          {backgroundStyle}
        </Col>
      </Row>
    </div>
  );
};

export default FeatureCard;
