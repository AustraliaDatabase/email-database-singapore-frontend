import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import HomeMainView from "../mainViews/home/HomeMainView";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="2023 USA Email List & B2B Email Marketing Database"
        description="EmailDatas Provide Accurate and up to date valid US Business databases, Realtor emails & all type of B2B emails in USA and Internationally"
        canonical={process.env.NEXT_PUBLIC_BASE_URL}
      />
      <PublicLayout>
        <HomeMainView />
      </PublicLayout>
    </>
  );
};

export default Home;
