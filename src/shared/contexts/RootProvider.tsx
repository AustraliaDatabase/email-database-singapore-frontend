import React, { ReactNode, useState, useContext } from "react";
import {
  ICartItem,
  IDownloadInfo,
  IScreenshotInfo,
  IUserPrivateInfo,
} from "../interface";
import RootContext, { RootProviderContext } from "./RootContext";

interface IThemeProviderProps {
  children: ReactNode;
}

const RootProvider: React.FC<IThemeProviderProps> = ({ children }: any) => {
  const [authEnable, setAuthEnable] = useState(false);
  const [cartEnable, setCartEnable] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);
  const [currentCartItem, setCurrentCartItem] = useState<ICartItem[]>([]);
  const [emailVerificationModalVisible, setEmailVerificationModalVisible] =
    useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [downloadLoadModalEnable, setDownloadLoadModalEnable] = useState(false);
  const [screenshotModalEnable, setScreenshotModalEnable] = useState(false);
  const [screenshotInfo, setScreenshotInfo] = useState<IScreenshotInfo | null>(
    null
  );
  const [downloadInfo, setDownloadInfo] = useState<IDownloadInfo | null>(null);
  const [userPrivateInfo, setUserPrivateInfo] =
    useState<IUserPrivateInfo | null>(null);
  const [forgetPasswordModalVisible, setForgetPasswordModalVisible] =
    useState(false);
  const [cryptoModalVisible, setCryptoModalVisible] = useState(false);
  const [allSearchList, setAllSearchList] = useState([]);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [coinPaymentInfo, setCoinPaymentInfo] = useState(null);
  const [cryptoInfoModalEnable, setCryptoInfoModalEnable] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <RootProviderContext
      value={{
        authEnable,
        setAuthEnable,
        cartEnable,
        setCartEnable,
        loginVisible,
        setLoginVisible,
        currentCartItem,
        setCurrentCartItem,
        emailVerificationModalVisible,
        setEmailVerificationModalVisible,
        loggedInUser,
        setLoggedInUser,
        authLoading,
        setAuthLoading,
        downloadLoadModalEnable,
        setDownloadLoadModalEnable,
        screenshotModalEnable,
        setScreenshotModalEnable,
        screenshotInfo,
        setScreenshotInfo,
        downloadInfo,
        setDownloadInfo,
        userPrivateInfo,
        setUserPrivateInfo,
        forgetPasswordModalVisible,
        setForgetPasswordModalVisible,
        cryptoModalVisible,
        setCryptoModalVisible,
        allSearchList,
        setAllSearchList,
        totalCartAmount,
        setTotalCartAmount,
        promoCodeApplied,
        setPromoCodeApplied,
        promoCode,
        setPromoCode,
        coinPaymentInfo,
        setCoinPaymentInfo,
        cryptoInfoModalEnable,
        setCryptoInfoModalEnable,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </RootProviderContext>
  );
};

export default RootProvider;

export const useRoot = () => useContext(RootContext);
