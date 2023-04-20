import dayjs from "dayjs";
import { htmlToText } from "html-to-text";

import { PAYMENT_METHOD, PAYMENT_STATUS } from "./enums";
import { ICartItem } from "./interface";
import {
  getIpAddress,
  orderCreatedCryptoEmailSend,
  orderCreatedEmailSend,
} from "./emailSend";
import { CATEGORIES_TO_URLS } from "./constants";
import { addToCartLocal } from "../services/helpers/tokenService";
import { NextRouter } from "next/router";
import { triggerForm } from "../services/internalServices";
import instance from "../services/baseServices";

let now = dayjs();

export const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

export const validateRequired = (value: string) => {
  let error;
  if (!value) {
    error = "Required";
  }

  return error;
};

export const emailValidation = (value: string) => {
  let error;
  if (!value) {
    error = "Email is required"
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
    error = "Invalid email address"
  }
  return error;
}

export const passwordValidation = (value: any) => {
  let error;
  if (!value) {
    error = "Password is required";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value)
  ) {
    error =
      "Password must be least 6 characters & include 1 letter, 1 number, and 1 special char (@$!%*#?&)";
  }
  return error;
};

export const validURL = (str: string) => {
  let error;

  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  if (!!pattern.test(str)) {
    error = null;
  } else {
    return "Not a Valid URL";
  }
};

export const numberWithCommas = (price: string, appendDecimals = 0) => {
  return parseFloat(price).toLocaleString(undefined, {
    minimumFractionDigits: appendDecimals,
    maximumFractionDigits: 9,
  });
};

// export const getRealtorObject = (currentCompanyDBState?: string) => {
//   if (!currentCompanyDBState) {
//     return null;
//   }

//   let databaseMainTypes = null;

//   let currentObject =
//     // @ts-ignore
//     COMPLETE_DATABASE_OBJECT[
//       JSON.stringify(currentCompanyDBState.replace(/\//g, ""))
//     ];

//   if (currentObject) {
//     databaseMainTypes = DATABASE_MAIN_TYPES.COMPANY_DATABASE;
//   }

//   if (!currentObject) {
//     currentObject =
//       // @ts-ignore
//       REALTORS_OBJECT[JSON.stringify(currentCompanyDBState.replace(/\//g, ""))];

//     if (currentObject) {
//       databaseMainTypes = DATABASE_MAIN_TYPES.REALTOR;
//     }
//   }

//   if (!currentObject) {
//     // @ts-ignore
//     currentObject = JOB_TITLES.filter(
//       (element) =>
//         element.url?.replace(/\//g, "") ===
//         currentCompanyDBState.replace(/\//g, "")
//     )?.[0];

//     if (currentObject) {
//       databaseMainTypes = DATABASE_MAIN_TYPES.JOB_TITLE;
//     }
//   }

//   if (!currentObject) {
//     // @ts-ignore
//     currentObject = JOB_INDUSTRIES.filter(
//       (element) =>
//         element.url?.replace(/\//g, "") ===
//         currentCompanyDBState.replace(/\//g, "")
//     )?.[0];

//     if (currentObject) {
//       databaseMainTypes = DATABASE_MAIN_TYPES.INDUSTRY;
//     }
//   }

//   if (!currentObject) {
//     // @ts-ignore
//     currentObject = COUNTRIES_DATABASE.filter(
//       (element) =>
//         element.url?.replace(/\//g, "") ===
//         currentCompanyDBState.replace(/\//g, "")
//     )?.[0];

//     if (currentObject) {
//       databaseMainTypes = DATABASE_MAIN_TYPES.COUNTRY;
//     }
//   }

//   if (!currentObject) {
//     // @ts-ignore
//     currentObject = CONSUMER_EMAIL_DATABASE.filter(
//       (element) =>
//         element.url?.replace(/\//g, "") ===
//         currentCompanyDBState.replace(/\//g, "")
//     )?.[0];

//     if (currentObject) {
//       databaseMainTypes = DATABASE_MAIN_TYPES.CONSUMER;
//     }
//   }

//   if (!currentObject) {
//     // @ts-ignore
//     currentObject = null;
//   }

//   return { currentObject, databaseMainTypes };
// };

