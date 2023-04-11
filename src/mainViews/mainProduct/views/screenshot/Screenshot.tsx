import React, { useEffect, useState } from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";

import {
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
} from "../../../../shared/enums";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { getRealtorDownloadUrl } from "../../../../database/storage";
import { IMainProductInfo, IScreenshot } from "../../../../shared/interface";
import Button from "../../../../shared/components/button/Button";
import styles from "./style.module.scss";

interface IScreenshotView {
  modalScreenshotTitle?: string;
  screenshotInfo: IScreenshot;
  currentObject: IMainProductInfo;
}

const ScreenshotView = (props: IScreenshotView) => {
  const router = useRouter();
  const { modalScreenshotTitle, screenshotInfo, currentObject } = props;
  const [downloadUrl, setDownloadUrl] = useState("");

  const databaseMainType = currentObject?.type;
  const name = currentObject?.name;
  const url = currentObject?.url;

  const getDownloadUrl = (url: string) => {
    setDownloadUrl(url);
  };

  useEffect(() => {
    if (screenshotInfo?.sampleFileName) {
      getRealtorDownloadUrl(screenshotInfo?.sampleFileName, getDownloadUrl);
    }
  }, [screenshotInfo]);

  const { setScreenshotModalEnable, setScreenshotInfo } = useRoot();

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
                    router.push("/free-sample");
                  }}
                >
                  Download
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
