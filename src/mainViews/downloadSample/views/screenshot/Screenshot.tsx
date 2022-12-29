import Image from "next/image";
import { MagnifyingGlassPlus } from "phosphor-react";
import React from "react";

import Card from "../../../../shared/components/card/Card";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import styles from "./style.module.scss";

const Screenshot = () => {
  const { setScreenshotModalEnable, setScreenshotInfo } = useRoot();

  return (
    <Card title="Sample Screenshot of Realtor List" className="mt-5 mb-5">
      <div
        style={{ position: "relative" }}
        onClick={() => {
          setScreenshotModalEnable(true);
          setScreenshotInfo({
            title: "Realtor",
          });
        }}
      >
        <div
          className={styles.absoluteMagnify}
          style={{ position: "absolute" }}
        >
          <MagnifyingGlassPlus size={50} color="#FF4800" />
        </div>
        <Image
          src={`/Realtor-Email-List.webp`}
          width={1874}
          layout="responsive"
          height={964}
          alt="sample data"
          className={styles.screenshot}
        />
      </div>
    </Card>
  );
};

export default Screenshot;
