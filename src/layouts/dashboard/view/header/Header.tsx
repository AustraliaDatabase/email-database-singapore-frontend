import classNames from "classnames";
import { CaretDown, ShoppingCartSimple, SignOut } from "phosphor-react";
import React, { ReactNode, useEffect, useState } from "react";
import { setUser } from "../../../../services/helpers/tokenService";
import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import styles from "./styles.module.scss";

interface IHeader {
  breadCrumb: ReactNode;
}

const Header = (props: IHeader) => {
  const { breadCrumb } = props;
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  const [islogedin, setIslogedin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const {
    setAuthEnable,
    setCartEnable,
    loggedInUser,
    setLoggedInUser,
    currentCartItem,
  } = useRoot();

  useEffect(() => {
    setTotalCartItemCount(currentCartItem?.length);
  }, [currentCartItem]);

  useEffect(() => {
    if (loggedInUser?.email) {
      setIslogedin(true);
    } else {
      setIslogedin(false);
    }
  }, [loggedInUser?.email]);

  const pressLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    setIslogedin(false);
  };

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
        {islogedin ? (
          <div className={styles.userWrappre}>
            <div className={styles.user}>
              <Button
                variant="tertiary"
                onClick={() => {
                  setShowLogout(!showLogout);
                }}
              >
                Hello,{" "}
                {loggedInUser?.displayName ||
                  loggedInUser?.email?.split("@")[0]}
                <CaretDown
                  className={classNames({ [styles.active]: showLogout })}
                  size={20}
                />
              </Button>
            </div>
            <div
              className={classNames(styles.logout, {
                [styles.active]: showLogout,
              })}
              onClick={pressLogout}
            >
              logout <SignOut size={16} />
            </div>
          </div>
        ) : (
          <Button
            onClick={() => {
              setAuthEnable(true);
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
