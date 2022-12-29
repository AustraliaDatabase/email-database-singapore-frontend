import { CheckCircle } from "phosphor-react";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-stars";
import Button from "../../../../../../shared/components/button/Button";
import { BUTTON_VARIANT_ENUM } from "../../../../../../shared/enums";

import { IReviewItem } from "../../../../../../shared/interface";
import styles from "./styles.module.scss";

interface IUserAllReview {
  reviews?: IReviewItem[];
  name?: string;
}

const UserAllReview = (props: IUserAllReview) => {
  const { reviews, name } = props;
  const [reviewItemList, setReviewItemList] = useState(
    reviews?.[0] ? [reviews?.[0]] : []
  );

  const pressReview = (isPress: boolean) => {
    if (isPress) {
      setReviewItemList(reviews || []);
    } else {
      setReviewItemList(reviews?.[0] ? [reviews?.[0]] : []);
    }
  };

  const reviewList = reviewItemList?.map((reviewItem: IReviewItem) => {
    return (
      <>
        <Col xs={12}>
          <Row className={styles.reviewRow}>
            <Col xs={9}>
              <div className={styles.reviewTopLeft}>
                <ReactStars
                  edit={false}
                  value={reviewItem?.ratingValue}
                  size={30}
                  half={true}
                  color1="#0000002e"
                  color2="#DAA520"
                />
                <div className={styles.shortReview}>{reviewItem?.name}</div>
                <div className={styles.userName}>
                  By <span>{reviewItem?.author?.split("@")[0]}</span>
                </div>
                <div className={styles.buyerStatus}>
                  <div>
                    <CheckCircle size={20} weight="fill" />{" "}
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div className={styles.reviewDate}></div>
            </Col>
            <Col xs={12}>
              <p className={styles.review}>{reviewItem?.reviewBody}</p>
              <hr />
            </Col>
          </Row>
        </Col>
      </>
    );
  });

  return (
    <>
      <Col xs={12} className="mt-5">
        <div className={styles.reviewsTitle}>
          Reviews of Users who purchased {name} List
        </div>
      </Col>
      {reviewList}
      {reviews && reviews.length > 1 && reviewItemList?.length === 1 && (
        <div>
          <Button variant={BUTTON_VARIANT_ENUM.Text} onClick={() => pressReview(true)}>
            See More Reviews
          </Button>
        </div>
      )}
        {reviews && reviews.length > 1 && reviewItemList?.length > 1 && (
        <div>
          <Button variant={BUTTON_VARIANT_ENUM.Text} onClick={() => pressReview(false)}>
            See Less
          </Button>
        </div>
      )}
    </>
  );
};

export default UserAllReview;
