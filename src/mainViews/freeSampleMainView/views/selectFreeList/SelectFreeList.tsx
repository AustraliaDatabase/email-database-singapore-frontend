import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col } from "react-bootstrap";
import Swal from "sweetalert2";
import classNames from "classnames";

import Button from "../../../../shared/components/button/Button";
import {
  BUTTON_SIZE_ENUM,
  BUTTON_VARIANT_ENUM,
  EMAIL_VERIFICATION_TYPE,
} from "../../../../shared/enums";
import EmailVerifyTimer from "./emailVerifyTimer/EmailVerifyTimer";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { ISelectObject } from "../../../../shared/interface";
import instance from "../../../../services/baseServices";
import styles from "./styles.module.scss";

interface ISelectFreeList {
  onBuildList: (list: string) => void;
  // onSelectCategory: Function;
  // sampleSubList: ISelectObject[];
  buildLoading: boolean;
  userInfo: {
    isEmailVerified: boolean;
  } | null;
  requestLeftCount: number;
  title: string;
  databaseMainTypes: string;
}

interface IconList {
  [key: string]: string;
}

const SelectFreeList = (props: ISelectFreeList) => {
  const {
    onBuildList,
    // onSelectCategory,
    // sampleSubList,
    buildLoading,
    userInfo,
    requestLeftCount,
    title,
    databaseMainTypes,
  } = props;
  const { loggedInUser, setAuthEnable } = useRoot();

  const [sampleSubList, setSampleSubList] = useState<ISelectObject[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [freeSample, setFreeSample] = useState("--Select--");
  const [currentAssignedUrl, setCurrentAssignedUrl] = useState<string>("");

  // const selectedListItem = router.query?.id;
  const selectedListItem = databaseMainTypes;

  // const databaseMainTypes = router?.query?.productId
  //   // @ts-ignore
  //   ?.replace("-", "_")
  //   ?.toUpperCase();

  const onSelectCategory = async (category: string) => {
    setCurrentCategory(category);
    setSampleSubList([]);
    try {
      // setLoading(true);
      const response = await instance.get(
        `/free-sample-by-name/${category?.toLowerCase()}`
      );

      const list: any = response.data?.items?.map((element: any) => {
        return {
          label: element.fileName,
          value: element.fileName,
          assignedUrl: element.assignedUrl,
        };
      });

      setSampleSubList(list);
      // setLoading(false);
    } catch (error: any) {
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (databaseMainTypes) {
      onSelectCategory(databaseMainTypes);
    }
  }, [databaseMainTypes]);

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

  const iconList: IconList = {
    COMPANY_DATABASE: "/menu-icons/industries.png",
    REALTOR: "/menu-icons/by-states.png",
    INDUSTRY: "/menu-icons/industries.png",
    CONSUMER: "/menu-icons/international.png",
    TARGET: "/menu-icons/target.png",
  };

  return (
    <Col xs={12} md={8} lg={4} className="mb-4">
      <div className={styles.selectCardWrapper}>
        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.selectTitle}>
            <span className={styles.icon}>
              <Image
                src={iconList[databaseMainTypes]}
                width={30}
                height={30}
                alt="Icon"
              />
            </span>
            {title}
          </div>
        </div>
        <div className="mb-3">
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
