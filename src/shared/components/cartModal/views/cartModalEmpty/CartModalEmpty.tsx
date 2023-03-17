import React from "react";
import { useRouter } from "next/router";

import { BUTTON_VARIANT_ENUM } from "../../../../enums";
import Image from "next/image";

import Button from "../../../button/Button";
import styles from "./style.module.scss";
import classNames from "classnames";

interface ICartModalEmpty {
  setCartEnable: (value: boolean) => void;
}

const CartModalEmpty = (props: ICartModalEmpty) => {
  const { setCartEnable } = props;

  const router = useRouter();
  const pressBuildList = () => {
    // router.push("/price-plans");
    setCartEnable(false);
  };
  return (
    <div className="text-center">
      <div className="mb-5 text-center">
        <Image
          src="/empty-cart.png"
          width={230}
          height={192}
          alt="cart empty"
        />
      </div>
      <h2 className={classNames("mb-2 text-center", styles.title)}>
        Lead your game
      </h2>
      <p className="text-center text-color-default pb-3 mb-0">
        You are few clicks away from landing successful sales leads
      </p>
      <Button
        onClick={pressBuildList}
        className="mt-3 mb-2 "
        variant={BUTTON_VARIANT_ENUM.Text}
      >
        Build a List
      </Button>
    </div>
  );
};

export default CartModalEmpty;
