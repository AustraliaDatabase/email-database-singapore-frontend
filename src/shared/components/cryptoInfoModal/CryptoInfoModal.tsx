import dayjs from "dayjs";
import { ArrowsClockwise } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import instance from "../../../services/baseServices";
import { useRoot } from "../../contexts/RootProvider";
import UCDModal from "../UCDModal/UCDModal";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

const CryptoInfoModal = () => {
  const { cryptoInfoModalEnable, setCryptoInfoModalEnable, coinPaymentInfo } =
    useRoot();

  const [transactionInfo, setTransactionInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const pressClose = () => {
    setCryptoInfoModalEnable(false);
  };

  const getPaymentInfo = async () => {
    setLoading(true);
    try {
      const response = await instance.post("coinPaymentBasicInfo", {
        tx: coinPaymentInfo?.txn_id,
      });

      setTransactionInfo(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPaymentInfo();
  }, [coinPaymentInfo]);

  const pressRefresh = () => {
    getPaymentInfo();
  }

  const transactionStatusText: any = {
    0: <Badge bg="warning">Pending</Badge>,
    1: <Badge bg="success">Success</Badge>,
    2: <Badge bg="danger">Cancelled</Badge>,
    100: <Badge bg="success">Transaction Completed</Badge>,
  };

  const renderInfo = (
    <>
      <div className="mb-3 text-highlight" style={{ cursor: "pointer" }} onClick={pressRefresh}>
        <span>
          Refresh <ArrowsClockwise size={20} />{" "}
        </span>
      </div>
      <Row>
        <Col>Created Time</Col>
        <Col>
          {/* @ts-ignore */}
          <b>{dayjs.unix?.(transactionInfo?.time_created)?.fromNow?.()}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Expire Time</Col>
        <Col>
          {/* @ts-ignore */}
          <b>{dayjs.unix?.(transactionInfo?.time_expires)?.fromNow?.()}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Status</Col>
        <Col>
          <b>{transactionStatusText[transactionInfo?.status]}</b>
          <br />
          <b>({transactionInfo?.status_text})</b>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>Fiat / Coins</Col>
        <Col>
          <b>{transactionInfo?.type}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Coin</Col>
        <Col>
          <b>{transactionInfo?.coin}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Amount to send </Col>
        <Col>
          <b>{transactionInfo?.amountf}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Received amount</Col>
        <Col>
          <b>{transactionInfo?.receivedf}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Received confirms</Col>
        <Col>
          <b>{transactionInfo?.recv_confirms}</b>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>Address to send the fund to</Col>
        <Col>
          <b>{transactionInfo?.payment_address}</b>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>Checkout URL</Col>
        <Col>
          <a
            href={coinPaymentInfo?.checkout_url}
            rel="noreferrer"
            target="_blank"
          >
            <b>View URL</b>
          </a>
        </Col>
      </Row>
    </>
  );

  return (
    <UCDModal
      bodyClassName="px-4 pb-4"
      onHide={pressClose}
      title={
        <Row>
          <div className="text-highlight">Transaction Info</div>
        </Row>
      }
      size="lg"
      open={cryptoInfoModalEnable}
    >
      {loading ? <div>Loading...</div> : renderInfo}
    </UCDModal>
  );
};

export default CryptoInfoModal;
