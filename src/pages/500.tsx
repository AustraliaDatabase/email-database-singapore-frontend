import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PublicLayout from "../layouts/public/PublicLayout";
import MainView500 from "../mainViews/500MainView";

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath?.toLowerCase()!==router.asPath) {
      router.push(router.asPath?.toLowerCase())
    }
  }, [])

  return (
    <PublicLayout>
      <MainView500 />
    </PublicLayout>
  );
};

export default NotFoundPage;
