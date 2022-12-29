import React, { ReactNode, useEffect, useState } from "react";
import PromoCodeBar from "../../menus/promoCodeBar/PromoCodeBar";

import PublicFooterMenu from "../../menus/publicFooterMenu/PublicFooterMenu";
import PublicHeaderMenu from "../../menus/publicHeaderMenu/PublicHeaderMenu";
import instance from "../../services/baseServices";
import {
  getPromoBarStorage,
  updatePromoBarStorage,
} from "../../services/helpers/tokenService";
import { IPromoItem } from "../../shared/interface";
import styles from "./publicLayout.module.scss";

interface IPublicLayout {
  children: ReactNode;
}

const PublicLayout = (props: IPublicLayout) => {
  const { children } = props;

  const [promoCodeBannerVisible, setPromoCodeBannerVisible] = useState(true);

  const getBannerPromoCodes = () => {};

  const [promoCodeItem, setPromoCodeItem] = useState<IPromoItem | null>(null);

  const getPromoCodeBarItem = async () => {
    try {
      const response = await instance.get(`/latest-promo-code`);
      const storageCode = getPromoBarStorage(response?.data?.code);

      if (storageCode === response?.data?.code) {
        setPromoCodeItem(null)
      } else {
        setPromoCodeItem(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getPromoCodeBarItem();
  }, []);

  const promoClose = () => {
    setPromoCodeBannerVisible(false);
    updatePromoBarStorage(promoCodeItem?.code || "");
    setPromoCodeItem(null)
  };

  return (
    <>
      {promoCodeItem?.code && (
        <PromoCodeBar close={promoClose} promoCodeItem={promoCodeItem} />
      )}
      <div className={styles.wrapper}>
        <PublicHeaderMenu />
        {children}
        <PublicFooterMenu />
      </div>
    </>
  );
};

export default PublicLayout;
