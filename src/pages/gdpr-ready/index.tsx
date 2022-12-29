import React, { useEffect } from "react";
import GdprReadyMainView from "../../mainViews/gdprReady/GdprReady";
import PublicLayout from "../../layouts/public/PublicLayout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { routeToLowerCase } from "../../shared/InternalService";

const GDPRReadyPage = () => {
  const router = useRouter();

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="GDPR Ready"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/gdpr-ready`}
        nofollow
        noindex
      />
      <PublicLayout>
        <GdprReadyMainView />
      </PublicLayout>
    </>
  );
};

export default GDPRReadyPage;
