import {
  CaretDown,
  CloudArrowDown,
  Desktop,
  ListPlus,
  SignOut,
  User,
} from "phosphor-react";
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
  const [logoutVisible, setLogoutVisible] = useState(false);
  const { loggedInUser, setLoggedInUser } = useRoot();
  const pressLogout = () => {
    setUser(null);
    // signOut(auth)
    setLoggedInUser(null);
  };

  const pressMyAccount = () => {
    setLogoutVisible(!logoutVisible);
  };

  // my account links icon size
  const iconSize = 20;

  return (
    <div className={styles.myAccountWrapper} onClick={pressMyAccount}>
      <div className={styles.picture}>
        <Image
          src="/profile_dummy.jpg"
          width={45}
          layout="responsive"
          height={50}
          alt="Profile picture"
        />
      </div>
      <div className="d-flex align-items-center">
        <span
          className={classNames(
            "d-md-inline-block d-none pe-1",
            styles.username
          )}
        >
          {loggedInUser?.displayName ||
            loggedInUser?.email
              ?.replace(process.env.SITE_PRE_FIX?.toLowerCase(), "")
              ?.split("@")[0]}
        </span>
        <CaretDown
          className={classNames({ [styles.iconActive]: logoutVisible })}
          size={20}
        />
      </div>

      {logoutVisible && (
        <div className={styles.wrapper}>
          <div className={styles.listItem} onClick={pressLogout}>
            <SignOut size={iconSize} />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccountLink;
