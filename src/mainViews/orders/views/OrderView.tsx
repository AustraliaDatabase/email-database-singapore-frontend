/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";

// import { PaymentService } from "../../../database/DatabaseService";
import { useRoot } from "../../../shared/contexts/RootProvider";
import {
  triggerForm,
  wrapPaymentEnum,
} from "../../../services/internalServices";
import instance from "../../../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const OrderView = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { loggedInUser, setCoinPaymentInfo, setCryptoInfoModalEnable } =
    useRoot();
  const [orderList, setorderList] = useState<any[]>([]);

  const loadOrderList = async () => {
    try {
      setLoading(true);

      const orderList: any = await instance.post(`sortedPaymentOrderList`);

      setorderList(orderList.data);
      setLoading(false);
    } catch (error) {
      triggerForm({
        title: "",
        text: error,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      loadOrderList();
      // PaymentService.getAllByIdWhere(loggedInUser.uid).then((userData: any) => {
      //   setorderList(
      //     userData.sort(function (a: any, b: any) {
      //       return b.date - a.date;
      //     })
      //   );
      //   setLoading(false);
      // });
    }
  }, [loggedInUser]);

  const pressView = (id: string) => {
    router.push(`/downloads`);
  };

  const pressPayment = (coinPaymentInfo: any) => {
    setCoinPaymentInfo(coinPaymentInfo);
    setCryptoInfoModalEnable(true);
  };

  return (
    <div className="dashboard-card">
      <h2 className="mb-3">Orders</h2>
      <div className="responsive-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td className="text-center" colSpan={5}>
                  Loading....
                </td>
              </tr>
            )}
            {!orderList.length && !loading && (
              <tr>
                <td>No Orders Found!</td> <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {orderList.map((element: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{element?.orderId || element.id}</td>
                  <td className="td-field-inc">
                    {dayjs.unix(element.date).format("YYYY-MMM-DD / h:mm A")}
                  </td>
                  <td style={{ color: wrapPaymentEnum(element.status) }}>
                    {element.status}
                  </td>
                  <td className="td-field-inc">
                    ${element.totalAmount} for {element.currentCartItem?.length}{" "}
                    item
                  </td>
                  {element?.coinPaymentInfo ? (
                    <td>
                      <button
                        onClick={() => {
                          pressPayment(element?.coinPaymentInfo);
                        }}
                        type="button"
                      >
                        View Transaction Info
                      </button>
                    </td>
                  ) : (
                    <td></td>
                  )}
                  <td
                    className="text-end"
                    onClick={() => pressView(`${element.id}`)}
                  >
                    <button type="button">View</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderView;
