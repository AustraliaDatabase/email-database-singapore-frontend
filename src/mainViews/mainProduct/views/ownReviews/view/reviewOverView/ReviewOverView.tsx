import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ReactStars from "react-stars";

import Card from "../../../../../../shared/components/card/Card";
import { IReviewItem, IReviewObject } from "../../../../../../shared/interface";
import { numberWithCommas } from "../../../../../../shared/InternalService";

import styles from "./stylees.module.scss";

interface IReviewOverView {
  reviews?: IReviewItem[];
}

const ReviewOverView = (props: IReviewOverView) => {
  const { reviews } = props;

  const [averageReviewRate, setAverageReviewRate] = useState(0);
  const [rateObject, setRateObject] = useState<any>({});

  const calculateAverageReviewCount = () => {
    let totalRateCount = 0;

    const ratingObject: any = {};

    reviews?.map((element, index: number) => {
      const rate = Number(element.ratingValue);
      totalRateCount += rate;

      ratingObject[rate] = ratingObject[rate] ? ratingObject[rate] + 1 : 1;
    });

    reviews && setAverageReviewRate(totalRateCount / reviews?.length);

    setRateObject(ratingObject);
  };

  useEffect(() => {
    if (reviews?.length) {
      calculateAverageReviewCount();
    }
  }, [reviews]);

  const renderReviewItem = (count: number) => {
    const percent: any =
      reviews &&
      (rateObject[count] ? (rateObject[count] / reviews?.length) * 100 : 0);

    return (
      <div>
        <div>{count} star</div>
        <div>
          <span style={{ width: `${percent}%` }}></span>
        </div>
        <div>{percent?.toFixed(2)}%</div>
      </div>
    );
  };

  return (
    <Col xs={12} lg={5}>
      <Card>
        <div className={styles.customerReviews}>
          <div
            className={styles.reviewTitle}
            dangerouslySetInnerHTML={{ __html: `Customer Reviews` }}
          />
          <div className={styles.avgStars}>
            <ReactStars
              value={averageReviewRate || 0}
              count={5}
              size={30}
              half={false}
              edit={false}
              color1="#0000002e"
              color2="#DAA520"
            />
            <span>{averageReviewRate?.toFixed(1)} out of 5</span>
          </div>
          <p className={styles.totalStars}>
            Total - {reviews && numberWithCommas(reviews?.length?.toString())}{" "}
            ratings
          </p>

          <div className={styles.stats}>
            {renderReviewItem(5)}
            {renderReviewItem(4)}
            {renderReviewItem(3)}
            {renderReviewItem(2)}
            {renderReviewItem(1)}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ReviewOverView;
