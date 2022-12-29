import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import LegalNoticeMainView from "../../mainViews/legalNotice";
import { routeToLowerCase } from "../../shared/InternalService";

const LegalNoticePage = () => {
  const router = useRouter();

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="Legal Notice"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/legal-notice`}
        nofollow
        noindex
      />
      <PublicLayout>
        <LegalNoticeMainView />
      </PublicLayout>
    </>
  );
};

export default LegalNoticePage;
