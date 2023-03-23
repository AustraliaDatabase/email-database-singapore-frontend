import classNames from "classnames";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { ClockClockwise, UsersThree } from "phosphor-react";
import React from "react";
import { Col } from "react-bootstrap";
import Button from "../../../../shared/components/button/Button";
import {
  DATA_TYPE_TO_TITLE,
  MAIN_CATEGORY_PAGE_URLS,
} from "../../../../shared/constants";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { downloadSampleListEmailSend } from "../../../../shared/emailSend";
import {
  BUTTON_SIZE_ENUM,
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
} from "../../../../shared/enums";
import { IFreeSampleItemObject } from "../../../../shared/interface";
import styles from "./style.module.scss";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

interface IMyOwnList {
  myOwnList: IFreeSampleItemObject | null;
}

const MyOwnList = (props: IMyOwnList) => {
  const { myOwnList } = props;
  const { loggedInUser } = useRoot();

  const categoryText: any = {
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "B2B Emails",
    [DATABASE_MAIN_TYPES.CONSUMER]: "Consumer Emails",
    [DATABASE_MAIN_TYPES.COUNTRY]: "Country",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "Industry",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "Job Title",
    [DATABASE_MAIN_TYPES.REALTOR]: "Realtor",
    [DATABASE_MAIN_TYPES.TARGET]: "Target",
  };

  const badgeColor: any = {
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "#2E86C1",
    [DATABASE_MAIN_TYPES.CONSUMER]: "#9B59B6",
    [DATABASE_MAIN_TYPES.COUNTRY]: "#E67E22",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "#F1C40F",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "#27AE60",
    [DATABASE_MAIN_TYPES.REALTOR]: "#E74C3C",
    [DATABASE_MAIN_TYPES.TARGET]: "#F62459",
  };

  const pressDownload = async (sample: any) => {
    const mainCategory = sample?.category?.replace("-", "_")?.toUpperCase();

    const emailObject = {
      urlText1: `${sample?.name} ${DATA_TYPE_TO_TITLE[mainCategory]} List`,
      url1: `${process.env.NEXT_PUBLIC_BASE_URL}/${sample?.assignedUrl}`,
      urlText2: `${MAIN_CATEGORY_PAGE_URLS[mainCategory]?.name}`,
      url2: `${process.env.NEXT_PUBLIC_BASE_URL}/${MAIN_CATEGORY_PAGE_URLS[mainCategory]?.url}`,
      contactCount: sample.emailContacts,
      name: loggedInUser?.displayName, // user name
      email: loggedInUser?.email,
    };

    try {
      const response = await downloadSampleListEmailSend(emailObject);
    } catch (error) {}
  };

  return (
    <>
      {myOwnList?.items?.map((sample, index) => {
        const sampleFileName = sample.name
          ? sample.name
          : sample.fileName
              ?.replace(".csv", "")
              .replaceAll("_", " ")
              .toLowerCase()
              .replace(/(^|\.\s)\S/g, function (match) {
                return match.toUpperCase();
              });

        return (
          <Col xs={12} md={4} lg={6} key={index} className={styles.cardCol}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <div title={sampleFileName}>
                  {sampleFileName.length < 20
                    ? sampleFileName
                    : sampleFileName.slice(0, 20) + "..."}
                </div>
                <div
                  className={styles.description}
                  style={{
                    backgroundColor: `${
                      badgeColor[sample.category?.toUpperCase()]
                    }`,
                  }}
                >
                  {sample.category &&
                    categoryText[sample.category?.toUpperCase()]}
                </div>
              </div>
              <div className={styles.cardDetails}>
                <div className={classNames("mb-3", styles.singleInfo)}>
                  <div className={styles.title}>
                    <span>
                      <UsersThree size={20} />
                    </span>
                    <div>
                      <span>Total Contacts</span>
                      <div className={styles.titleText}>
                        {sample.emailContacts} Emails
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.singleInfo}>
                  <div className={styles.title}>
                    <span>
                      <ClockClockwise size={20} />
                    </span>
                    <div>
                      <span>Expire Date</span>
                      <div className={styles.titleText}>
                        {/* @ts-ignore */}
                        {dayjs(sample.expireDate).fromNow()}
                      </div>
                    </div>
                  </div>
                </div>
                <a href={sample.downloadUrl} target="_blank" rel="noreferrer">
                  <Button
                    onClick={() => {
                      pressDownload(sample);
                    }}
                    className={styles.cardBtn}
                    size={BUTTON_SIZE_ENUM.Small}
                    variant={BUTTON_VARIANT_ENUM.Secondary}
                  >
                    Download
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default MyOwnList;
