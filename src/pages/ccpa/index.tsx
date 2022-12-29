import React, { useEffect } from "react";
import CCPAMainView from "../../mainViews/ccpa/CCPAMainView";
import PublicLayout from "../../layouts/public/PublicLayout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { routeToLowerCase } from "../../shared/InternalService";

const CCPAPage = () => {
  const router = useRouter();

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="CCPA"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/ccpa`}
        nofollow
        noindex
      />
      <PublicLayout>
        <CCPAMainView />
      </PublicLayout>
    </>
  );
};

export default CCPAPage;
