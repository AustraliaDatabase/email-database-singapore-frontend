import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import TermsMainView from "../../mainViews/terms/TermsMainView";
import { routeToLowerCase } from "../../shared/InternalService";

const TermsPage = () => {
  const router = useRouter();

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="Terms and Conditions"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/terms`}
        nofollow
        noindex
      />
      <PublicLayout>
        <TermsMainView />
      </PublicLayout>
    </>
  );
};

export default TermsPage;
