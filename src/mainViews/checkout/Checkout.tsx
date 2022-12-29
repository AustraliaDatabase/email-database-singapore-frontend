import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CheckCircle, NumberCircleOne, NumberCircleTwo } from "phosphor-react";

import Card from "../../shared/components/card/Card";
import { useRoot } from "../../shared/contexts/RootProvider";
import CartMainView from "../cart/CartMainView";
import PaymentView from "./views/PaymentView";
import styles from "./style.module.scss";
import BillingAddress from "./views/billingAddress/BillingAddress";
import BillingInfo from "./views/billingInfo/BillingInfo";
import instance from "../../services/baseServices";
import { triggerForm } from "../../services/internalServices";

const CheckoutMainView = () => {
  const { loggedInUser, authLoading, setLoggedInUser } = useRoot();
  const [editBillingEnable, setEditBillingEnable] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

  const setUserData = async () => {
    const oldLoggedInUser = { ...loggedInUser };

    setIsLoaded(true)

    try {
      const userData = await instance.post(`/user`);
      setLoggedInUser({ ...oldLoggedInUser, ...userData.data });
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    if (loggedInUser && !isLoaded) {
      setUserData();
    }
  }, [loggedInUser]);

  const getRightElement = () => {
    return (
      <div
        className={styles.editLink}
        onClick={() => {
          setEditBillingEnable(true);
        }}
      >
        Edit
      </div>
    );
  };

  const cancelEdit = () => {
    setEditBillingEnable(false);
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={5}>
          <Card title="Your Order" className={styles.orderCard}>
            <CartMainView />
          </Card>
        </Col>
        <Col md={7}>
          <Card
            title={
              loggedInUser
                ? "Billing Address"
                : "Registration & Billing Address"
            }
            className={styles.billingAddress}
            rightElement={
              !editBillingEnable &&
              loggedInUser &&
              loggedInUser?.country &&
              getRightElement()
            }
            numberIcon={
              loggedInUser?.country && !editBillingEnable ? (
                <CheckCircle size={32} weight="fill" color="#4BB543" />
              ) : (
                <NumberCircleOne size={32} weight="fill" color="#FF4800" />
              )
            }
          >
            {!authLoading ? (
              !loggedInUser?.country || editBillingEnable ? (
                <BillingAddress cancelEdit={cancelEdit} />
              ) : (
                <BillingInfo />
              )
            ) : (
              <> Loading...</>
            )}
          </Card>
          <Card
            title="Choose Your Payment Method"
            numberIcon={
              <NumberCircleTwo size={32} weight="fill" color="#FF4800" />
            }
          >
            <PaymentView editBillingEnable={editBillingEnable} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutMainView;
