import React from "react";
import { useRoot } from "../../../../shared/contexts/RootProvider";

const BillingInfo = () => {
  const { loggedInUser } = useRoot();

  return (
    <div>
      <p>
        {loggedInUser?.name}, <br />
        {loggedInUser?.streetAddress}, <br />
        {loggedInUser?.streetAddress2 ? (
          <>
            {loggedInUser?.streetAddress2},<br />
          </>
        ) : (
          ""
        )}
        {loggedInUser?.city}, {loggedInUser?.state} {loggedInUser?.zip}, <br />
        {loggedInUser?.country?.label}
        <br />
      </p>
    </div>
  );
};

export default BillingInfo;
