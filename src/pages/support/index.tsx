import { NextSeo } from "next-seo";
import React from "react";

import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import SupportMainView from "../../mainViews/support/SupportMainView";

const DashboardPage = () => (
  <>
    <NextSeo
      title="Support - JozData"
      description=""
      nofollow
      noindex
    />
    <DashboardLayout>
      <SupportMainView />
    </DashboardLayout>
  </>
);

export default DashboardPage;
