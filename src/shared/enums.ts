export enum BUTTON_SIZE_ENUM {
  Small = "small",
  Large = "large",
  Default = "default",
}

export enum FEATURE_CARD_TYPE {
  Info = "info",
  Action = "action",
}

export enum FEATURE_CARD_VARIANT {
  Dark = "dark",
  Light = "light",
}

export enum BUTTON_VARIANT_ENUM {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Text = "text",
}

export enum DATABASE_MAIN_TYPES {
  COMPANY_DATABASE = "COMPANY_DATABASE",
  REALTOR = "REALTOR",
  JOB_TITLE = "JOB_TITLE",
  INDUSTRY = "INDUSTRY",
  COUNTRY = "COUNTRY",
  CONSUMER = "CONSUMER",
  OTHERS = "OTHERS",
  TARGET = "TARGET",
  COMPANY_DATABASE_OLD = "COMPANY_DATABASE_OLD",
  REALTOR_OLD = "REALTOR_OLD",
}

export enum PAYMENT_STATUS {
  INITIALIZED = "Initialized",
  REQUESTED = "Requested",
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
}

export enum PAYMENT_METHOD {
  PAYPAL = "Paypal",
  CRYPTO = "Crypto",
  CRYPTO_PLISIO = "Crypto payment using CoinPayments",
  CRYPTO_PLISIO_INITIALIZED = "Crypto payment using CoinPayments - initialized",
}

export enum PAYMENT_CRYPTO_COIN {
  USDT = "USDT",
  USDC = "USDC",
  BITCOIN = "BITCOIN",
}

export enum STATUS {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

export enum PRODUCT_MAIN_TYPE_ENUM {
  BY_B2B_EMAILS = "BY_B2B_EMAILS",
  BY_REALTORS = "BY_REALTORS",
  BY_PROFESSION = "BY_PROFESSION",
}

export enum EMAIL_VERIFICATION_TYPE {
  EMAIL_MARKETTING_FREE_SAMPLE = "email_marketting_free_sample",
  FREE_SAMPLE_ON_EVERY_PRODUCT = "free_sample_on_every_product",
}

export enum MAIN_DATABASE_CATEGORIES {
  EMAIL_DATABASE = "EMAIL_DATABASE",
  COMPLETE_DATABASE = "COMPLETE_DATABASE",
}

export enum JOB_TITLE_TYPES {
  DIRECTOR_LEVEL_AND_FINANCE = "Director Level & Finance",
  MANAGER_LEVEL_AND_FINANCE = "Manager Level & Finance",
  FINANCE = "Finance",
  C_LEVEL = "C-Level",
  DIRECTOR_LEVEL = "Director Level",
  MANAGER_LEVEL = "Manager Level",
  OTHER = "Other",
  VICE_PRESIDENT = "Vice President",
  C_LEVEL_AND_FINANCE = "C-Level & Finance",
  C_LEVEL_AND_IT = "C-Level & IT",
  MEDICAL = "Medical",
  DIRECTOR_LEVEL_AND_IT = "Director Level & IT",
  C_LEVEL_AND_DIRECTOR_LEVEL_AND_MANAGER_LEVEL = "C-Level & Director Level & Manager Level",
  IT = "IT",
  MANAGER_LEVEL_AND_IT = "Manager Level & IT",
  VICE_PRESIDENT_AND_FINANCE = "Vice President & Finance",
  VICE_PRESIDENT_AND_IT = "Vice President & IT",
}

export enum COUNTRY_TYPES {
  SOUTH_AMERICA = "South America",
  EUROPE = "Europe",
  AUSTRALIA_AND_NEW_ZEALAND = "Australia & New Zealand",
  MIDDLE_EAST = "Middle East",
  AFRICA = "Africa",
  NORTH_AMERICA = "North America",
  ASIA = "Asia"
}