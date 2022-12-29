import { useRouter } from "next/router";
import React, { useState } from "react";
import instance from "../../../../services/baseServices";

import { setPlisioLocal } from "../../../../services/helpers/tokenService";
import { triggerForm } from "../../../../services/internalServices";
import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { PAYMENT_METHOD } from "../../../../shared/enums";
import {
  generateRandomPassword,
  makeOrderAction,
} from "../../../../shared/InternalService";

interface IPlisioButton {
  termCondition: boolean;
  editBillingEnable: boolean;
  selectedCoin: string;
}

const PlisioButton = (props: IPlisioButton) => {
  const router = useRouter();
  const { termCondition, editBillingEnable, selectedCoin } = props;
  const [plisioLoading, setPlisioLoading] = useState(false);

  const {
    currentCartItem,
    loggedInUser,
    setCurrentCartItem,
    setCryptoModalVisible,
    totalCartAmount,
    promoCode,
  } = useRoot();

  const pressPlisioCrypto = async () => {
    setPlisioLoading(true);

    const orderId = generateRandomPassword();
    setPlisioLocal({
      currentCartItem: currentCartItem,
      totalAmount: totalCartAmount,
      loggedInUser: loggedInUser,
      orderId,
    });

    try {
      const repsonse = await instance.post("createTransaction", {
        coin: selectedCoin,
        email: loggedInUser?.email,
        amount: totalCartAmount,
        orderId,
      });

      if (repsonse.data?.checkout_url) {
        makeOrderAction(
          currentCartItem,
          totalCartAmount,
          null,
          loggedInUser,
          "",
          "",
          setCurrentCartItem,
          router,
          setCryptoModalVisible,
          () => {},
          PAYMENT_METHOD.CRYPTO_PLISIO_INITIALIZED,
          orderId,
          promoCode,
          repsonse.data
        );

        const newWin = window.open(repsonse.data?.checkout_url);

        if (!newWin || newWin.closed || typeof newWin.closed == "undefined") {
          triggerForm({
            title: "",
            text: "Our Plisio window was blocked by your Browser. Please allow popup and redirects",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        triggerForm({
          title: "",
          text:
            repsonse.data?.extra?.data?.error || "Coin Payment URL  Not Found",
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      setPlisioLoading(false);
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });

      setPlisioLoading(false);
    }
  };

  return (
    <Button
      disabled={
        !loggedInUser ||
        !currentCartItem.length ||
        !termCondition ||
        editBillingEnable
      }
      loading={plisioLoading}
      onClick={pressPlisioCrypto}
    >
      Proceed to Crypto Payment
    </Button>
  );
};

export default PlisioButton;
