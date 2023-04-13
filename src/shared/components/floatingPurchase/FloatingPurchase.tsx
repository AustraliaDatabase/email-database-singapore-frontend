import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-scroll";
import classNames from "classnames";
import { ArrowUp, ShoppingCartSimple, UserList } from "phosphor-react";

import { ICartItem, IMainProductInfo } from "../../interface";
import {
  BUTTON_SIZE_ENUM,
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
} from "../../enums";
import Button from "../button/Button";
import styles from "./styles.module.scss";
import { useRoot } from "../../contexts/RootProvider";
import { AddToCart } from "../../../services/internalServices";
import { addToCartLocal } from "../../../services/helpers/tokenService";
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

  // const [currentIndex, setCurrentIndex] = useState(0);

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

  console.log(selectedPackage);
  return (
    <div
      className={classNames(styles.wrapper, { [styles.visible]: visiblity })}
    >
      <div className={styles.innerWrapper}>
        <div>
          <div
            className={styles.dbTitle}
            dangerouslySetInnerHTML={{ __html: selectedPackage?.title }}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className={styles.iconText}>
              <UserList size={24} />
              <span>10,355 Direct Email Contacts</span>
            </div>
            <div className={styles.scrollLink}>
              <Link to={id ? id : ""}>
                See Details <ArrowUp size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.selectPackage}>
          <div className={styles.selectTitle}>Select Package</div>
          <Formik
            initialValues={{
              database: 1,
            }}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div
                  className={styles.radioGroup}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field type="radio" name="database" value={1} />
                    <span>Email Database Package</span>
                  </label>
                  <label>
                    <Field type="radio" name="database" value={3} />
                    <span>Complete Database Package</span>
                  </label>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.addToCart}>
          <div className={styles.dbPrice}>${selectedPackage.price}</div>
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
        </div>
      </div>
    </div>
  );
};

export default FloatingPurchase;
