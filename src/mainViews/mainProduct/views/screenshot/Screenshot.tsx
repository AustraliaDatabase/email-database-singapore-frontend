import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";

import {
  BUTTON_VARIANT_ENUM,
  DATABASE_MAIN_TYPES,
} from "../../../../shared/enums";
import { useRoot } from "../../../../shared/contexts/RootProvider";
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
  const { modalScreenshotTitle, currentObject } = props;

  const databaseMainType = currentObject?.type;
  const name = currentObject?.name;

  const { setScreenshotModalEnable, setScreenshotInfo } = useRoot();

  const screenshot: any = {
    [DATABASE_MAIN_TYPES.REALTOR]: "/screenshot.png",
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: "/screenshot.png",
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "/screenshot.png",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "/screenshot.png",
  };

  return (
    <div className={styles.screenshotWrapper}>
      <div>
        <Image
          src={screenshot[databaseMainType]}
          alt=""
          width={1200}
          height={700}
        />
      </div>
      <Row>
        <Col xs={12} lg={9} className="mx-auto">
          <div className={styles.buttonWrappre}>
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
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ScreenshotView;
