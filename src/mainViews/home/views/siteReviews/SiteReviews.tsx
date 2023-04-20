import React from "react";
import { CheckCircle } from "phosphor-react";
import { Container } from "react-bootstrap";

import { SITE_REVIEW_LIST } from "../../../../shared/constants";
import styles from "./styles.module.scss";

const SiteReviews = () => {
  return (
    <Container>
      <h2 className="text-center mb-5">Competitor Sites Reviews</h2>
      <div className={styles.listsWrapper}>
        {SITE_REVIEW_LIST.map((site, index: number) => {
          return (
            <a href={site?.url} key={index}>
              <div className={styles.singleReviewList}>
                <span>
                  <CheckCircle size={32} />
                </span>
                <span>{site?.title}</span>
              </div>
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default SiteReviews;
