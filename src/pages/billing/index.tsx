import { NextSeo } from "next-seo";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import BillingsMainView from "../../mainViews/billings/BillingsMainView";

const OrdersPage = () => {
  return (
    <>
      <NextSeo
        title="Billing - EmailDatas"
        description=""
        nofollow
        noindex
      />
      <DashboardLayout>
        <BillingsMainView />
      </DashboardLayout>
    </>
  );
};

export default OrdersPage;
