import { ChangeEventHandler, ReactNode } from "react";

import { DATABASE_MAIN_TYPES, PAYMENT_STATUS } from "../shared/enums";
import { ICartItem, IReviewItem } from "../shared/interface";
import { numberWithCommas } from "../shared/InternalService";
import { addToCartLocal } from "./helpers/tokenService";
import styles from "./style.module.scss";

export const AddToCart = (
  currentCartItem: ICartItem[],
  setCurrentCartItem: any,
  url?: string,
  directContacts?: number,
  amount?: number,
  productName?: string,
  databaseMainType?: DATABASE_MAIN_TYPES | null,
  isCompleteDatabase?: boolean
) => {
  const selectedCartItem = currentCartItem?.filter((element: ICartItem) => {
    return element.id?.replace(/\//g, "") === url?.replace(/\//g, "");
  });

  if (selectedCartItem?.length) {
    triggerForm({
      title: "",
      text: "Already added to the Cart!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  setCurrentCartItem([
    ...currentCartItem,
    {
      id: url,
      productName,
      price: amount,
      contacts: directContacts,
      databaseMainType,
      isCompleteDatabase,
    },
  ]);

  addToCartLocal([
    ...currentCartItem,
    {
      id: url,
      productName,
      price: amount,
      contacts: directContacts,
      databaseMainType,
      isCompleteDatabase,
    },
  ]);
};

// @ts-ignore
export const getNodeText = (node: any) => {
  if (["string", "number"].includes(typeof node)) return node;
  if (node instanceof Array) return node.map(getNodeText).join("");
  if (typeof node === "object" && node) return getNodeText(node.props.children);
};

export const wrapPaymentEnum = (enumValue: PAYMENT_STATUS) => {
  const getColor = {
    [PAYMENT_STATUS.REQUESTED]: "#e28743",
    [PAYMENT_STATUS.APPROVED]: "green",
    [PAYMENT_STATUS.REJECTED]: "#cc2000",
    [PAYMENT_STATUS.PENDING]: "#063970",
    [PAYMENT_STATUS.INITIALIZED]: "#010F35",
  };

  return getColor[enumValue];
};

export const getTermTextCondition = (
  termCondition: boolean,
  onChangeTermCondition: ChangeEventHandler<HTMLInputElement>
) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={termCondition}
          onChange={onChangeTermCondition}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I&apos;ve read and accept the{" "}
          <a href="/terms" target="_blank">
            <span className="text-highlight">Terms &amp; Conditions</span>
          </a>{" "}
          *
        </label>
      </div>
    </>
  );
};

export const conditionBeforePayment = (
  loggedInUser: any,
  pressVerifyEmail: any,
  pressLogin: any,
  currentCartItem: ICartItem[]
) => {
  return (
    <>
      {!currentCartItem.length && (
        <div>
          <span className={styles.red}>*</span> You have No items in your Cart.
          Please add something in your Cart
        </div>
      )}
      {!loggedInUser && (
        <p className={styles.messageWrapper}>
          Please{" "}
          <span className={styles.link} onClick={pressLogin}>
            Log in
          </span>{" "}
          to proceed the Payment
        </p>
      )}
    </>
  );
};

export const triggerForm = (swalObject: any) => {
  import("sweetalert2" /* webpackChunkName: "sweetalert2" */).then(
    ({ default: Swal }) => {
      Swal.fire({
        ...swalObject,
      });
    }
  );
};

export const calculateReviews = (enabledReviews: IReviewItem[]) => {
  let total = 0;

  enabledReviews.map((reviewItem: IReviewItem) => {
    total += reviewItem?.ratingValue;
  });

  return (total / enabledReviews?.length)?.toFixed(2);
};

export const convertToMillion = (labelValue: number) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e6
    ? Math.abs(Number(labelValue)) / 1.0e6 + " Million"
    : numberWithCommas(labelValue?.toString());
};
