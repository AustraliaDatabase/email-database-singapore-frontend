import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import HomeMainView from "../mainViews/home/HomeMainView";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="B2B Email Marketing Lists and Sales Leads Database Provider"
        description="Explore EmailDatas' diverse range of offerings, including US State-specific, Job Titles, Industries, Targeted, International, and Zip Code databases."
        canonical={process.env.NEXT_PUBLIC_BASE_URL}
      />
      <PublicLayout>
        <HomeMainView />
      </PublicLayout>
    </>
  );
};

export default Home;
