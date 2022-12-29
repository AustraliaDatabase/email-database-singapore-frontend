import Image from "next/image";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classNames from "classnames";

import styles from "./paypal.module.scss";
import { useRoot } from "../../../shared/contexts/RootProvider";
// import { ICartItem } from "../../../shared/interface";
import { PAYMENT_METHOD } from "../../../shared/enums";
import PaypalView from "./paypalView/PaypalView";
import CryptoPaymentView from "./cryptoPaymentView/CryptoPaymentView";
// import { REALTORS_OBJECT } from "../../../shared/seeds/realtorsObject";
// import { CURRENT_OBJECT as REAL_ESTATE_CURRENT_OBJECT } from "../../../pageContents/real-estate-agent-list/strings";
// import { CURRENT_OBJECT as ALL_COMPANIES_CURRENT_OBJECT } from "../../../pages/list-of-all-us-companies";

interface IPaymentView {
  editBillingEnable: boolean;
}

const PaymentView = (props: IPaymentView) => {
  const { editBillingEnable } = props;
  const { setCartEnable, currentCartItem, loggedInUser, totalCartAmount } =
    useRoot();
  const [blockListObjectExist, setBlockListObjectExist] = useState(false);

  // const [totalAmount, setTotalAmount] = useState(0);
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState(
    PAYMENT_METHOD.PAYPAL
  );

  useEffect(() => {
    if (currentCartItem?.length) {
      let isBlockListObject = false;

      setBlockListObjectExist(isBlockListObject);
    } else {
      setCartEnable(false);
    }
  }, [currentCartItem?.length]);

  const onChangePaypal = () => {
    setCurrentPaymentMethod(PAYMENT_METHOD.PAYPAL);
  };

  const onChangeCrypto = () => {
    setCurrentPaymentMethod(PAYMENT_METHOD.CRYPTO);
  };

  return (
    <Row className={styles.wrapper}>
      {loggedInUser ? (
        <>
          <Col xs={12} md="auto" className="pt-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked={currentPaymentMethod == PAYMENT_METHOD.PAYPAL}
                id="flexRadioDefault1"
                onClick={onChangePaypal}
              />
              <label
                className={classNames(styles.radioButton, {
                  [styles.active]:
                    currentPaymentMethod === PAYMENT_METHOD.PAYPAL,
                })}
                htmlFor="flexRadioDefault1"
              >
                <div className={styles.paypal}>
                  <Image
                    alt="Paypal Logo"
                    src="/paypalMasterCard.png"
                    objectFit="scale-down"
                    layout="fixed"
                    width={150}
                    height={100}
                  />
                </div>
              </label>
            </div>
          </Col>
          <Col xs={12} md="auto" className="pt-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked={currentPaymentMethod == PAYMENT_METHOD.CRYPTO}
                id="flexRadioDefault2"
                onClick={onChangeCrypto}
              />
              <label
                className={classNames(styles.radioButton, {
                  [styles.active]:
                    currentPaymentMethod === PAYMENT_METHOD.CRYPTO,
                })}
                htmlFor="flexRadioDefault2"
              >
                <div className={styles.paypal}>
                  <Image
                    alt="Paypal Logo"
                    src="/cryptoPayment.png"
                    objectFit="scale-down"
                    layout="fixed"
                    width={150}
                    height={100}
                  />
                </div>
              </label>
            </div>
          </Col>

          <>
            {currentPaymentMethod === PAYMENT_METHOD.PAYPAL ? (
              <PaypalView
                totalAmount={totalCartAmount}
                editBillingEnable={editBillingEnable}
                currentPaymentMethod={currentPaymentMethod}
              />
            ) : (
              <CryptoPaymentView
                editBillingEnable={editBillingEnable}
                blockListObjectExist={blockListObjectExist}
              />
            )}
          </>
        </>
      ) : (
        <>
          <p>
            We Accept{" "}
            <span className="text-highlight">
              Major Credit Card payments such as VISA, MasterCard, American
              Express, Discovery via PayPal Payment Gateway.
            </span>{" "}
          </p>

          <p>
            We also{" "}
            <span className="text-highlight">
              accept Bitcoin and USDC Crypto payments too
            </span>{" "}
          </p>

          <b>
            Payment methods will be enabled once your register and filled the
            billing address.
          </b>
        </>
      )}
    </Row>
  );
};

export default PaymentView;
