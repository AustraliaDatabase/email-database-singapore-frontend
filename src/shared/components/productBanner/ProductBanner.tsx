import React from "react";
import { Container } from "react-bootstrap";

import styles from "./styles.module.scss";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { DATABASE_MAIN_TYPES } from "../../enums";

interface IProductBanner {
  databaseMainType: DATABASE_MAIN_TYPES;
  breadCrumb: string;
}

const ProductBanner = (props: IProductBanner) => {
  const { breadCrumb, databaseMainType } = props;
  console.log(breadCrumb);
  return (
    <div className={styles.bannerWrapper}>
      <Container>
        <div className={styles.breadCrumbWrapper}>
          <BreadCrumb
            databaseMainType={databaseMainType}
            breadCrumb={breadCrumb}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductBanner;
