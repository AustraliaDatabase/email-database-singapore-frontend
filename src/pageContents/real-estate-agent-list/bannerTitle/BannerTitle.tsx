import React from "react";

interface IBannerTitle {}

const BannerTitle = (props: IBannerTitle) => {
  return (
    <>
      <h1>
        <span className="text-highlight">
          2.31 Million Realtor Lists with 95% Email
        </span>{" "}
        Deliverability Guarantee
      </h1>
      <br />
      <br />
      <div style={{ fontSize: 20 }}>35% Off on 2022</div>
    </>
  );
};

export default BannerTitle;
