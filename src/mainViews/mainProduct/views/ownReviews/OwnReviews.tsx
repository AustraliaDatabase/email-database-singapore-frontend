import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { IReviewItem, IReviewObject } from "../../../../shared/interface";
import ReviewForm from "./view/reviewForm/ReviewForm";
import ReviewOverView from "./view/reviewOverView/ReviewOverView";
import UserAllReview from "./view/userAllReview/UserAllReview";

interface IOwnReviews {
  reviewObject?: IReviewObject;
  name?: string;
}

const OwnReviews = (props: IOwnReviews) => {
  const { reviewObject, name } = props;

  const [reviewInputVisible, setReviewInputVisible] = useState(false);
  const [currentReviews, setCurrentReviews] = useState<IReviewItem[]>([]);

  const { loggedInUser, setAuthEnable } = useRoot();

  const pressReview = () => {
    if (!loggedInUser) {
      setAuthEnable(true);
    } else {
      setReviewInputVisible(true);
    }
  };

  useEffect(() => {
    const currentReviewsTemp: any =
      reviewObject &&
      reviewObject?.reviews?.filter((element) => {
        return element.enable;
      });

    setCurrentReviews(currentReviewsTemp);
  }, [reviewObject]);

  return (
    <Container>
      <Row>
        {loggedInUser && reviewInputVisible ? (
          <ReviewForm />
        ) : (
          <Col
            xs={12}
            lg={7}
            className="mt-5 mt-lg-0 d-flex align-items-center justify-content-center"
          >
            <Button onClick={pressReview}>Write a Review</Button>
          </Col>
        )}
        <ReviewOverView reviews={currentReviews} />

        {currentReviews?.length ? (
          <UserAllReview reviews={currentReviews} name={name} />
        ) : null}
      </Row>
    </Container>
  );
};

export default OwnReviews;
