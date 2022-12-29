import { ReactNode } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { EMAIL_TEMPLATE_IDS } from "../menus/constants";
import { ADMIN_EMAIL } from "./constants";
import instance from "../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export const orderCreatedEmailSend = async (
  loggedInUser: any,
  currentCartItem: any,
  totalAmount: number,
  orderId: string,
  email: string,
  userEmail: string,
  paymentMethod: string,
  promoCode?: string,
  cryptoPayment?: {
    coin: string;
    network: string;
  }
) => {
  try {
    const response = await instance.post("/mail", {
      templateid: EMAIL_TEMPLATE_IDS.ORDER_CREATED,
      email: email,
      Items: currentCartItem.map((element: any) => {
        return {
          productName: element?.productName,
          price: element.price,
        };
      }),
      totalAmount: totalAmount,
      cc: [
        {
          name: "Mike",
          email: ADMIN_EMAIL,
        },
      ],
      orderId,
      promoCode: promoCode,
      billingAddress: {
        name: loggedInUser.name,
        streetAddress: `${loggedInUser?.streetAddress}, ${loggedInUser?.streetAddress2}`,
        country: loggedInUser?.country?.label,
        city: loggedInUser?.city,
        state: loggedInUser?.state,
        zipCode: loggedInUser?.zip,
      },
      userEmail,
      date: dayjs().format("YYYY-MMM-DD / h:mm A"),
      paymentMethod,
      cryptoPayment,
    });

    return response.data;
  } catch (error) {
    // error
  }
};

export const orderCreatedCryptoEmailSend = async (
  orderId: string,
  email: string,
  userEmail: string,
  promoCode?: string
) => {
  try {
    const response = await instance.post("/mail", {
      templateid: EMAIL_TEMPLATE_IDS.ORDER_CREATED_CRYPTO,
      email: email,
      cc: [
        {
          name: "Mike",
          email: ADMIN_EMAIL,
        },
      ],
      orderId,
      promoCode: promoCode,
      userEmail,
      date: dayjs().format("YYYY-MMM-DD / h:mm A"),
    });

    return response.data;
  } catch (error) {
    // error
  }
};

// export const orderCreatedEmailSendAdmin = async (
//   loggedInUser: any,
//   currentCartItem: any,
//   totalAmount: number,
//   orderId: string,
//   email: string,
//   userEmail: string,
//   paymentMethod: string,
//   ipAddress: string,
//   promoCode?: string,
//   cryptoPayment?: {
//     coin: string;
//     network: string;
//   }
// ) => {
//   try {
//     const response = await instance.post("/mail", {
//       templateid: EMAIL_TEMPLATE_IDS.ORDER_CREATED_ADMIN,
//       email: email,
//       Items: currentCartItem.map((element: any) => {
//         return {
//           productName: element?.productName,
//           price: element.price,
//         };
//       }),
//       totalAmount: totalAmount,
//       orderId,
//       billingAddress: {
//         name: loggedInUser.name,
//         streetAddress: `${loggedInUser?.streetAddress}, ${loggedInUser?.streetAddress2}`,
//         country: loggedInUser?.country?.label,
//         city: loggedInUser?.city,
//         state: loggedInUser?.state,
//         zipCode: loggedInUser?.zip,
//       },
//       userEmail,
//       date: dayjs().format("YYYY-MMM-DD / h:mm A"),
//       paymentMethod,
//       cryptoPayment,
//       ipAddress,
//     });

//     return response.data;
//   } catch (error) {
//     // error
//   }
// };

// export const orderRejectedEmailSend = async (
//   loggedInUser: any,
//   currentCartItem: any,
//   totalAmount: number,
//   rejectedReason: string,
//   orderId: string
// ) => {
//   try {
//     await fetch("/mail", {
//       method: "post",
//       body: JSON.stringify({
//         templateid: EMAIL_TEMPLATE_IDS.ORDER_REJECTED,
//         email: loggedInUser?.email,
//         Items: currentCartItem.map((element: any) => {
//           return {
//             productName: element?.productName,
//             price: element.price,
//           };
//         }),
//         totalAmount: totalAmount,
//         billingAddress: {
//           name: loggedInUser.name,
//           streetAddress: `${loggedInUser?.streetAddress}, ${loggedInUser?.streetAddress2}`,
//           country: loggedInUser?.country?.label,
//           city: loggedInUser?.city,
//           state: loggedInUser?.state,
//           zipCode: loggedInUser?.zip,
//         },
//         rejectedReason,
//         date: dayjs().format("YYYY-MMM-DD / h:mm A"),
//         orderId,
//       }),
//     });
//   } catch (error) {
//     // error
//   }
// };

