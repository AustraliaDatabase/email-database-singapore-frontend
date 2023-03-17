import {
  CircleWavyQuestion,
  Gift,
  ListDashes,
  MapPinLine,
  ShieldStar,
  ShoppingCartSimple,
  TreeStructure,
} from "phosphor-react";
import { DATABASE_MAIN_TYPES } from "./enums";

export const HEADER_COLUMNS_COMPLETE_DATABASE = [
  "Contact Names",
  "Unique Direct B2B Emails",
  "Unique Companies",
  "Unique Phones",
  "Unique Fax Numbers",
  "Unique Cells",
  "Unique Addresses",
  "No of Industries",
  "Email Datbase Price",
  "Full Database Price",
];

export const HEADER_COLUMNS_REALTORS = [
  "Number of Realtors",
  "Direct Email Address",
  "Office Address",
  "Office Phone Numbers",
  "Office Fax Numbers",
  "Cell Phone",
  "License Type",
  "Email Database Price",
  "Complete Database Price",
];

export const HEADER_COLUMNS_USA_JOB_TITLES_DATABASE = [
  "# of Records",
  "Email List Price Price",
  "Database Price",
];

export const HEADER_COLUMNS_USA_INDUSTRY_DATABASE = [
  "# of Records",
  "Database Price",
];

export const HEADER_COLUMNS_USA_OTHER_COUNTRIES_DATABASE = [
  "# of Records",
  "Database Price",
];

export const HEADER_COLUMNS_USA_CONSUMER_DATABASE = [
  "# of Records",
  "Database Price",
];

export const FLOATING_MENU_LIST_OF_US_COMPANIES = [
  {
    link: "#buy-now",
    label: "Buy Now",
    icon: <ShoppingCartSimple size={24} />,
  },
  { link: "#free-sample", label: "Free Sample", icon: <Gift size={24} /> },
  {
    link: "#why-us",
    label: "Why Us?",
    icon: <CircleWavyQuestion size={24} />,
  },
  {
    link: "#source",
    label: "Source",
    icon: <TreeStructure size={24} />,
  },
  { link: "#faq", label: "F.A.Qs", icon: <ListDashes size={24} /> },
  { link: "#reviews", label: "Reviews", icon: <ShieldStar size={24} /> },
];

export const FLOATING_MENU = [
  {
    link: "#buy-now",
    label: "Buy Now",
    icon: <ShoppingCartSimple size={24} />,
  },
  { link: "#free-sample", label: "Free Sample", icon: <Gift size={24} /> },
  {
    link: "#why-us",
    label: "Why Us?",
    icon: <CircleWavyQuestion size={24} />,
  },
  {
    link: "#other-states",
    label: "Other States",
    icon: <MapPinLine size={24} />,
  },
  {
    link: "#source",
    label: "Source",
    icon: <TreeStructure size={24} />,
  },
  { link: "#faq", label: "F.A.Qs", icon: <ListDashes size={24} /> },
  { link: "#reviews", label: "Reviews", icon: <ShieldStar size={24} /> },
];

export const FLOATING_MENU_OLD = [
  {
    link: "#why-us",
    label: "Why Us?",
    icon: <CircleWavyQuestion size={24} />,
  },
  { link: "#faq", label: "F.A.Qs", icon: <ListDashes size={24} /> },
  { link: "#reviews", label: "Reviews", icon: <ShieldStar size={24} /> },
];

export const LAST_UPDATE_DATE_WITHOUT_TEXT = "November 11,2022";
export const LAST_UPDATE_DATE = `Last Update Date - ${LAST_UPDATE_DATE_WITHOUT_TEXT}`;
export const RELEASED_DATE = "2022-11-11";

export const ADMIN_EMAILS = ["support@uscompanydata.com"];

export const ADMIN_EMAIL = "support@uscompanydata.com";

