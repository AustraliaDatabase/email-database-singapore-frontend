import { NextSeo } from "next-seo";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import MyAccountMainView from "../../mainViews/myAccount/MyAccountMainView";

const MyAccountPage = () => {
  return (
    <>
      <NextSeo
        title="My Account - JozData"
        description=""
        nofollow
        noindex
      />
      <DashboardLayout>
        <MyAccountMainView />
      </DashboardLayout>
    </>
  );
};

export default MyAccountPage;
