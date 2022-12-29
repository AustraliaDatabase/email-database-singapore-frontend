import React, { ReactNode, useState } from "react";
import styles from "./featureCard.module.scss";
import { FEATURE_CARD_TYPE } from "../../enums";
import classNames from "classnames";
import Button from "../button/Button";
import { CaretRight, HouseLine, ShoppingCart } from "phosphor-react";
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
  } = props;

  const [loading, setLoading] = useState(false);

  return (
    <Link passHref href={`${process.env.NEXT_PUBLIC_BASE_URL}${link}`}>
      <div
        onClick={() => {
          setLoading(true);
        }}
        className={classNames(
          styles.card,
          { [styles.action]: type == FEATURE_CARD_TYPE.Action },
          { [styles.info]: type == FEATURE_CARD_TYPE.Info }
        )}
      >
        <AsTag className={styles.cardText}>{title}</AsTag>

        <Row>
          <Col md={3}>
            {icon && (
              <div
                className={classNames(styles.icon, { [styles.circle]: circle })}
              >
                {icon}
              </div>
            )}
          </Col>

          <Col>
            <p>{description}</p>
            {loading ? (
              <div className={styles.height}>Loading...</div>
            ) : (
              <div className={styles.height} />
            )}
            <div className={styles.fetureBtnWrapper}>
              {type == FEATURE_CARD_TYPE.Action && (
                <a href={`${process.env.NEXT_PUBLIC_BASE_URL}${link}`}>
                  <Button>
                    <ShoppingCart weight="fill" size={24} />
                    Check Prices
                  </Button>
                </a>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Link>
  );
};

export default FeatureCard;
