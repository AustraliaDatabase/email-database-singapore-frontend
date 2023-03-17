import { NextSeo } from "next-seo";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import AllDownloadsMainView from "../../mainViews/allDownloads/AllDownloads";

const DownloadsPage = () => (
  <>
    <NextSeo
      title="All Downloads - EmailDatas"
      description=""
      nofollow
      noindex
    />
    <DashboardLayout>
      {/* <h3>All Downloads</h3> */}
      <AllDownloadsMainView />
    </DashboardLayout>
  </>
);

export default DownloadsPage;
