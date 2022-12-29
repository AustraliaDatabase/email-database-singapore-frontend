import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { verifyEmail } from "../../../../database/Authentication";
import {
  conditionBeforePayment,
  getTermTextCondition,
} from "../../../../services/internalServices";

import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import PlisioButton from "../plisioButton/PlisioButton";
import CryptoSelection from "./CryptoSelection";

interface ICryptoPaymentView {
  editBillingEnable: boolean;
  blockListObjectExist: boolean;
}

const CryptoPaymentView = (props: ICryptoPaymentView) => {
  const { editBillingEnable, blockListObjectExist } = props;
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [termCondition, setTermCondition] = useState(false);
  const [includCompletedDatabase, setIncludeCompletedDatabase] =
    useState(false);
  const {
    currentCartItem,
    setCryptoModalVisible,
    loggedInUser,
    setAuthEnable,
  } = useRoot();

  useEffect(() => {
    const includCompletedDatabase = currentCartItem?.filter((element) => {
      return element?.isCompleteDatabase;
    });

    setIncludeCompletedDatabase(includCompletedDatabase?.length >= 1);
  }, [currentCartItem]);

  const onChangeTermCondition = (event: any) => {
    setTermCondition(event.target.checked);
  };

  const pressVerifyEmail = () => {
    verifyEmail();
  };

  const pressLogin = () => {
    setAuthEnable(true);
  };

  const onSelectedCoin = (coin: string) => {
    setSelectedCoin(coin);
  };

  if (includCompletedDatabase) {
    return (
      <div className="mt-4">
        You have selected one or more complete databases to your cart.
        <br />
        Crypto payment cannot be used for the complete database and you have to
        use either <span className="text-highlight">Paypal</span> or{" "}
        <span className="text-highlight"> <Link href="/contact-us">Contact Us</Link> </span>.
      </div>
    );
  }

  return (
    <div className="mt-5">
      <Col xs={12}>
        <Row className="mb-5">
          <b>
            <span className="text-highlight">Choose Currency</span>
          </b>
          <CryptoSelection
            coin="BTC"
            name="Bitcoin"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-btc"
          />
          <CryptoSelection
            coin="USDC"
            name="USD Coin (ERC20)"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-usdc"
          />

          <CryptoSelection
            coin="USDC.BEP20"
            name="USD Coin (BSC Chain)"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-USDC.BEP20"
          />

          <CryptoSelection
            coin="USDC.TRC20"
            name="USD Coin (Tron/TRC20)"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-USDC.TRC20"
          />

          <CryptoSelection
            coin="USDT.BEP20"
            name="Tether USD (BSC Chain)"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-USDT.BEP20"
          />

          <CryptoSelection
            coin="USDT.ERC20"
            name="Tether USD (ERC20)"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-USDT.ERC20"
          />

          <CryptoSelection
            coin="USDT.TRC20"
            name="Tether USD (Tron/TRC20)"
            selectedCoin={selectedCoin}
            onSelectedCoin={onSelectedCoin}
            uniqueValue="flexRadioDefault-USDT.TRC20"
          />
        </Row>
        <p className="mb-2">
          <b>What is Crypto?</b>
        </p>
        <p>
          A 100% Secure Payment Gateway. PayPal allows payment through credit
          cards, bank accounts, buyer credit, or PayPal account balances.
        </p>
      </Col>
      <Col xs={12}>
        {getTermTextCondition(termCondition, onChangeTermCondition)}
      </Col>
      {conditionBeforePayment(
        loggedInUser,
        pressVerifyEmail,
        pressLogin,
        currentCartItem
      )}
      {blockListObjectExist ? (
        <Button
          disabled={
            !loggedInUser ||
            !currentCartItem.length ||
            !termCondition ||
            editBillingEnable
          }
          className="mt-4"
          onClick={() => setCryptoModalVisible(true)}
        >
          Request a crypto payment for this order
        </Button>
      ) : (
        <div className="mt-4">
          <PlisioButton
            termCondition={termCondition}
            editBillingEnable={editBillingEnable}
            selectedCoin={selectedCoin}
          />
        </div>
      )}
    </div>
  );
};

export default CryptoPaymentView;
