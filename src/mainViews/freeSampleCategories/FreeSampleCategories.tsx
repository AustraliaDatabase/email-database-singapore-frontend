import { useRouter } from "next/router";
import { ArrowSquareLeft } from "phosphor-react";
import React from "react";

import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import FreeSampleListByCategory from "./views/freeSampleListByCategory/FreeSampleListByCategory";
import styles from "./style.module.scss";

const FreeSampleCategories = () => {
  const router: any = useRouter();

  const mainCategory: any = router?.query?.productId
    ?.replace("-", "_")
    ?.toUpperCase();

  const sampleCategories: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: "Realtors",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "B2B Emails",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "Job Titles",
    [DATABASE_MAIN_TYPES.TARGET]: "Target",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "Industries",
    [DATABASE_MAIN_TYPES.CONSUMER]: "Consumer Emails",
    [DATABASE_MAIN_TYPES.COUNTRY]: "Countries",
  };

  const pressBack = () => {
    router.push("/free-sample");
  };

  if (mainCategory && !sampleCategories[mainCategory]) {
    return (
      <>
        <h3>Fee Sample List</h3>
        <div>Requested Sample Category is not available </div>
      </>
    );
  }

  return (
    <div>
      <div>
        <ArrowSquareLeft
          weight="fill"
          className={styles.back}
          size={32}
          color="#FF4800"
          onClick={pressBack}
        />
        <h3>Free sample List - {sampleCategories[mainCategory]}</h3>
      </div>

      <FreeSampleListByCategory />
    </div>
  );
};

export default FreeSampleCategories;
