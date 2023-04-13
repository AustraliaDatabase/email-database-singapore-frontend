import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import classNames from "classnames";
import { ArrowUp, ShoppingCartSimple, UserList } from "phosphor-react";

import { useRoot } from "../../contexts/RootProvider";
import { ICartItem, IMainProductInfo } from "../../interface";
import {
  BUTTON_SIZE_ENUM,
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
} from "../../enums";
import Button from "../button/Button";
import { AddToCart } from "../../../services/internalServices";
import { addToCartLocal } from "../../../services/helpers/tokenService";
import styles from "./styles.module.scss";
import { numberWithCommas } from "../../InternalService";
import { PRICE_PACKAGE_TYPES } from "../../constants";

interface IFloatingPurchase {
  visiblity?: boolean;
  id?: string;
  currentObject: IMainProductInfo;
}

const FloatingPurchase = (props: IFloatingPurchase) => {
  const { id, visiblity } = props;

  const { currentObject } = props;

  const databaseMainType = currentObject?.type;

  const statsInfo = currentObject?.stats;

  const {
    currentIndex,
    setCurrentIndex,
    currentCartItem,
    setCurrentCartItem,
    setCartEnable,
  } = useRoot();

  const pressButton = (index: number) => {
    setCurrentIndex(index);
  };

  const selectedPackage = currentObject?.price?.list?.[currentIndex];
  const addToCart = () => {
    const isCompleteDatabase =
      databaseMainType === DATABASE_MAIN_TYPES.REALTOR
        ? currentIndex == 2
        : currentIndex == 1;

    const url = currentObject?.url;

    const bannerPlainTitle = currentObject?.banner?.plainTitle;

    AddToCart(
      currentCartItem,
      setCurrentCartItem,
      url,
      statsInfo?.emailAddress,
      Number(selectedPackage.price),
      bannerPlainTitle,
      databaseMainType,
      isCompleteDatabase
    );

    setCartEnable(true);
  };

  const removeCartItem = () => {
    const currentFilters = currentCartItem.filter((element: ICartItem) => {
      return element.id !== currentObject.url;
    });

    setCurrentCartItem(currentFilters);
    addToCartLocal(currentFilters);
  };

  const selectedCartItem = currentCartItem?.filter((element: ICartItem) => {
    return (
      element.id?.replace(/\//g, "") === currentObject?.url?.replace(/\//g, "")
    );
  });

  return (
    <div
      className={classNames(styles.wrapper, { [styles.visible]: visiblity })}
    >
      <Container>
        <Row className={styles.innerWrapper}>
          <Col xs={12} md={7} lg={5}>
            <div
              className={styles.dbTitle}>
                {Object.values(PRICE_PACKAGE_TYPES)?.[currentIndex]}
              </div>
            <div className={styles.iconTextWrapper}>
              <div className={styles.iconText}>
                <UserList size={24} />
                <span>
                  {numberWithCommas(
                    currentObject?.stats?.emailAddress?.toString() || ""
                  )}{" "}
                  B2B Email Contacts
                </span>
              </div>
              <div className={styles.scrollLink}>
                <Link to={id ? id : ""}>
                  See Details <ArrowUp size={24} />
                </Link>
              </div>
            </div>
          </Col>
          {/* <Col xs={12} md={5} lg={3} className={styles.selectPackage}></Col> */}
          <Col xs={12} md={12} lg={7} className={styles.addToCart}>
            <div>
              <Form.Group controlId="myRadio">
                <div className={styles.radioGroup}>
                  {Object.values(PRICE_PACKAGE_TYPES).map((element, index) => {
                    return (
                      <Form.Check
                        key={index}
                        checked={currentIndex == index}
                        type="radio"
                        label={element}
                        name="package"
                        value={index}
                        id={index == 0 ? "basic" : "complete"}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => pressButton(Number(event.target.value))}
                      />
                    );
                  })}
                </div>
              </Form.Group>
            </div>
            <div className={styles.dbPrice}>${selectedPackage?.price}</div>
            <Button
              variant={
                selectedCartItem?.length
                  ? BUTTON_VARIANT_ENUM.Secondary
                  : BUTTON_VARIANT_ENUM.Primary
              }
              onClick={selectedCartItem?.length ? removeCartItem : addToCart}
              size={BUTTON_SIZE_ENUM.Large}
            >
              <ShoppingCartSimple size={24} />
              {selectedCartItem?.length ? "Remove from Cart" : "Add To Cart"}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FloatingPurchase;