// export const orderApprovedEmailSend = async (
//   loggedInUser: any,
//   currentCartItem: any,
//   totalAmount: number,
//   rejectedReason: string,
//   orderId: string
// ) => {
//   try {
//     await fetch("/mail", {
//       method: "post",
//       body: JSON.stringify({
//         templateid: EMAIL_TEMPLATE_IDS.ORDER_APPROVED,
//         email: loggedInUser?.email,
//         Items: currentCartItem.map((element: any) => {
//           return {
//             productName: element?.productName,
//             price: element.price,
//           };
//         }),
//         totalAmount: totalAmount,
//         billingAddress: {
//           name: loggedInUser.name,
//           streetAddress: `${loggedInUser?.streetAddress}, ${loggedInUser?.streetAddress2}`,
//           country: loggedInUser?.country?.label,
//           city: loggedInUser?.city,
//           state: loggedInUser?.state,
//           zipCode: loggedInUser?.zip,
//         },
//         rejectedReason,
//         date: dayjs().format("YYYY-MMM-DD / h:mm A"),
//         orderId,
//       }),
//     });
//   } catch (error) {
//     // error
//   }
// };

export const orderFailed = async (loggedInUser: any) => {};

export const orderCancelled = async (loggedInUser: any) => {};

export const contactUsEmailSend = async (values: any) => {
  try {
    const response = await instance.post("/mail", {
      templateid: EMAIL_TEMPLATE_IDS.CONTACT_US,
      ...values,
      email: ADMIN_EMAIL,
      userEmail: values.email,
      date: dayjs().format("YYYY-MMM-DD / h:mm A"),
    });

    return response.data;
  } catch (error) {}
};

export const supportEmailSend = async (
  downloadURL: any,
  userPrivateInfo: any,
  subject: string,
  message: string,
  name: string,
  loggedInEmail: string[]
) => {
  try {
    const response = await instance.post("/mail", {
      templateid: EMAIL_TEMPLATE_IDS.SUPPORT,
      email: loggedInEmail,
      ipAddress: userPrivateInfo?.IPv4,
      downloadURL,
      name,
      cc: [
        {
          name: "Mike",
          email: ADMIN_EMAIL,
        },
      ],
      subject,
      message,
      requestId: Math.floor(Math.random() * 10000 + 1),
      date: dayjs().format("YYYY-MMM-DD / h:mm A"),
    });

    return response.data;
  } catch (error) {}
};

export const emailSendSampleLink = async (
  businessEmail: string,
  name: string,
  title: ReactNode,
  links: any,
  downloadLink: string
) => {
  try {
    const response = await instance.post("/mail", {
      templateid: EMAIL_TEMPLATE_IDS.DOWNLOAD_MODAL,
      email: businessEmail,
      userName: name,
      subject: `Sample download list of ${title}`,
      state: title,
      cc: [
        {
          name: "Mike",
          email: ADMIN_EMAIL,
        },
      ],
      links: links,
      downloadLink,
    });

    return response;
  } catch (error) {
    return error;
  }
};

// export const emailSendSampleLinkAdmin = async (
//   businessEmail: string,
//   name: string,
//   title: ReactNode,
//   links: any,
//   downloadLink: string
// ) => {
//   try {
//     const ipAddress = await getIpAddress();

//     return await instance.post("/mail", {
//       templateid: EMAIL_TEMPLATE_IDS.DOWNLOAD_MODAL_ADMIN,
//       email: businessEmail,
//       userName: name,
//       subject: `Sample download list of ${title}`,
//       state: title,
//       links: links,
//       downloadLink,
//       ipAddress,
//     });
//   } catch (error) {}
// };

export const createAccount = async (name: string, email: string) => {
  try {
    return await instance.post("/mail", {
      templateid: EMAIL_TEMPLATE_IDS.CREATE_ACCOUNT,
      name,
      email,
    });
  } catch (error: any) {
  }
};

// export const createAccountAdmin = async (name: string, email: string) => {
//   try {
//     const ipAddress = await getIpAddress();

//     return await instance.post("/mail", {
//       templateid: EMAIL_TEMPLATE_IDS.CREATE_ACCOUNT_ADMIN,
//       name,
//       email,
//       ipAddress,
//     });
//   } catch (error) {}
// };

export const getIpAddress = async () => {
  let userIpInfo: any = null;
  try {
    const response = await axios.post("https://geolocation-db.com/json/");

    userIpInfo = await response.data;

    return userIpInfo?.IPv4;
  } catch (error) {
    return userIpInfo;
  }
};
