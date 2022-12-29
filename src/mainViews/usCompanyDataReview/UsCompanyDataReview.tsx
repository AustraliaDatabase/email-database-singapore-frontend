import React from "react";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";

const UsCompanyDataReview = () => {
  return (
    <div>
      <h1 style={{fontSize: 32}} className="d-flex align-items-center justify-content-center text-align-center w-100 pt-5">
        Joz Data Reviews By Real Customers
      </h1>
      <div className="pt-5 pb-5">
        <TrustPilot />
      </div>
    </div>
  );
};

export default UsCompanyDataReview;
