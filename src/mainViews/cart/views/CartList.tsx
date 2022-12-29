import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { ICartItem } from "../../../shared/interface";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../cartMainView.module.scss";

import { useRoot } from "../../../shared/contexts/RootProvider";
import Button from "../../../shared/components/button/Button";
import instance from "../../../services/baseServices";
import { triggerForm } from "../../../services/internalServices";
import { BUTTON_VARIANT_ENUM } from "../../../shared/enums";
import dayjs from "dayjs";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

interface ICartListView {
  pressRemove: (name: string) => void;
  productList: ICartItem[];
}

const CartListView = (props: ICartListView) => {
  const { productList, pressRemove } = props;
  const {
    setCartEnable,
    currentCartItem,
    setTotalCartAmount,
    totalCartAmount,
    promoCodeApplied,
    setPromoCodeApplied,
    promoCode,
    setPromoCode,
  } = useRoot();

  const [loadingPromoCode, setLoadingPromoCode] = useState(false);

  useEffect(() => {
    if (!productList?.length) {
      setCartEnable(false);
    }
  }, [currentCartItem?.length]);

  const isDayExpired = (date: number) =>
    dayjs().date() === dayjs.unix(date).date()
      ? false
      : dayjs().isAfter(dayjs.unix(date));

  const pressApply = async () => {
    if (!promoCode) {
      triggerForm({
        title: "",
        text: "Field is Empty!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    setLoadingPromoCode(true);

    try {
      const matchingPromoCode = await instance.post("/promo-codes", {
        promoCode,
      });

      if (!matchingPromoCode?.data?.length) {
        triggerForm({
          title: "",
          text: "No Matching Promo Code Found!",
          icon: "error",
          confirmButtonText: "OK",
        });

        setLoadingPromoCode(false);
        setPromoCode("");
        return;
      }

      const isExpired = isDayExpired(matchingPromoCode?.data[0].endDate);

      if (isExpired) {
        triggerForm({
          title: "",
          text: "This Promo Code is Expired!",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoadingPromoCode(false);
        setPromoCode("");
        return;
      }

      const promoUnit = matchingPromoCode?.data[0]?.promoUnit;
      const amount = matchingPromoCode?.data[0]?.percentage;

      const increasedTotalPercent =
        promoUnit === "-"
          ? amount
          : totalCartAmount * (matchingPromoCode?.data[0].percentage / 100);

      setTotalCartAmount(
        totalCartAmount - Number(increasedTotalPercent?.toFixed(0))
      );
      setPromoCodeApplied(true);
      setLoadingPromoCode(false);
      triggerForm({
        title: "",
        text: "Promo Code Applied Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      setLoadingPromoCode(false);
    }
  };

  const cancelPromoCode = () => {
    setPromoCode("");
    setPromoCodeApplied(false);

    if (currentCartItem?.length) {
      let totalPrice = 0;
      currentCartItem?.map((element: ICartItem) => {
        totalPrice += element.price;
      });

      setTotalCartAmount(totalPrice);
    } else {
      setTotalCartAmount(0);
    }
  };

  return (
    <>
      <Row>
        <Col className="pb-3" xs={12}>
          <Row>
            <Col xs={8}>
              <b>Product Name</b>
            </Col>
            <Col xs={2} md={2} className="text-end">
              <b>Price</b>
            </Col>
            <Col md={2} />
          </Row>
        </Col>
        {productList.map((element: ICartItem, index: number) => {
          return (
            <Col key={index} xs={12}>
              <Col className={styles.item} xs="12">
                <Row>
                  <Col xs={8} md={7}>
                    {typeof element.productName === "string" ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: element.productName,
                        }}
                      />
                    ) : (
                      element.productName
                    )}
                  </Col>
                  <Col xs={2} md={3} className="text-end text-highlight">
                    <b>${element.price}</b>
                  </Col>
                  <Col
                    className="text-end"
                    xs={2}
                    md={2}
                    onClick={() => pressRemove(element.productName)}
                  >
                    <Trash size={24} />
                  </Col>
                </Row>
              </Col>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col xs={7} md={9}>
          <input
            placeholder="Promo Code"
            value={promoCode}
            onChange={(event: any) => setPromoCode(event.target.value)}
            type="text"
            disabled={promoCodeApplied}
          />
        </Col>
        <Col xs={4} md={3}>
          {promoCodeApplied ? (
            <Button
              onClick={cancelPromoCode}
              variant={BUTTON_VARIANT_ENUM.Secondary}
              loading={loadingPromoCode}
            >
              Remove
            </Button>
          ) : (
            <Button onClick={pressApply} loading={loadingPromoCode}>
              Apply
            </Button>
          )}
        </Col>
      </Row>

      <Row className={styles.totalRow}>
        <Col xs={6} md={7} className={styles.total}>
          <b>Total Cost</b>
        </Col>
        <Col xs={6} md={3} className={styles.cost}>
          ${totalCartAmount}
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default CartListView;
