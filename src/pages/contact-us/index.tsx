import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PublicLayout from "../../layouts/public/PublicLayout";

import ContactUsMainView from "../../mainViews/contactUs/ContactUsMainView";
import { routeToLowerCase } from "../../shared/InternalService";

const ContactUsPage = () => {
  const router = useRouter();

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="Contact US"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`}
      />
      <PublicLayout>
        <ContactUsMainView />
      </PublicLayout>
    </>
  );
};

export default ContactUsPage;
