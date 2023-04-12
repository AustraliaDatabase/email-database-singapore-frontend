import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { DATABASE_MAIN_TYPES } from "../../../../../../shared/enums";
import { IStats } from "../../../../../../shared/interface";
import { numberWithCommas } from "../../../../../../shared/InternalService";
import { COMPANY_STRUCTURE } from "../../../dataFields/constants";
import styles from "./style.module.scss";

interface IStatsCard {
  databaseMainType: DATABASE_MAIN_TYPES;
  name: string;
  statsInfo?: IStats;
  displayPriceLink?: boolean;
}

const StatsCard = (props: IStatsCard) => {
  const { databaseMainType, name, statsInfo, displayPriceLink } = props;

  const GET_TITLE_VALUE: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: "State",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "State",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "Job Title",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "Industry",
    [DATABASE_MAIN_TYPES.COUNTRY]: "Country",
  };

  return (
    <div className={styles.structure} id="#stats">
      <div className={styles.structureWrapper}>
        <div className={styles.statsWrapper}>
          <div className={styles.structureTitle}>
            {GET_TITLE_VALUE[databaseMainType]}
          </div>
          <div className={styles.structureValue}>{name}</div>
        </div>
        {COMPANY_STRUCTURE?.map((item: any, index: number) => {
          // @ts-ignore
          const currentValue = statsInfo?.[item.id];

          if (!currentValue?.trim()) {
            return;
          }

          return (
            <div key={index} className={styles.statsWrapper}>
              <div className={styles.structureTitle}>{item?.title}</div>
              <div className={styles.structureValue}>
               {numberWithCommas(currentValue)}
              </div>
            </div>
          );
        })}
      </div>
      {displayPriceLink && (
        <ScrollLink to="#buy-now">
          <div className={styles.viewPricing}>View Pricing of {name}</div>
        </ScrollLink>
      )}
    </div>
  );
};

export default StatsCard;
