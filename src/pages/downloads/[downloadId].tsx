import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";

import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import DownloadsMainView from "../../mainViews/downloads/DownloadsMainView";

const DownloadsPage = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`Downloads -  #${router.query.downloadId} - JozData`}
        description=""
        nofollow
        noindex
      />
      <DashboardLayout>
        <DownloadsMainView />
      </DashboardLayout>
    </>
  );
};

export default DownloadsPage;
