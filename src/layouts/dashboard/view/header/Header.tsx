import { ShoppingCartSimple } from "phosphor-react";
import React, { ReactNode, useEffect, useState } from "react";
import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import styles from "./styles.module.scss";

interface IHeader {
  breadCrumb: ReactNode;
}

const Header = (props: IHeader) => {
  const { breadCrumb } = props;
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  const {
    setAuthEnable,
    setCartEnable,
    loggedInUser,
    setLoggedInUser,
    currentCartItem,
    authLoading,
    setAuthLoading,
  } = useRoot();

  useEffect(() => {
    setTotalCartItemCount(currentCartItem.length);
  }, [currentCartItem]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadCrumb}>{breadCrumb}</div>
      <div className={styles.headerRight}>
        <Button className={styles.cartButton}>
          <span className={styles.cartItemCount}>{totalCartItemCount}</span>
          <ShoppingCartSimple
            size={25}
            onClick={() => {
              setCartEnable(true);
            }}
          />
        </Button>
        <Button
          onClick={() => {
            setAuthEnable(true);
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
