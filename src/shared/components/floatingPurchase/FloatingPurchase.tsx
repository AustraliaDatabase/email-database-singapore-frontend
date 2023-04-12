import React from "react";
import { Formik, Field, Form } from "formik";
import { ArrowUp, ShoppingCartSimple, UserList } from "phosphor-react";
import { Link } from "react-scroll";

import { BUTTON_SIZE_ENUM, BUTTON_VARIANT_ENUM } from "../../enums";
import Button from "../button/Button";
import styles from "./styles.module.scss";

interface IFloatingPurchase {
  id?: string;
}

const FloatingPurchase = (props: IFloatingPurchase) => {
  const { id } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div>
          <div className={styles.dbTitle}>Complete Database Package</div>
          <div className="d-flex align-items-center justify-content-between">
            <div className={styles.iconText}>
              <UserList size={24} />
              <span>10,355 Direct Email Contacts</span>
            </div>
            <div className={styles.scrollLink}>
              <Link to={id ? id : ""}>
                See Details <ArrowUp size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.selectPackage}>
          <div className={styles.selectTitle}>Select Package</div>
          <Formik
            initialValues={{
              database: "Email Database Package",
            }}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div
                  className={styles.radioGroup}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field
                      type="radio"
                      name="database"
                      value="Email Database Package"
                    />
                    <span>Email Database Package</span>
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="database"
                      value="Complete Database Package"
                    />
                    <span>Complete Database Package</span>
                  </label>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.addToCart}>
          <div className={styles.dbPrice}>$1200</div>
          <Button
            variant={BUTTON_VARIANT_ENUM.Primary}
            size={BUTTON_SIZE_ENUM.Large}
          >
            <ShoppingCartSimple size={24} /> Add To cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingPurchase;
