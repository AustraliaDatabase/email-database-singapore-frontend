import classNames from "classnames";
import { Check, CheckCircle, ShoppingCartSimple } from "phosphor-react";
import React, { useState } from "react";

import { AddToCart } from "../../../../../services/internalServices";
import { useRoot } from "../../../../contexts/RootProvider";
import { DATABASE_MAIN_TYPES } from "../../../../enums";
import { IMainProductInfo, IPriceList } from "../../../../interface";
import Button from "../../../button/Button";
import PriceButton from "../priceButton/PriceButton";
import styles from "./style.module.scss";

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

  console.log("priceInfo?.list", currentObject?.price?.list?.[currentIndex]);

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

  return (
    <div className={styles.mainWrapper}>
      <div>
        <div className={styles.title}>Select Package</div>
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
                  ${singlePriceItem.price}
                </PriceButton>
              );
            }
          )}
        </div>
      </div>

      <div>
        <div className={styles.title}>Data Fields</div>
        <div className={classNames(styles.secondaryWrapper)}>
          {currentObject?.price?.list[currentIndex]?.includes
            ?.split(";")
            ?.map((item, index) => (
              <div key={index} className={styles.detailsWrapper}>
                <span className={styles.cardIcon}>
                  <CheckCircle size={22} />
                </span>{" "}
                {item}
              </div>
            ))}
        </div>
      </div>

      <Button className={styles.addToCart} onClick={addToCart}>
        <ShoppingCartSimple size={24} />
        Add To Cart
      </Button>
    </div>
  );
};

export default PriceListView;
