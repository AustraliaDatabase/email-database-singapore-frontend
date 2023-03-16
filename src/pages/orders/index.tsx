import { NextSeo } from "next-seo";
import React from "react";

import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import OrdersMainView from "../../mainViews/orders/OrdersMainView";

const OrdersPage = () => {
  return (
    <>
      <NextSeo
        title="Orders - EmailDatas"
        description=""
        nofollow
        noindex
      />
      <DashboardLayout>
        <OrdersMainView />
      </DashboardLayout>
    </>
  );
};

export default OrdersPage;
