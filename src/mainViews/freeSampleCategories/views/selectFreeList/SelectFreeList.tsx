import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import classNames from "classnames";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import Button from "../../../../shared/components/button/Button";
import {
  BUTTON_SIZE_ENUM,
  BUTTON_VARIANT_ENUM,
  EMAIL_VERIFICATION_TYPE,
} from "../../../../shared/enums";
import styles from "./styles.module.scss";
import EmailVerifyTimer from "./emailVerifyTimer/EmailVerifyTimer";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { ISelectObject } from "../../../../shared/interface";

interface ISelectFreeList {
  onBuildList: (list: string) => void;
  onSelectCategory: Function;
  sampleSubList: ISelectObject[];
  buildLoading: boolean;
  userInfo: {
    isEmailVerified: boolean;
  } | null;
  requestLeftCount: number;
}

const SelectFreeList = (props: ISelectFreeList) => {
  const {
    onBuildList,
    onSelectCategory,
    sampleSubList,
    buildLoading,
    userInfo,
    requestLeftCount,
  } = props;

  const router = useRouter();
  const { loggedInUser, setAuthEnable } = useRoot();

  const [freeSample, setFreeSample] = useState("--Select--");
  const [currentAssignedUrl, setCurrentAssignedUrl] = useState<string>("");

  const selectedListItem = router.query?.id;

  const mainCategory = router?.query?.productId
    // @ts-ignore
    ?.replace("-", "_")
    ?.toUpperCase();

  useEffect(() => {
    if (mainCategory) {
      onSelectCategory(mainCategory);
    }
  }, [mainCategory]);

  useEffect(() => {
    if (sampleSubList?.length && selectedListItem) {
      const selectedItemObject = sampleSubList.filter((element) => {
        return element.assignedUrl == `/${selectedListItem}`;
      })[0];

      setFreeSample(selectedItemObject?.value);
      setCurrentAssignedUrl(selectedItemObject?.assignedUrl);
    }
  }, [sampleSubList, selectedListItem]);

  const handleSampleList = (event: any) => {
    const fullSelectedSampleItem = sampleSubList.filter((element) => {
      return element.value == event.target.value;
    })[0];

    setCurrentAssignedUrl(fullSelectedSampleItem?.assignedUrl);

    setFreeSample(event.target.value);
  };

  return (
    <Col xs={12} md={8} lg={3} className="mb-4">
      <div className={styles.selectCardWrapper}>
        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.selectTitle}>Select the List</div>
          {currentAssignedUrl && (
            <a
              target="_blank"
              rel="noreferrer"
              href={`${
                process.env.NEXT_PUBLIC_BASE_URL
              }${currentAssignedUrl?.replace("+", "/")}`}
            >
              <Button variant="text">View the Product</Button>
            </a>
          )}
        </div>
        <select
          onChange={handleSampleList}
          value={freeSample}
          className="form-select"
        >
          <option>--Select--</option>
          {sampleSubList?.map((element) => {
            return <option key={element.label}>{element.value}</option>;
          })}
        </select>
        {/* {sampleSubList?.length ? (
          <Select
            className="mt-3"
            placeholder="Select Sample List"
            options={sampleSubList}
            value={freeSample}
            onChange={handleSampleList}
            styles={SELECT_STYLE}
            theme={SELECT_CUSTOM_THEME}
            isSearchable={true}
          />
        ) : null} */}
        {!userInfo?.isEmailVerified && loggedInUser && (
          <>
            <EmailVerifyTimer
              className="w-100"
              verificationType={
                EMAIL_VERIFICATION_TYPE.FREE_SAMPLE_ON_EVERY_PRODUCT
              }
            />
          </>
        )}
        {sampleSubList?.length ? (
          <Button
            disabled={
              (!userInfo?.isEmailVerified && loggedInUser) ||
              (!loggedInUser && !freeSample)
            }
            onClick={() => {
              if (!loggedInUser) {
                setAuthEnable(true);
                return;
              }

              if (requestLeftCount == 0) {
                Swal.fire(
                  "Request limit exceeded!",
                  `You have already reached your limits for this month. Contact us if you would like another sample list `,
                  "error"
                );

                return;
              }
              requestLeftCount != 0 && freeSample && onBuildList(freeSample);
            }}
            size={BUTTON_SIZE_ENUM.Large}
            variant={BUTTON_VARIANT_ENUM.Primary}
            loading={buildLoading}
            className={classNames("w-100 mt-3", styles.buildButton)}
          >
            Build and Download
          </Button>
        ) : null}
      </div>
    </Col>
  );
};

export default SelectFreeList;