export const USDC_NETWORK = [
  { value: "BSC", description: "BNB Smart Chain (BEP20)" },
  { value: "ETH", description: "Ethereum (ERC20)" },
  { value: "MATIC", description: "Polygon" },
  { value: "TRX", description: "Tron(TRC20)" },
];

export const USDT_NETWORK = [
  { value: "BSC", description: "BNB Smart Chain (BEP20)" },
  { value: "ETH", description: "Ethereum (ERC20)" },
  { value: "MATIC", description: "Polygon" },
  { value: "TRX", description: "Tron(TRC20)" },
];

export const BITCOIN_NETWORK = [
  { value: "BSC", description: "BNB Smart Chain (BEP20)" },
  { value: "BTC", description: "Bitcoin" },
  { value: "ETH", description: "Ethereum (ERC20)" },
];

export const REVIEW_DROP_LINK = "https://reviewdrop.io/review/joz-data";

export const CATEGORIES_TO_URLS = {
  [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "email",
  [DATABASE_MAIN_TYPES.REALTOR]: "realtor",
  [DATABASE_MAIN_TYPES.CONSUMER]: "consumer",
  [DATABASE_MAIN_TYPES.COUNTRY]: "country",
  [DATABASE_MAIN_TYPES.JOB_TITLE]: "job-title",
  [DATABASE_MAIN_TYPES.INDUSTRY]: "industry",
  [DATABASE_MAIN_TYPES.OTHERS]: "others",
  [DATABASE_MAIN_TYPES.TARGET]: "target",
};

export const DATA_TYPE_TO_BREADCRUMB_URL = {
  [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "us-company-database-by-state",
  [DATABASE_MAIN_TYPES.REALTOR]: "realtors-by-state",
  [DATABASE_MAIN_TYPES.JOB_TITLE]: "usa-job-titles",
  [DATABASE_MAIN_TYPES.CONSUMER]: "",
  [DATABASE_MAIN_TYPES.COUNTRY]: "",
  [DATABASE_MAIN_TYPES.INDUSTRY]: "special-databases",
  [DATABASE_MAIN_TYPES.OTHERS]: "others",
  [DATABASE_MAIN_TYPES.TARGET]: "target",
  [DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD]: "us-company-database-by-state",
  [DATABASE_MAIN_TYPES.REALTOR_OLD]: "realtors-by-state",
};

export const DATA_TYPE_TO_BREADCRUMB_NAME = {
  [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "US Email List by States",
  [DATABASE_MAIN_TYPES.REALTOR]: "Realtors by US States",
  [DATABASE_MAIN_TYPES.JOB_TITLE]: "All USA Job Titles",
  [DATABASE_MAIN_TYPES.CONSUMER]: "",
  [DATABASE_MAIN_TYPES.COUNTRY]: "",
  [DATABASE_MAIN_TYPES.INDUSTRY]: "All Industry Databases",
  [DATABASE_MAIN_TYPES.OTHERS]: "Others",
  [DATABASE_MAIN_TYPES.TARGET]: "All Targetted Email Lists",
  [DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD]: "All US Email List by States",
  [DATABASE_MAIN_TYPES.REALTOR_OLD]: "All Realtors By States",
};

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

const JOB_LIST = [
  { name: "CEO", url: "/ceo" },
  { name: "CFO", url: "/cfo" },
  { name: "Accounts Payable", url: "/Accounts-Payable" },
  { name: "Accounts Receivable", url: "/accounts-receivable" },
];

const INDUSTRY_LIST = [
  { name: "Architects", url: "/architects" },
];

const BY_STATES = [
  { name: "California", url: "/california" },
  { name: "Florida", url: "/florida" },
  { name: "New York", url: "/new-york" },
  { name: "Texas", url: "/texas" },
];

const INTERNATIONAL_LIST = [
  { name: "Canada", url: "/canada" },
  { name: "UAE", url: "/uae" },
  { name: "Europe", url: "/europe" },
];

export const FOOTER_MENUS = {
  BY_STATES,
  JOB_LIST,
  INDUSTRY_LIST,
  INTERNATIONAL_LIST,
}