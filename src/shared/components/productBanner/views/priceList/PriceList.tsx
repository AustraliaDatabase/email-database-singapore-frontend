import React, { useState } from "react";
import classNames from "classnames";
import { CheckCircle, ShoppingCartSimple } from "phosphor-react";

import { useRoot } from "../../../../contexts/RootProvider";
import { AddToCart } from "../../../../../services/internalServices";
import { BUTTON_VARIANT_ENUM, DATABASE_MAIN_TYPES } from "../../../../enums";
import { ICartItem, IMainProductInfo, IPriceList } from "../../../../interface";
import PriceButton from "../priceButton/PriceButton";
import Button from "../../../button/Button";
import styles from "./style.module.scss";
import { numberWithCommas } from "../../../../InternalService";
import { DATA_FIELDS, PRICE_PACKAGE_TYPES } from "../../../../constants";
import { addToCartLocal } from "../../../../../services/helpers/tokenService";

interface IPriceListView {
  currentObject: IMainProductInfo;
}

const PriceListView = (props: IPriceListView) => {
  const { currentObject } = props;

  const databaseMainType = currentObject?.type;

  const statsInfo = currentObject?.stats;

  const { currentCartItem, setCurrentCartItem, setCartEnable } = useRoot();

  const [currentIndex, setCurrentIndex] = useState(0);

  const pressButton = (index: number) => {
    setCurrentIndex(index);
  };

  const numOfContacts: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: statsInfo?.numberOfRealtors,
    [DATABASE_MAIN_TYPES.REALTOR_OLD]: statsInfo?.numberOfRealtors,
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: statsInfo?.uniqueDirectB2BEmails,
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD]:
      statsInfo?.uniqueDirectB2BEmails,
    [DATABASE_MAIN_TYPES.JOB_TITLE]: statsInfo?.uniqueDirectContacts,
    [DATABASE_MAIN_TYPES.CONSUMER]: statsInfo?.uniqueDirectContacts,
    [DATABASE_MAIN_TYPES.COUNTRY]: statsInfo?.uniqueDirectContacts,
    [DATABASE_MAIN_TYPES.INDUSTRY]: statsInfo?.uniqueDirectContacts,
    [DATABASE_MAIN_TYPES.TARGET]: statsInfo?.uniqueDirectContacts,
  };

  const addToCart = () => {
    const element = currentObject?.price?.list?.[currentIndex];

    const directContacts =
      currentObject?.price?.list?.length > 2 && currentIndex == 0
        ? statsInfo?.starterPackage
        : numOfContacts[databaseMainType];

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
      directContacts,
      Number(element.price),
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
    <div className={styles.mainWrapper}>
      <div>
        <h3 className={styles.title}>Select Package</h3>
        <div className={classNames("d-flex", styles.wrapper)}>
          {currentObject?.price?.list.map(
            (singlePriceItem: IPriceList, index: number) => {
              return (
                <PriceButton
                  key={index}
                  onClick={pressButton}
                  index={index}
                  contactCounts={statsInfo?.uniqueDirectB2BEmails}
                  isActive={currentIndex === index}
                >
                  ${numberWithCommas(singlePriceItem.price?.toString())}
                </PriceButton>
              );
            }
          )}
        </div>
      </div>

      <div>
        <h3 className={classNames(styles.title, "mt-5")}>
          Data Fields of {PRICE_PACKAGE_TYPES[currentIndex]}
        </h3>
        <div className={classNames(styles.secondaryWrapper)}>
          {DATA_FIELDS[currentIndex]?.split(";")?.map((item, index) => (
            <div key={index} className={styles.detailsWrapper}>
              <span className={styles.cardIcon}>
                <CheckCircle size={22} />
              </span>{" "}
              {item}
            </div>
          ))}
        </div>
      </div>

      <Button
        variant={
          selectedCartItem?.length
            ? BUTTON_VARIANT_ENUM.Secondary
            : BUTTON_VARIANT_ENUM.Primary
        }
        className={styles.addToCart}
        onClick={selectedCartItem?.length ? removeCartItem : addToCart}
      >
        <ShoppingCartSimple size={24} />
        {selectedCartItem?.length ? "Remove from Cart" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default PriceListView;
