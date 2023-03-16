import Image from "next/image";
import React from "react";

const Star = ({url}: any) => {
  return (
    <div>
      <Image
        src={url}
        width={23}
        alt="Trust Index Start - EmailDatas"
        height={20}
        layout="fixed"
      />
    </div>
  );
};

export default Star;
