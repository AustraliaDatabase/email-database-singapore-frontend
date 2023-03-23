import Link from "next/link";
import React from "react";
import { DATABASE_MAIN_TYPES } from "../../../../shared/enums";

import styles from "./styles.module.scss";

interface ISelectOption {
  readonly value: string;
  readonly label: string;
}

const MainCategoryList = () => {
  const sampleCategories: readonly ISelectOption[] = [
    { value: DATABASE_MAIN_TYPES.COMPANY_DATABASE, label: "B2B Emails" },
    { value: DATABASE_MAIN_TYPES.REALTOR, label: "Realtors" },
    { value: DATABASE_MAIN_TYPES.JOB_TITLE, label: "Job Titles" },
    { value: DATABASE_MAIN_TYPES.INDUSTRY, label: "Industries" },
    { value: DATABASE_MAIN_TYPES.COUNTRY, label: "Countries" },
    { value: DATABASE_MAIN_TYPES.CONSUMER, label: "Consumer Emails" },
    { value: DATABASE_MAIN_TYPES.TARGET, label: "Target" },
  ];

  return (
    <div className={styles.linksWrapper}>
      {sampleCategories.map((element, index) => {
        return (
          <div key={index}>
            <Link
              href={`/free-sample/${element.value
                ?.replace("_", "-")
                ?.toLowerCase()}`}
            >
              {element.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MainCategoryList;
