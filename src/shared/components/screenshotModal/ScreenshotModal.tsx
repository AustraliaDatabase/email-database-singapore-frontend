import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import classNames from "classnames";

import { useRoot } from "../../contexts/RootProvider";
import UCDModal from "../UCDModal/UCDModal";
import styles from "./style.module.scss";

const ScreenshotModal = () => {
  const [zoomed, setZoomed] = useState("1");
  const [position, setPosition] = useState("50% 50%");
  let figureZoomed = zoomed === "0" ? "zoomed" : "fullView";
  const [imgData, setImgData] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const { screenshotModalEnable, screenshotInfo, setScreenshotModalEnable } =
    useRoot();

  useEffect(() => {
    // Set initial state on component mount
    setZoomed("0");
    setClickCount(0);
    let img: any = new Image();
    img.src = screenshotInfo?.attachmentUrl || "/us-company-data-new.webp";
    img.addEventListener("load", () => {
      // gracefully disable the loading animation
      // setTimeout(() => {
      setZoomed("1");
      setClickCount(1);
      setImgData(img.src);
      // }, 200);
    });
  }, [screenshotInfo]);

  const pressClose = () => {
    setScreenshotModalEnable(false);
  };

  function zoomInPosition(e: any) {
    // this will handle the calculations of the area where the image needs to zoom in depending on the user interaction
    const zoomer = e.currentTarget.getBoundingClientRect();
    let x, y, offsetX, offsetY;
    offsetX = e.clientX - zoomer.x - 100;
    offsetY = e.clientY - zoomer.y - 100;
    x = (offsetX / zoomer.width) * 110;
    y = (offsetY / zoomer.height) * 150;
    setPosition(`${x}% ${y}% `);
  }

  const toggleZoomImage = (e: any) => {
    if (clickCount === 0) {
      // zoom out
      setZoomed("1");
      setClickCount(1);
    } else if (clickCount == 1) {
      setZoomed("0");
      setClickCount(2);
      zoomInPosition(e);
    } else {
      //zoom in and set the background position correctly
      setZoomed("0");
      zoomInPosition(e);
      setClickCount(0);
    }
  };

  function handleClick(e: any) {
    // Handle the click events
    toggleZoomImage(e);
  }

  function handleMove(e: any) {
    // Handle the mouse move events
    if (clickCount === 0 || clickCount === 2) {
      zoomInPosition(e);
    }
  }

  return (
    <UCDModal
      bodyClassName="px-4 pb-4 pt-0"
      onHide={pressClose}
      title={`List of ${screenshotInfo?.title} is similar as following Screenshot`}
      size="xl"
      open={screenshotModalEnable}
    >
      {typeof window !== "undefined" && (
        <div
          onClick={(e) => handleClick(e)}
          onMouseMove={(e) => handleMove(e)}
          className={classNames(styles.figure, figureZoomed, {
            [styles.zoomOut]: clickCount === 0,
          })}
          style={{
            backgroundImage: "url(" + imgData + ")",
            backgroundSize: clickCount == 2 ? "200%" : "400%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: position,
          }}
        >
          <NextImage
            id="imageZoom"
            height={750}
            width={1600}
            style={{ opacity: zoomed }}
            src={screenshotInfo?.attachmentUrl || "/us-company-data-new.webp"}
          />
        </div>
      )}
    </UCDModal>
  );
};

export default ScreenshotModal;
