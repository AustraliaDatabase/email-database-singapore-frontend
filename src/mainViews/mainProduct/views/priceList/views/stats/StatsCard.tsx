import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { DATABASE_MAIN_TYPES } from "../../../../../../shared/enums";
import { IStats } from "../../../../../../shared/interface";
import { numberWithCommas } from "../../../../../../shared/InternalService";
import {
  COMPANY_STRUCTURE,
  REALTOR_STRUCTURE,
  TITLE_STRUCTURE,
} from "../../../dataFields/constants";
import styles from "./style.module.scss";

interface IStatsCard {
  databaseMainType: DATABASE_MAIN_TYPES;
  name: string;
  statsInfo?: IStats;
  displayPriceLink?: boolean;
}

const StatsCard = (props: IStatsCard) => {
  const { databaseMainType, name, statsInfo, displayPriceLink } = props;

  const STRUCTURE = {
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: COMPANY_STRUCTURE,
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD]: COMPANY_STRUCTURE,
    [DATABASE_MAIN_TYPES.REALTOR]: REALTOR_STRUCTURE,
    [DATABASE_MAIN_TYPES.REALTOR_OLD]: REALTOR_STRUCTURE,
    [DATABASE_MAIN_TYPES.JOB_TITLE]: TITLE_STRUCTURE,
  };

  const GET_TITLE_VALUE: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: "State",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "Email List",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "Job Title",
  };

  return (
    <div className={styles.structure} id="#stats">
      <div className={styles.structureWrapper}>
        <div>
          <div className={styles.structureTitle}>
            {GET_TITLE_VALUE[databaseMainType]}
          </div>
          <div className={styles.structureValue}>{name}</div>
        </div>
        {/* @ts-ignore */}
        {STRUCTURE[databaseMainType]?.map((item: any, index: number) => {
          // @ts-ignore
          const currentValue = statsInfo?.[item.id];

          if (!currentValue?.trim()) {
            return;
          }

          return (
            <div key={index}>
              <div className={styles.structureTitle}>{item?.title}</div>
              <div className={styles.structureValue}>
                {!isNaN(currentValue)
                  ? // @ts-ignore
                    numberWithCommas(currentValue) +
                    (index === 0 ? " (Zero Duplicates )" : "")
                  : currentValue}
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
