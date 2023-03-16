import { NextSeo } from "next-seo";
import React from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import PreMadeListView from "../../mainViews/preMadeListView/PreMadeListView";

const index = () => {
  return (
    <>
      <NextSeo
        title={"Seeds.metaTitle"}
        description={"Seeds.metaDescription"}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/pre-made-list`}
      />

      <PublicLayout>
        <PreMadeListView />
      </PublicLayout>
    </>
  );
};

export default index;
