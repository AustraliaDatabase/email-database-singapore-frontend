import { ReactNode } from "react";
import { DATABASE_MAIN_TYPES } from "./enums";

export interface ICartItem {
  id: string;
  productName: string;
  contacts: number;
  price: number;
  isCompleteDatabase?: boolean;
}

export interface ISeedObject {
  url: string;
  state: string;
  directContacts: number;
  uniqueCompanies?: number;
  uniqueTelephoneNumbers?: number;
  uniqueFaxNumbers?: number;
  uniqueMailAddress?: number;
  facebookAccounts?: number;
  twitterAccounts?: number;
  price: number;
  tollFreeNumbers?: number;
  uniqueWebsites?: number;
  uniqueJobTitles?: number;
  numberOfSic2?: number;
  emailDatabasePrice?: number;
  directEmailAddresses?: number;
  officeAddresses?: number;
  officePhoneNumbers?: number;
  officeFaxNumbers?: number;
  cellPhones?: number;
  licenseType?: number;
  completeDatabasePrice?: number;
  breadCrumb: string;
  sampleFileName?: string;
  name: string;
}

export interface IJobTitleObject {
  url: string;
  mainTitle: string;
  jobTitles: string;
  bannerDescription: string;
  listFormat: string;
  completeListAttributes: string;
  emailListPrice: number;
  databasePrice: number;
  databaseFields: string;
  lastUpdateDate: number;
  emailListAttributes: string;
  recordCount: number;
}

export interface IJobIndustryObject {
  url: string;
  mainTitle: string;
  jobTitles: string;
  bannerDescription: string;
  listFormat: string;
  completeListAttributes: string;
  databasePrice: number;
  databaseFields: string;
  lastUpdateDate: number;
  emailListAttributes?: string;
  emailListPrice?: string | number;
  recordCount: number;
}

export interface IOtherCountryObject {
  url: string;
  mainTitle: string;
  jobTitles: string;
  bannerDescription: string;
  listFormat: string;
  completeListAttributes: string;
  databasePrice: number;
  databaseFields: string;
  recordCounts: string;
  lastUpdateDate: number;
  emailListAttributes?: string;
  emailListPrice?: string | number;
}

export interface IConsumerObject {
  url: string;
  mainTitle: string;
  bannerDescription: string;
  jobTitles: string;
  completeListAttributes: string;
  databasePrice: number;
  recordCounts: number;
  lastUpdateDate: number;
  listFormat?: string;
  emailListPrice?: number;
  emailListAttributes?: string;
}

export interface IContactStructure {
  title: string;
  id: string;
}

export interface IPriceItem {
  title: string;
  amount: number;
  caption: string;
  includes: string;
  asTag?: any;
}

export interface ICollapsibleList {
  title: string;
  element: ReactNode;
}

export interface IBottom_cards {
  icon: ReactNode;
  title: string;
  element: ReactNode;
}

export interface IScreenshotInfo {
  title: ReactNode;
  attachmentUrl?: string;
}

export interface IDownloadInfo {
  title: ReactNode;
  description: ReactNode;
  attachmentUrl: string;
  links: {
    link: string;
    name: string;
  }[];
}

export interface IUserPrivateInfo {
  country_code: string;
  country_name: string;
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export interface IBlogItem {
  duration: number;
  blogTitle: string;
  date: number;
  blogCategory: string;
  uniqueName: string;
  blogAuthor: string;
  content: string;
  blogImage: string;
}

export interface IBlogComment {
  id: string;
  date: number;
  email: string;
  comment: string;
  name: string;
}

export interface IStats {
  firstName?: number;
  emailAddress?: number;
  cellNumbers?: number;
  linkedinProfile: number;
  company: number;
  website: number;
  phoneNumber: number;
  faxNumber: number;
  address: number;
}

export interface IMeta {
  metaTitle: string;
  metaDescription: string;
}

export interface IBanner {
  title: string;
  plainTitle: string;
  description: string;
}

export interface IWhyList {
  title: string;
  description: string;
  contentTitle?: string;
  content?: string;
}

export interface IWhy {
  title: string;
  description: string;
  list: IWhyList[];
}

export interface IDataFields {
  title: string;
  description: string;
  fields: string;
}

export interface IScreenshot {
  title: string;
  description: string;
  note: string;
  sampleFileName: string;
}

export interface IPriceList {
  price: number;
  title: string;
  description: string;
  caption: string;
  includes: string;
  asTag: string;
}

export interface IPrice {
  title: string;
  description: string;
  list: IPriceList[];
}

export interface IBeneifitList {
  title: string;
  description: string;
}

export interface IBeneifits {
  title: string;
  description: string;
  list: IBeneifitList[];
}

export interface IOtherStateList {
  url: string;
  name: string;
}

export interface IOtherStates {
  title: string;
  description: string;
  list: IOtherStateList[];
}

export interface ISource {
  title: string;
  description: string;
}

export interface IAllList {
  id: string;
  name: string;
  url: string;
}

export interface IReview {
  title: string;
}

export interface IFAQs {
  title: string;
}
export interface IMainProductInfo {
  name: string;
  url: string;
  breadCrumb: string;
  stats?: IStats;
  meta: IMeta;
  banner: IBanner;
  why: IWhy;
  dataFields: IDataFields;
  screenshot: IScreenshot;
  price: IPrice;
  beneifits: IBeneifits;
  otherStates: IOtherStates;
  sources: ISource;
  faq: IFAQs;
  allList: IAllList[];
  review: IReview;
  type: DATABASE_MAIN_TYPES;
  productInfo: {
    description: string;
    list: IProductListItem[];
    title: string;
  };
}

export interface IProductListItem {
  description: string;
  title: string;
}

export interface IPromoItem {
  id: string;
  endDate: number;
  code: string;
  startDate: number;
  name: string;
  percentage: number;
}

export interface IReviewItem {
  author: string;
  name: string;
  reviewBody: string;
  ratingValue: number;
  enable: boolean;
}

export interface IReviewObject {
  id: string;
  product?: {
    fileUrl: string;
  };
  reviews?: IReviewItem[];
}

export interface IFreeSampleItem {
  expireDate: number;
  downloadUrl: string;
  fileName: string;
  category: string;
  totalEmails: number;
  expiredate: number;
  emailContacts: string;
  name?: string;
}
export interface IFreeSampleItemObject {
  id: string;
  email: string;
  items: IFreeSampleItem[];
  category: string;
}

export interface ISelectObject {
  label: string;
  value: string;
  assignedUrl: string;
}

export interface IPackages {
  [key: number]: string;
}
