import React, { ReactNode } from "react";
import { useEffect } from "react";
// @ts-ignore:
import TawkTo from "tawkto-react";

// import { UserService } from "../../database/DatabaseService";
// import { auth } from "../../database/firebase";
import { useRoot } from "../../shared/contexts/RootProvider";
import {
  getAddToCartLocal,
  getUser,
} from "../../services/helpers/tokenService";
// import { onAuthStateChanged } from "firebase/auth";
import dynamic from "next/dynamic";
import { ICartItem } from "../../shared/interface";
import CryptoInfoModal from "../../shared/components/cryptoInfoModal/CryptoInfoModal";
// import instance from "../../services/baseServices";

const AuthModal = dynamic(
  () => import("../../shared/components/authModal/AuthModal")
);
const CartModal = dynamic(
  () => import("../../shared/components/cartModal/CartModal")
);
// const EmailVerificationModal = dynamic(
//   () =>
//     import("../../shared/components/emailVerificationModal/EmailVerificationModal")
// );
const DownloadModal = dynamic(
  () => import("../../shared/components/downloadLModal/DownloadModal")
);
const ScreenshotModal = dynamic(
  () => import("../../shared/components/screenshotModal/ScreenshotModal")
);
const ForgotPasswordModal = dynamic(
  () =>
    import("../../shared/components/forgotPasswordModal/ForgotPasswordModal")
);

interface ICommmonLayout {
  children: ReactNode;
}

export const NEXT_PUBLIC_TAWKTO_PROPERTY =
  process.env.NEXT_PUBLIC_TAWKTO_PROPERTY;
export const NEXT_PUBLIC_TAWKTO_ID = process.env.NEXT_PUBLIC_TAWKTO_ID;

const CommmonLayout = (props: ICommmonLayout) => {
  const {
    setLoggedInUser,
    setAuthLoading,
    currentCartItem,
    setCurrentCartItem,
    loggedInUser,
    setTotalCartAmount,
    setPromoCode,
    setPromoCodeApplied,
  } = useRoot();

  useEffect(() => {
    if (currentCartItem?.length) {
      setCurrentCartItem(currentCartItem);
    } else {
      setCurrentCartItem(getAddToCartLocal() || []);
    }
  }, []);

  useEffect(() => {
    new TawkTo(NEXT_PUBLIC_TAWKTO_PROPERTY, NEXT_PUBLIC_TAWKTO_ID);
  }, []);

  useEffect(() => {
    if (currentCartItem?.length) {
      let totalPrice = 0;
      currentCartItem?.map((element: ICartItem) => {
        totalPrice += element.price;
      });

      setTotalCartAmount(totalPrice);
    } else {
      setTotalCartAmount(0);
    }

    setPromoCodeApplied(false)
    setPromoCode("")
  }, [currentCartItem?.length]);

  const setupLocalUser = async () => {
    const user = await getUser();

    setLoggedInUser(user);
    setAuthLoading(false);
  };

  useEffect(() => {
    if (!loggedInUser) {
      setupLocalUser();
    }
  }, []);

  const { children } = props;
  return (
    <>
      {children}
      <AuthModal />
      <CartModal />
      <DownloadModal />
      <ForgotPasswordModal />
      <CryptoInfoModal />
      <ScreenshotModal />
    </>
  );
};

export default CommmonLayout;
