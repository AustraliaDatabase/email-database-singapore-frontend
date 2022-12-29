import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import { getPlisioLocal } from "../../services/helpers/tokenService";
import { useRoot } from "../../shared/contexts/RootProvider";
import { PAYMENT_METHOD } from "../../shared/enums";
import { makeOrderAction } from "../../shared/InternalService";

const RedirectCrypto = () => {
  const router = useRouter();
  const { setCurrentCartItem, setCryptoModalVisible, promoCode } = useRoot();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      const plisioList = getPlisioLocal();

      makeOrderAction(
        plisioList?.currentCartItem,
        plisioList?.totalAmount,
        null,
        plisioList.loggedInUser,
        "",
        "",
        setCurrentCartItem,
        router,
        setCryptoModalVisible,
        () => {},
        PAYMENT_METHOD.CRYPTO_PLISIO,
        plisioList?.orderId,
        promoCode
      );

      setMount(true);
    }
  }, []);

  return (
    <PublicLayout>
      <div
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 400 }}
      >
        <h2 className="text-align-center">Redirecting...</h2>
      </div>
    </PublicLayout>
  );
};

export default RedirectCrypto;
