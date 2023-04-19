import React from "react";
import { SITE_REVIEW_LIST } from "../../../../shared/constants";

const SiteReviews = () => {
  return (
    <div>
      <h2>Competitor Sites Review</h2>

      {SITE_REVIEW_LIST.map((site, index: number) => {
        return (
          <div key={index}>
            <a href={site?.url}>{site?.title}</a>
          </div>
        );
      })}
    </div>
  );
};

export default SiteReviews;
