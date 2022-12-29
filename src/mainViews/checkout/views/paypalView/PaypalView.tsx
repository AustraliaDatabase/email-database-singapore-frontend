import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { getTermTextCondition } from "../../../../services/internalServices";
import { PAYMENT_METHOD } from "../../../../shared/enums";

import PaypalButton from "../paypalButton/PaypalButton";

interface IPaypalView {
  totalAmount: number;
  editBillingEnable: boolean;
  currentPaymentMethod: PAYMENT_METHOD;
}

const PaypalView = (props: IPaypalView) => {
  const [termCondition, setTermCondition] = useState(false);

  const { totalAmount, editBillingEnable, currentPaymentMethod } = props;

  const onChangeTermCondition = (event: any) => {
    setTermCondition(event.target.checked);
  };

  return (
    <div className="mt-4">
      <Col xs={12}>
        <p className="mb-2">
          <b>What is Paypal</b>
        </p>
        <p>
          A 100% Secure Payment Gateway. PayPal allows payment through credit
          cards, bank accounts, buyer credit, or PayPal account balances.
        </p>
      </Col>
      <Col xs={12}>
        {getTermTextCondition(termCondition, onChangeTermCondition)}
      </Col>
      <Col xs={12} className="pt-3">
        <PaypalButton
          totalAmount={totalAmount}
          termCondition={termCondition}
          editBillingEnable={editBillingEnable}
          currentPaymentMethod={currentPaymentMethod}
        />
      </Col>
    </div>
  );
};

export default PaypalView;