export const makeOrderAction = async (
  currentCartItem: ICartItem[],
  totalAmount: number,
  userPrivateInfo: any,
  loggedInUser: any,
  currentCoinSelection: any,
  selectedNetwork: any,
  setCurrentCartItem: any,
  router: any,
  setCryptoModalVisible: any,
  setLoading: any,
  paymentMethod: PAYMENT_METHOD,
  orderId: string,
  promoCode?: string,
  coinPaymentInfo?: any
) => {
  const ipAddress = await getIpAddress();

  const totalOrder = {
    currentCartItem: currentCartItem.map((element: any) => {
      return {
        contacts: element.contacts,
        price: element.price,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${element.id}`,
        productName: element?.productName,
      };
    }),
    totalAmount,
    date: now.unix(),
    status:
      paymentMethod === PAYMENT_METHOD.CRYPTO
        ? PAYMENT_STATUS.REQUESTED
        : paymentMethod === PAYMENT_METHOD.CRYPTO_PLISIO_INITIALIZED
          ? PAYMENT_STATUS.INITIALIZED
          : PAYMENT_STATUS.PENDING,
    userIpAddress: ipAddress || "",
    paymentMethod,
    orderId,
    promoCode: promoCode || "",
    coinPaymentInfo: coinPaymentInfo || "",
  };

  try {
    const cryptoValueObj: any =
      paymentMethod === PAYMENT_METHOD.CRYPTO
        ? [
          {
            coin: currentCoinSelection?.value,
            network: selectedNetwork?.value,
          },
        ]
        : [];

    // PaymentService.updateWithCustomIdAndAdd(loggedInUser.uid, totalOrder);
    await instance.post(`/makeOrder`, {
      ...totalOrder,
    });

    if (paymentMethod !== PAYMENT_METHOD.CRYPTO_PLISIO_INITIALIZED) {
      orderCreatedEmailSend(
        loggedInUser,
        currentCartItem,
        totalAmount,
        orderId,
        loggedInUser?.email,
        loggedInUser?.email,
        paymentMethod,
        promoCode,
        ...cryptoValueObj
      );

      triggerForm({
        title: "",
        text: "You will soon receive an email from our agent.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      orderCreatedCryptoEmailSend(
        orderId,
        loggedInUser?.email,
        loggedInUser?.email,
        promoCode
      );
    }
    setCurrentCartItem([]);
    addToCartLocal([]);
    setLoading(false);
    setCryptoModalVisible(false);

    // @ts-ignore
    if (typeof window !== undefined && window?.dataLayer) {
      // @ts-ignore
      window.dataLayer.push({
        event: "purchase",
        ecommerce: {
          purchase: {
            actionField: {
              id: orderId,
              affiliation: promoCode || "",
              revenue: totalAmount,
              tax: 0,
            },
            products: currentCartItem.map((element: any) => {
              return {
                name: element?.productName,
                price: `${element.price}`,
                // @ts-ignore
                category: `${CATEGORIES_TO_URLS[element?.databaseMainType]}`,
                quantity: 1,
              };
            }),
          },
        },
      });
    }

    router.push("/orders");
  } catch (error: any) {
    triggerForm({
      title: "",
      text: error.response.data?.message || error.response.data,
      icon: "error",
      confirmButtonText: "OK",
    });

    setLoading(false);
  }
};

export const routeToLowerCase = (router: NextRouter) => {
  const productId = router.query.productId;

  const basePathName = router?.pathname?.replaceAll("/[productId]", "");
  if (
    // @ts-ignore
    productId?.toLowerCase() !== productId
  ) {
    // @ts-ignore
    router.push(`${basePathName}/${productId?.toLowerCase()}`, undefined, {
      shallow: true,
    });
  }
};

export const generateRandomPassword = () => {
  return (Math.floor(Math.random() * 90000) + 10000)?.toString();
};

export const trimAllSpaces = (str: string) => {
  return htmlToText(str).replace(/\s+/g, " ").trim();
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getFirstAndLastRow = (value: number) => {
  if (value >= 100 && value <= 500) {
    return {
      firstRecord: 100,
      lastRecord: 500,
      fistPrice: 20,
      lastPrice: 48,
    };
  } else if (value > 500 && value <= 1000) {
    return {
      firstRecord: 500,
      lastRecord: 1000,
      fistPrice: 48,
      lastPrice: 68,
    };
  } else if (value > 1000 && value <= 2500) {
    return {
      firstRecord: 1000,
      lastRecord: 2500,
      fistPrice: 68,
      lastPrice: 120,
    };
  } else if (value > 2500 && value <= 5000) {
    return {
      firstRecord: 2500,
      lastRecord: 5000,
      fistPrice: 120,
      lastPrice: 165,
    };
  } else if (value > 5000 && value <= 10000) {
    return {
      firstRecord: 5000,
      lastRecord: 10000,
      fistPrice: 165,
      lastPrice: 265,
    };
  } else if (value > 10000 && value <= 25000) {
    return {
      firstRecord: 10000,
      lastRecord: 25000,
      fistPrice: 265,
      lastPrice: 462,
    };
  } else if (value > 25000 && value <= 50000) {
    return {
      firstRecord: 25000,
      lastRecord: 50000,
      fistPrice: 462,
      lastPrice: 725,
    };
  } else if (value > 50000 && value <= 100000) {
    return {
      firstRecord: 50000,
      lastRecord: 100000,
      fistPrice: 725,
      lastPrice: 1350,
    };
  } else if (value > 100000 && value <= 250000) {
    return {
      firstRecord: 100000,
      lastRecord: 250000,
      fistPrice: 1350,
      lastPrice: 2475,
    };
  } else if (value > 250000 && value <= 500000) {
    return {
      firstRecord: 250000,
      lastRecord: 500000,
      fistPrice: 2475,
      lastPrice: 4000,
    };
  } else if (value > 500000 && value <= 1000000) {
    return {
      firstRecord: 500000,
      lastRecord: 1000000,
      fistPrice: 4000,
      lastPrice: 6700,
    };
  }

  return {
    firstRecord: 0,
    lastRecord: 0,
    fistPrice: 0,
    lastPrice: 0,
  };
};

const getPrice = (
  firstAmount: number,
  secondAmount: number,
  percent: number
) => {
  return ((secondAmount - firstAmount) * percent) / 100 + firstAmount;
};

const getPercent = (
  firstRecord: number,
  secondRecord: number,
  value: number
) => {
  return ((value - firstRecord) / (secondRecord - firstRecord)) * 100;
};

export const getB2BPricingByContacts = (value: number, percentValue: number) => {
  const { firstRecord, lastRecord, fistPrice, lastPrice } =
    getFirstAndLastRow(value);

  const percent = getPercent(firstRecord, lastRecord, value);

  const price = getPrice(fistPrice, lastPrice, percent) * percentValue;

  return Number(price?.toFixed(0));
};


export  const hideMiddleChars = (value: string, numStars: number) => {
  const length = value.length;
  const halfLength = Math.floor(length / 2);
  const startChars = value.slice(0, halfLength - Math.floor(numStars / 2));
  const endChars = value.slice(halfLength + Math.ceil(numStars / 2));
  const middleChars = "*".repeat(numStars);
  return startChars + middleChars + endChars;
}