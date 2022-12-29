import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { signOut } from "firebase/auth";

import styles from "./myAccountLink.module.scss";
import { setUser } from "../../../../services/helpers/tokenService";
import { useRoot } from "../../../../shared/contexts/RootProvider";
// import { auth } from "../../../../database/firebase";
import classNames from "classnames";

const MyAccountLink = () => {
  const { loggedInUser, setLoggedInUser } = useRoot();
  const [logoutVisible, setLogoutVisible] = useState(false);

  const pressAccount = () => {
    setLogoutVisible(!logoutVisible);
  };

  const pressLogout = () => {
    setUser(null);
    // signOut(auth)
    setLoggedInUser(null);
  };

  return (
    <>
      <div className={styles.picture}>
        <Image
          src="/profile_dummy.jpg"
          width={45}
          layout="responsive"
          height={50}
          alt="Profile picture"
        />
      </div>
      <div className="d-flex align-items-center" onClick={pressAccount}>
        <span
          className={classNames(
            "d-md-inline-block d-none pe-1",
            styles.username
          )}
        >
          {loggedInUser?.displayName || loggedInUser?.email?.split("@")[0]}
        </span>
        <CaretDown size={20} />
      </div>

      {logoutVisible && (
        <div className={styles.wrapper}>
          <Link passHref={true} href="/dashboard">
            <div className={styles.listItem}>Dashboard</div>
          </Link>
          <Link passHref={true} href="/orders">
            <div className={styles.listItem}>My Orders</div>
          </Link>
          <Link passHref={true} href="/downloads">
            <div className={styles.listItem}>Downloads</div>
          </Link>
          <Link passHref={true} href="/my-account">
            <div className={styles.listItem}>Account</div>
          </Link>
          <div className={styles.listItem} onClick={pressLogout}>
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccountLink;
