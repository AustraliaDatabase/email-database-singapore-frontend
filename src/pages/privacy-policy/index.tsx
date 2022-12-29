import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import PrivacyMainView from "../../mainViews/privacy/PrivacyMainview";
import { routeToLowerCase } from "../../shared/InternalService";

const PrivacyPage = () => {
  const router = useRouter();

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="Privacy Policy"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`}
        nofollow
        noindex
      />
      <PublicLayout>
        <PrivacyMainView />
      </PublicLayout>
    </>
  );
};

export default PrivacyPage;
