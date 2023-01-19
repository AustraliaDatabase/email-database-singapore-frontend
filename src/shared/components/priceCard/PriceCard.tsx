import { Check } from "phosphor-react";
import React, { ReactNode } from "react";
import { useRoot } from "../../contexts/RootProvider";

import Button from "../button/Button";
import styles from "./priceCard.module.scss";
import {
  AddToCart,
  convertToMillion,
} from "../../../services/internalServices";
import { numberWithCommas } from "../../InternalService";
import { DATABASE_MAIN_TYPES } from "../../enums";
import classNames from "classnames";

interface IPriceCard {
  title: string;
  caption: string;
  amount: number | string;
  includes: string;
  bannerTitle?: string | ReactNode;
  directContacts: number;
  url: string;
  bannerPlainTitle?: string;
  databaseMainType?: DATABASE_MAIN_TYPES | null;
  AsTag?: any;
  isCompleteDatabase: boolean;
  description?: string;
  index?: number;
}

const PriceCard: React.FC<IPriceCard> = (props) => {
  const {
    title,
    caption,
    includes,
    amount,
    directContacts,
    url,
    bannerPlainTitle,
    databaseMainType,
    AsTag = "div",
    isCompleteDatabase,
    description,
    index,
  } = props;
  // @ts-ignore
  const { currentCartItem, setCurrentCartItem, setCartEnable } = useRoot();

  // databaseMainType

  const addToCart = () => {
    AddToCart(
      currentCartItem,
      setCurrentCartItem,
      url,
      directContacts,
      Number(amount),
      bannerPlainTitle,
      databaseMainType,
      isCompleteDatabase
    );

    setCartEnable(true);
  };

  const priceListTitleText = {
    [DATABASE_MAIN_TYPES.REALTOR]: "Realtors",
    [DATABASE_MAIN_TYPES.REALTOR_OLD]: "",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "Direct Email Contacts",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD]: "",
    [DATABASE_MAIN_TYPES.COUNTRY]: "",
    [DATABASE_MAIN_TYPES.CONSUMER]: "",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "Direct Email Contacts",
    [DATABASE_MAIN_TYPES.TARGET]: "",
    [DATABASE_MAIN_TYPES.OTHERS]: "",
  };
  const getBgElement = {
    0: styles.waveBg1,
    1: styles.waveBg2,
    2: styles.waveBg3,
  };

  return (
    <div
      className={classNames(
        styles.card,
        // @ts-ignore
        getBgElement[index]
      )}
    >
      <div className={styles.cardHeader}>
        <div className={styles.amountText}>${amount}</div>
        {databaseMainType && priceListTitleText[databaseMainType] ? (
          <AsTag
            className={classNames("text-center", styles.mainTitle)}
            dangerouslySetInnerHTML={{
              __html: `${title}<span> - ${convertToMillion(directContacts)} ${
                priceListTitleText[databaseMainType]
              }</span> `,
            }}
          ></AsTag>
        ) : (
          <AsTag
            className={classNames("text-center", styles.mainTitle)}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></AsTag>
        )}
        <div
          className={classNames("text-center", styles.mainDescription)}
          dangerouslySetInnerHTML={{
            __html: caption?.replace(
              "{{count}}",
              numberWithCommas(directContacts?.toString())
            ),
          }}
        />
      </div>
      <div className={styles.cardBody}>
        <ul>
          {includes?.split(";")?.map((item, index) => (
            <li key={index} className={styles.detailsWrapper}>
              <span className={styles.cardIcon}>
                <Check size={20} />
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
        {description && (
          <div
            className={classNames("text-center", styles.mainDescription)}
            dangerouslySetInnerHTML={{
              __html: description?.replace(
                "{{price}}",
                `$${numberWithCommas(amount?.toString())}`
              ),
            }}
          />
        )}
        <Button onClick={addToCart}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default PriceCard;
