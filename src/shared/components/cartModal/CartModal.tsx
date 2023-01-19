import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import classNames from "classnames";

import { useRoot } from "../../contexts/RootProvider";
import { ICartItem } from "../../interface";
import Button from "../button/Button";
import UCDModal from "../UCDModal/UCDModal";
import styles from "./cartModal.module.scss";
import { numberWithCommas } from "../../InternalService";
import { addToCartLocal } from "../../../services/helpers/tokenService";
import { REALTORS_OBJECT } from "../../seeds/realtorsObject";
import { BUTTON_VARIANT_ENUM } from "../../enums";
import CartModalEmpty from "./views/cartModalEmpty/CartModalEmpty";
// import { CURRENT_OBJECT as REAL_ESTATE_CURRENT_OBJECT } from "../../../pageContents/real-estate-agent-list/strings";
// import { CURRENT_OBJECT as ALL_COMPANIES_CURRENT_OBJECT } from "../../../pages/list-of-all-us-companies";

const CartModal = () => {
  const {
    cartEnable,
    setCartEnable,
    currentCartItem,
    setCurrentCartItem,
    totalCartAmount,
  } = useRoot();

  // const [totalAmount, setTotalAmount] = useState(0);
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  useEffect(() => {
    if (!currentCartItem?.length) {
      setCartEnable(false);
    }
  }, [currentCartItem?.length, setCartEnable]);

  const pressClose = () => {
    setCartEnable(false);
  };

  const removeCartItem = (id: string) => {
    const currentFilters = currentCartItem.filter((element: ICartItem) => {
      return element.id !== id;
    });

    setCurrentCartItem(currentFilters);
    addToCartLocal(currentFilters);
  };

  const pressCheckout = () => {
    setCartEnable(false);
  };

  useEffect(() => {
    if (currentCartItem?.length < 1) {
      setIsEmptyCart(true);
    } else if (currentCartItem?.length > 0) {
      setIsEmptyCart(false);
    }
  }, [currentCartItem?.length]);

  useEffect(() => {
    console.log("cart items", currentCartItem.length);
  }, [currentCartItem]);
  return (
    <UCDModal
      bodyClassName="px-4 pb-4 pt-0"
      onHide={pressClose}
      title={currentCartItem?.length < 1 ? "Still Exploring?" : "Shopping Cart"}
      size="lg"
      open={cartEnable}
    >
      <Col xs="12">
        <p
          className={classNames("text-heavy", { ["text-center"]: isEmptyCart })}
        >
          You have {currentCartItem?.length} items in your cart
        </p>
        {isEmptyCart && (
          <>
            <CartModalEmpty setCartEnable={setCartEnable} />
          </>
        )}
        {!isEmptyCart && (
          <>
            {currentCartItem?.map((element: ICartItem) => {
              return (
                <Col xs className={styles.item} key={element.id}>
                  <Row className="align-items-center">
                    <Col xs={12} md={6}>
                      {typeof element.productName === "string" ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: element.productName,
                          }}
                        />
                      ) : (
                        <p className="mb-0 text-medium">
                          {element.productName}
                        </p>
                      )}
                    </Col>
                    <Col xs={6} md={3}>
                      <p className="mb-0 text-start text-md-end">
                        <small>
                          {numberWithCommas(element.contacts?.toString())}{" "}
                          Contacts
                        </small>
                      </p>
                    </Col>
                    <Col xs={4} md={2} className="text-end">
                      <p className="mb-0 text-highlight text-medium">
                        ${element.price}
                      </p>
                    </Col>
                    <Col
                      className="text-end"
                      xs={2}
                      md={1}
                      onClick={() => removeCartItem(element.id)}
                    >
                      <Trash size={24} />
                    </Col>
                  </Row>

                  {/* {element.id === blackListObj?.url && (
                <div className={classNames("mt-2", styles.cryptoNote)}>
                  (Note - Crypto payments are not accepted for this product)
                </div>
              )} */}
                </Col>
              );
            })}
          </>
        )}
      </Col>
      {!isEmptyCart && (
        <>
          <Col xs="12" className="pt-2">
            <Row>
              <Col xs>
                <h3>Total</h3>
              </Col>
              <Col xs="auto">
                <h3>${totalCartAmount}</h3>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col xs={12} md={6} className="pt-3 text-center text-md-start">
              <Button
                onClick={pressClose}
                className={styles.action}
                variant={BUTTON_VARIANT_ENUM.Secondary}
              >
                Continue Shopping
              </Button>
            </Col>
            <Col xs={12} md={6} className="pt-3 text-center text-md-end">
              <Link passHref href="/checkout">
                <Button
                  onClick={pressCheckout}
                  disabled={!currentCartItem?.length}
                  className={styles.action}
                >
                  Checkout
                </Button>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </UCDModal>
  );
};

export default CartModal;
