import { SetStateAction, Dispatch, createContext } from "react";
import {
  ICartItem,
  IDownloadInfo,
  IScreenshotInfo,
  IUserPrivateInfo,
} from "../interface";

export type RootType = {
  authEnable: boolean;
  setAuthEnable: Dispatch<SetStateAction<boolean>>;
  cartEnable: boolean;
  setCartEnable: Dispatch<SetStateAction<boolean>>;
  loginVisible: boolean;
  setLoginVisible: Dispatch<SetStateAction<boolean>>;
  currentCartItem: ICartItem[];
  setCurrentCartItem: Dispatch<SetStateAction<ICartItem[]>>;
  emailVerificationModalVisible: boolean;
  setEmailVerificationModalVisible: Dispatch<SetStateAction<boolean>>;
  loggedInUser: any;
  setLoggedInUser: Dispatch<SetStateAction<any>>;
  authLoading: boolean;
  setAuthLoading: Dispatch<SetStateAction<boolean>>;
  downloadLoadModalEnable: boolean;
  setDownloadLoadModalEnable: Dispatch<SetStateAction<boolean>>;
  screenshotModalEnable: boolean;
  setScreenshotModalEnable: Dispatch<SetStateAction<boolean>>;
  screenshotInfo: IScreenshotInfo | null;
  setScreenshotInfo: Dispatch<SetStateAction<IScreenshotInfo | null>>;
  downloadInfo: IDownloadInfo | null;
  setDownloadInfo: Dispatch<SetStateAction<IDownloadInfo | null>>;
  userPrivateInfo: IUserPrivateInfo | null;
  setUserPrivateInfo: Dispatch<SetStateAction<IUserPrivateInfo | null>>;
  forgetPasswordModalVisible: boolean;
  setForgetPasswordModalVisible: Dispatch<SetStateAction<boolean>>;
  cryptoModalVisible: boolean;
  setCryptoModalVisible: Dispatch<SetStateAction<boolean>>;
  allSearchList: any;
  setAllSearchList: Dispatch<SetStateAction<any>>;
  totalCartAmount: number;
  setTotalCartAmount: Dispatch<SetStateAction<any>>;
  promoCodeApplied: boolean;
  setPromoCodeApplied: Dispatch<SetStateAction<boolean>>;
  promoCode: string;
  setPromoCode: Dispatch<SetStateAction<string>>;
  coinPaymentInfo: any;
  setCoinPaymentInfo: Dispatch<SetStateAction<any>>;
  setCryptoInfoModalEnable: Dispatch<SetStateAction<boolean>>;
  cryptoInfoModalEnable: boolean;
};

// @ts-ignore
const RootContext = createContext<RootType>(null);
export const RootProviderContext = RootContext.Provider;
export default RootContext;
