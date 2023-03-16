import { NextSeo } from "next-seo";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

import DashboardMainView from "../../mainViews/dashboard/DashboardMainView";

const DashboardPage = () => (
  <>
    <NextSeo title="Dashboard - EmailDatas" description="" />
    <DashboardLayout>
      <DashboardMainView />
    </DashboardLayout>
  </>
);

export default DashboardPage;
