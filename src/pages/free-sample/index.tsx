import React from "react";
import { NextSeo } from "next-seo";

import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import FreeSampleMainView from "../../mainViews/freeSampleMainView/FreeSampleMainView";

const index = () => {
  return (
    <>
      <NextSeo title="Free Sample - JozData" description="" nofollow noindex />
      <DashboardLayout>
        <FreeSampleMainView />
      </DashboardLayout>
    </>
  );
};

export default index;
