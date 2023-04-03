import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import classNames from "classnames";

import Button from "../../../../shared/components/button/Button";
import {
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
} from "../../../../shared/enums";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { getRealtorDownloadUrl } from "../../../../database/storage";
import styles from "./style.module.scss";
import { IScreenshot } from "../../../../shared/interface";

interface IScreenshotView {
  databaseMainType: DATABASE_MAIN_TYPES;
  modalScreenshotTitle?: string;
  screenshotInfo: IScreenshot;
  name: string;
  url: string;
}

const ScreenshotView = (props: IScreenshotView) => {
  const { databaseMainType, modalScreenshotTitle, screenshotInfo, name, url } =
    props;
  const [downloadUrl, setDownloadUrl] = useState("");

  const getDownloadUrl = (url: string) => {
    setDownloadUrl(url);
  };

  useEffect(() => {
    if (screenshotInfo?.sampleFileName) {
      getRealtorDownloadUrl(screenshotInfo?.sampleFileName, getDownloadUrl);
    }
  }, [screenshotInfo]);

  const {
    setDownloadInfo,
    setDownloadLoadModalEnable,
    setScreenshotModalEnable,
    setScreenshotInfo,
  } = useRoot();

  const generateLink: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: [
      {
        name: `${name} Company Database`,
        link: url,
      },
      {
        name: "Entire 46 Million Company Database List",
        link: "/list-of-all-us-companies",
      },
      {
        name: "Choose Company Database List by State",
        link: "/us-company-database-by-state",
      },
    ],
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: [
      {
        name: `${name} Realtors`,
        link: url,
      },
      {
        name: "Entire 2.2 Million Realtor List",
        link: "/list-of-all-us-companies",
      },
      {
        name: "Choose Realtors List by State",
        link: "/us-company-database-by-state",
      },
    ],
  };

  // const getScreenTitle = () => {
  //   if (databaseMainType === DATABASE_MAIN_TYPES.REALTOR) {
  //     return (
  //       <>
  //         <span className="text-highlight">
  //           List Of {currentObject.state} Realtors Is
  //         </span>{" "}
  //         Similar As Following Screenshot
  //       </>
  //     );
  //   }

  //   return (
  //     <>
  //       <span className="text-highlight">
  //         {currentObject.state} Business Database
  //       </span>{" "}
  //       Is Similar As Following Screenshot
  //     </>
  //   );
  // };

  // const getScreenShotNote = () => {
  //   if (databaseMainType === DATABASE_MAIN_TYPES.REALTOR) {
  //     return (
  //       <>
  //         <p>
  //           Get a sample of list of the top real estate agents to boost your
  //           sales and ROI.
  //         </p>
  //       </>
  //     );
  //   }

  //   return (
  //     <p>
  //       Get a sample of {currentObject.state} Company Database to boost your
  //       sales and ROI.
  //     </p>
  //   );
  // };

  // const screenshotNote = getScreenShotNote();
  // const screenshotTitle = getScreenTitle();

  const getIndustryUrl = () => {
    if (url === "/general-contractors-and-home-builders") {
      return "/Builders-and-Contractors.png";
    } else if (url === "/cryptocurrency") {
      return null;
    } else if (url === "/super-backers-email-database") {
      return "/Super-Backers-Database.png";
    } else if (url === "/crowdfunding-backer-database") {
      return "/CrowdFunding-Email-List.png";
    }

    return "/screenshot-for-b2b-emails.webp";
  };

  const screenshot: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: "/Realtor-Email-List.webp",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "/screenshot-for-b2b-emails.webp",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "/screenshot-for-b2b-emails.webp",
    [DATABASE_MAIN_TYPES.INDUSTRY]: getIndustryUrl(),
  };
  console.log(screenshot[databaseMainType]);
  return (
    <div className={styles.screenshotWrapper}>
      <div>
        <Image
          src={screenshot[databaseMainType]}
          alt=""
          objectFit="scale-down"
          width={1200}
          height={700}
        />
      </div>
      <Row>
        <Col xs={12} lg={9} className="mx-auto">
          {/* <Image
            src="/data-files.png"
            width={197}
            height={194}
            alt="databse files"
            objectFit="scale-down"
          />
          <div
            className={classNames("mb-4 text-center", styles.screenshotTitle)}
            dangerouslySetInnerHTML={{ __html: screenshotInfo?.title }}
          />
          <div
            className={classNames("text-center", styles.screenshotDescription)}
            dangerouslySetInnerHTML={{
              __html: screenshotInfo?.description,
            }}
          /> */}
          <div className={styles.buttonWrappre}>
            {downloadUrl && (
              <>
                <Button
                  size="large"
                  variant={BUTTON_VARIANT_ENUM.Primary}
                  block
                  onClick={() => {
                    setScreenshotModalEnable(true);
                    setScreenshotInfo({
                      title: modalScreenshotTitle || name,
                      attachmentUrl: screenshot[databaseMainType],
                    });
                  }}
                >
                  Preview Sample
                </Button>
                <Button
                  size="large"
                  variant={BUTTON_VARIANT_ENUM.Tertiary}
                  block
                  onClick={() => {
                    setDownloadLoadModalEnable(true);
                    setDownloadInfo({
                      title: modalScreenshotTitle || name,
                      description: (
                        <>
                          <p>
                            Download the free sample to test the quality and
                            accuracy of our {modalScreenshotTitle || name} list.
                          </p>

                          <p>
                            Entire {modalScreenshotTitle || name} List Quality
                            is same as this sample. 95% Email Deliverability
                            Guarantee Available with this list.
                          </p>
                        </>
                      ),
                      links: databaseMainType && generateLink[databaseMainType],
                      attachmentUrl: downloadUrl,
                    });
                  }}
                >
                  Request List
                </Button>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ScreenshotView;
