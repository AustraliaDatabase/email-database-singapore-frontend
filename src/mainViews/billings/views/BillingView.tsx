import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";

import { useRoot } from "../../../shared/contexts/RootProvider";
// import { PaymentService } from "../../../database/DatabaseService";
import { wrapPaymentEnum } from "../../../services/internalServices";
import instance from "../../../services/baseServices";

const BillingView = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [billingOrderList, setBillingOrderList] = useState([]);

  const { loggedInUser } = useRoot();

  const getBillingOrders = async () => {
    setLoading(true);

    try {
      const billingOrderList: any = await instance.post(
        `billingList`
      );
      setBillingOrderList(billingOrderList.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      getBillingOrders();

      // setLoading(true);
      // PaymentService.getAllById(loggedInUser.uid).then((userData: any) => {
      //   setBillingOrderList(
      //     userData.sort(function (a: any, b: any) {
      //       return b.date - a.date;
      //     })
      //   );
      //   setLoading(false);
      // });
    }
  }, [loggedInUser]);

  const pressView = (id: string) => {
    router.push(`/downloads/${id}`);
  };

  return (
    <div className="dashboard-card">
      <h4>Your Payments</h4>
      <div className="responsive-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Reject / Approved Comments</th>
              <th>Total</th>
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
            {!billingOrderList.length && !loading && (
              <tr>
                <td>No any Billing Records Found!</td> <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {billingOrderList.map((element: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{element?.orderId || element.id}</td>
                  <td className="td-field-inc">
                    {dayjs.unix(element.date).format("YYYY-MMM-DD / h:mm A")}
                  </td>
                  <td style={{ color: wrapPaymentEnum(element.status) }}>
                    {element.status}
                  </td>
                  <td>{element.rejectedReason}</td>
                  <td className="td-field-inc">
                    ${element.totalAmount} for {element.currentCartItem?.length}{" "}
                    item
                  </td>
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

export default BillingView;
