import React from "react";
import { Col } from "react-bootstrap";

interface ICryptoSelection {
  onSelectedCoin: Function,
  coin: string,
  selectedCoin: string,
  uniqueValue: string,
  name: string,
}

const CryptoSelection = (props: ICryptoSelection) => {
  const { onSelectedCoin, coin, selectedCoin, uniqueValue, name } = props;

  return (
    <Col xs={12} md={12} className="pt-2">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault-new"
          checked={selectedCoin === coin}
          id={uniqueValue}
          onClick={() => {
            onSelectedCoin(coin);
          }}
        />
        <label htmlFor={uniqueValue}>
          <div>{name}</div>
          <div style={{color: '#A9AAAC'}}>{coin}</div>
        </label>
      </div>
    </Col>
  );
};

export default CryptoSelection;
