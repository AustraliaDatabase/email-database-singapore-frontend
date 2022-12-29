import React, { useState } from "react";
import Slider from "react-rangeslider";

import Card from "../../../../shared/components/card/Card";
import {
  BUTTON_SIZE_ENUM,
  BUTTON_VARIANT_ENUM,
} from "../../../../shared/enums";
import styles from "./style.module.scss";
import {
  getB2BPricingByContacts,
  numberWithCommas,
} from "../../../../shared/InternalService";
import Button from "../../../../shared/components/button/Button";
import { PRICE_PLANS_CATEGORIES } from "./constants";
import { FormGroup } from "react-bootstrap";

const horizontalLabels = {
  250: "250",
  250000: "250,000",
  500000: "500,000",
  750000: "750,000",
  1000000: "1,000,000",
};

const PriceCalculator = () => {
  const [horizontal, setHorizontal] = useState(10000);
  const [priceValue, setPriceValue] = useState(1);
  const [contactsValue, setContactsValue] = useState(250);
  const [currentCategory, setCurrentCategory] = useState(
    PRICE_PLANS_CATEGORIES.B2B_COMPLETE
  );

  const handleChangeHorizontal = (value: number) => {
    setHorizontal(value);
    setDynamicValueSetup(value);
    setContactsValue(value);
  };

  const setDynamicValueSetup = (
    value: number,
    ownCategory?: PRICE_PLANS_CATEGORIES
  ) => {
    if (ownCategory) {
      if (ownCategory === PRICE_PLANS_CATEGORIES.B2B_EMAIL) {
        setPriceValue(getB2BPricingByContacts(value, 0.6));
      } else if (ownCategory === PRICE_PLANS_CATEGORIES.B2B_COMPLETE) {
        setPriceValue(getB2BPricingByContacts(value, 1));
      }
    } else {
      if (currentCategory === PRICE_PLANS_CATEGORIES.B2B_EMAIL) {
        setPriceValue(getB2BPricingByContacts(value, 0.6));
      } else if (currentCategory === PRICE_PLANS_CATEGORIES.B2B_COMPLETE) {
        setPriceValue(getB2BPricingByContacts(value, 1));
      }
    }
  };

  const onChangeNumber = (event: any) => {
    setHorizontal(event.target.value);
    setDynamicValueSetup(event.target.value);
    setContactsValue(event.target.value);
  };

  const renderButton = (text: string, ownCategory: PRICE_PLANS_CATEGORIES) => {
    return (
      <Button
        size={BUTTON_SIZE_ENUM.Large}
        isPublic
        variant={
          currentCategory === ownCategory
            ? BUTTON_VARIANT_ENUM.Primary
            : BUTTON_VARIANT_ENUM.Tertiary
        }
        line
        onClick={() => {
          setCurrentCategory(ownCategory);
          setDynamicValueSetup(contactsValue, ownCategory);
        }}
      >
        {text}
      </Button>
    );
  };

  return (
    <Card title="Price Calculator" className={styles.wrapper}>
      <div className={styles.wrap}>
        <p className="app-paragraph">Select your desired category</p>
        <div className={styles.buttonList}>
          {renderButton("B2B Email", PRICE_PLANS_CATEGORIES.B2B_EMAIL)}
          {renderButton("B2B Complete", PRICE_PLANS_CATEGORIES.B2B_COMPLETE)}
        </div>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: "space-between" }}
      >
        <FormGroup className="d-flex align-items-center mt-3" style={{ gap: 12 }}>
          <label htmlFor="recoveryEmail">Contacts</label>
          <input
            id="email"
            name="email"
            type="number"
            value={horizontal}
            onChange={onChangeNumber}
          />
        </FormGroup>
        <div className="d-flex" style={{ gap: 12 }}>
          <label htmlFor="recoveryEmail">Price</label>
          <label htmlFor="recoveryEmail">
            ${numberWithCommas(priceValue?.toString())}
          </label>
        </div>
      </div>
      <Slider
        min={100}
        max={1000000}
        value={horizontal}
        labels={horizontalLabels}
        tooltip={false}
        // handleLabel={horizontal}
        onChange={handleChangeHorizontal}
      />
    </Card>
  );
};

export default PriceCalculator;
