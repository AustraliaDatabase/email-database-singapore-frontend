import React, { useEffect, useState } from "react";
import Select from "react-select";
import Image from "next/image";
import dayjs from "dayjs";
import Col from "react-bootstrap/Col";

import { useRoot } from "../../contexts/RootProvider";
import Button from "../../../shared/components/button/Button";
import UCDModal from "../UCDModal/UCDModal";
import { PAYMENT_CRYPTO_COIN, PAYMENT_METHOD } from "../../enums";
import { BITCOIN_NETWORK, USDC_NETWORK, USDT_NETWORK } from "../../constants";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { generateRandomPassword, makeOrderAction } from "../../InternalService";
import Swal from "sweetalert2";

// let now = dayjs();

const COIN_DATA = [
  {
    value: PAYMENT_CRYPTO_COIN.USDT,
    label: "USDT",
    image: "usdt.png",
    description: "TetherUs",
  },
  {
    value: PAYMENT_CRYPTO_COIN.USDC,
    label: "USDC",
    image: "usdc.png",
    description: "USD Coin",
  },
  {
    value: PAYMENT_CRYPTO_COIN.BITCOIN,
    label: "BTC",
    image: "bitcoin.png",
    description: "Bitcoin",
  },
];

const CryptoModal = () => {
  const [loading, setLoading] = useState(false);
  const [currentCoinSelection, setCurrentCoinSelection] = useState<any>(null);
  const [currentNetworkSelection, setCurrentNetworkSelection] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState<any>(null);
  // const [totalAmount, setTotalAmount] = useState(0);

  const router = useRouter();
  const {
    cryptoModalVisible,
    currentCartItem,
    setCurrentCartItem,
    loggedInUser,
    setCartEnable,
    userPrivateInfo,
    setCryptoModalVisible,
    totalCartAmount,
    promoCode,
  } = useRoot();

  useEffect(() => {
    if (!currentCartItem?.length) {
      setCartEnable(false);
    }
  }, [currentCartItem?.length]);

  const pressClose = () => {
    setCryptoModalVisible(false);
  };

  const makeOrder = async () => {
    setLoading(true);
    Swal.fire({
      title: "",
      text: `You have selected ${currentCoinSelection?.value} Coin and ${selectedNetwork?.value} Deposit Network. If you're sure, please confirm this order.`,
      showCancelButton: true,
      confirmButtonText: "Yes, Confirm Order",
      confirmButtonColor: "#FF4800",
      cancelButtonColor: "#010F35",
      cancelButtonText: "No, Im'not sure",
    }).then((result) => {
      if (result.isConfirmed) {
        makeOrderAction(
          currentCartItem,
          totalCartAmount,
          userPrivateInfo,
          loggedInUser,
          currentCoinSelection,
          selectedNetwork,
          setCurrentCartItem,
          router,
          setCryptoModalVisible,
          setLoading,
          PAYMENT_METHOD.CRYPTO,
          generateRandomPassword(),
          promoCode
        );
      } else if (result.isDismissed) {
        setLoading(false);
      }
    });
  };

  const handleChange = (selectedCoinObject: any) => {
    setCurrentCoinSelection(selectedCoinObject);

    const getNetworkForCoin: any = {
      [PAYMENT_CRYPTO_COIN.USDC]: USDC_NETWORK,
      [PAYMENT_CRYPTO_COIN.USDT]: USDT_NETWORK,
      [PAYMENT_CRYPTO_COIN.BITCOIN]: BITCOIN_NETWORK,
    };

    setCurrentNetworkSelection(getNetworkForCoin[selectedCoinObject.value]);
    setSelectedNetwork(null);
  };

  const handleNetworkChange = (selectedNetwork: any) => {
    setSelectedNetwork(selectedNetwork);
  };

  return (
    <UCDModal
      bodyClassName="px-4 pb-4"
      onHide={pressClose}
      title="Crypto Payment"
      open={cryptoModalVisible}
    >
      <label className={styles.label}>Select the coin you want to pay</label>
      <Select
        placeholder="Select Coin"
        value={currentCoinSelection}
        className={styles.dropdown}
        options={COIN_DATA}
        onChange={handleChange}
        // @ts-ignore
        getOptionLabel={(labelObject: any) => {
          return (
            <div className={styles.imageCoinWrapper}>
              <Image
                src={`/${labelObject.image}`}
                alt="404"
                width={20}
                height={20}
                objectFit="contain"
                layout="fixed"
                objectPosition="center"
              />
              <b className={styles.coinTitle}>{labelObject.label}</b>{" "}
              <span>{labelObject.description}</span>
            </div>
          );
        }}
      />

      {currentNetworkSelection && (
        <>
          <label className={styles.label}>Select Deposit Network</label>
          <Select
            placeholder="Select Coin"
            value={selectedNetwork}
            className={styles.dropdown}
            // @ts-ignore
            options={currentNetworkSelection}
            onChange={handleNetworkChange}
            // @ts-ignore
            getOptionLabel={(labelObject: any) => {
              return (
                <Col>
                  <Col>
                    <b>{labelObject.value}</b>
                  </Col>{" "}
                  <Col>{labelObject.description}</Col>
                </Col>
              );
            }}
          />
        </>
      )}

      <Button
        loading={loading}
        disabled={loading || !selectedNetwork}
        className="mt-3"
        onClick={makeOrder}
      >
        Make Order
      </Button>
    </UCDModal>
  );
};

export default CryptoModal;
