import { IHeaderLinks } from "./interface";

export const HEADER_LINKS: IHeaderLinks[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Pre-Made Lists",
    route: "/pre-made-list",
    subMenu: [
      {
        name: "By States",
        route: "/by-us-states",
      },
      {
        name: "Job Titles",
        route: "/job-titles",
      },
      { name: "Industries", route: "/industries" },
      {
        name: "Target",
        route: "/target",
      },
      { name: "International", route: "/international" },
      { name: "Zip Code", route: "/by-zip-code" },
    ],
  },
  { name: "Contact Us", route: "/contact-us" },
];

export const DASHBOARD_MENU_SET_PUBLIC = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
];

export const DASHBOARD_MENU_SET = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    name: "Orders",
    url: "/orders",
  },
  {
    name: "Billing",
    url: "/billing",
  },
  {
    name: "Downloads",
    url: "/downloads",
  },
  {
    name: "Free Sample",
    url: "/free-sample",
  },
  {
    name: "My Account",
    url: "/my-account",
  },
  {
    name: "Support",
    url: "/support",
  },
];

export interface IErrorCodeList {
  [key: number]: {
    title: string;
    body: string;
  };
}

export const ERROR_CODE_LIST: IErrorCodeList = {
  2022: {
    title: "Invalid Credentials",
    body: "Email or Password you entered is incorrect",
  },
  10010: {
    title: "You session has expired",
    body: "",
  },
  2002: {
    title: "Email has already been taken",
    body: "",
  },
  2005: {
    title: "Try again with a valid email address",
    body: "",
  },
  10008: {
    title: "You password reset code is invalid",
    body: "",
  },
  10007: {
    title: "You password reset code is expired",
    body: "",
  },
  1001: {
    title: "Mobile verification is already done",
    body: "",
  },
  10003: {
    title: "Mobile verification code has expired",
    body: "",
  },
  10004: {
    title: "Mobile Verification Code Is Invalid",
    body: "",
  },
  100: {
    title: "Code Sent Successfully!",
    body: "",
  },
  101: {
    title: "Logged In Successfully!",
    body: "",
  },
  102: {
    title: "Filtered List is already added to the list",
    body: "",
  },
  103: {
    title: " Profile Successfully Updated!",
    body: "",
  },
  10011: {
    title: "This Mobile Number is already in use",
    body: "",
  },
  10012: {
    title: "This Mobile Number is Invalid",
    body: "",
  },
  10001: {
    title: "Mobile Number is already Verified",
    body: "",
  },
  1: {
    title: "Oops! Something went wrong",
    body: "",
  },
  10006: {
    title: "Email Verification Code Is Invalid!",
    body: "",
  },
  10002: {
    title: "User Email Already Verified!",
    body: "",
  },
  1999: {
    title:
      "Your purchase is still being processed. Try once the process is complete.",
    body: "",
  },
  30001: {
    title: "Please confirm your mobile phone number to make a purchase.",
    body: "",
  },
  10014: {
    title: "This affiliate code is already in use. Please try a new one",
    body: "",
  },
  30002: {
    title: "Purchased List Still Pending Processing. Please try again later",
    body: "",
  },
  30011: {
    title: "CSV file is still being written. Please wait!",
    body: "",
  },
};

export const EMAIL_TEMPLATE_IDS = {
  CONTACT_US: "d-82b47fb5b18a4c70a53a5cddb2524a1c//TODO",
  SUPPORT: "d-24c8bb0dc16d4c1d93c014a24e28af53//TODO",
  ORDER_CREATED: "d-609a68ceda8d47e680db6d24dc787987//TODO",
  ORDER_CREATED_CRYPTO: "d-ff3aa808745c4824948cec9600d93869//TODO",
  // ORDER_CREATED_ADMIN: "d-986e8222792e47fe95dad0e9b2f1a5a0",
  DOWNLOAD_MODAL: "d-923d2146b7e547f79d5a8ac6dc1e3792//TODO",
  DOWNLOAD_MODAL_ADMIN: "d-9bc9375ef44e475b865c8e8971dbdbdb//TODO",
  ORDER_REJECTED: "d-a630b473fb514df394934ebbaa08b4e6//TODO",
  ORDER_APPROVED: "d-4889eb92422a4cbca846993eec9c0bda//TODO",
  CREATE_ACCOUNT: "d-bd37e0e68ff84728a9b185069eb14ee7//TODO",
  VERIFY_EMAIL: "d-ee23460bb35e4da58a7e0b7f97afa2bd",
  RESPONSE_AFTER_DOWNLOAD_SAMPLE: "d-706abbde61a341558300ef71cdc896e4",
  // CREATE_ACCOUNT_ADMIN: "d-e898ec9624854e029e0883e411e22e40",
};
