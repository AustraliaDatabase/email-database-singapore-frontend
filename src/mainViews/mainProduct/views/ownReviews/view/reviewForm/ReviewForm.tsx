import { Formik, Field, Form as FormikForm } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactStars from "react-stars";
import instance from "../../../../../../services/baseServices";
import { triggerForm } from "../../../../../../services/internalServices";
import Button from "../../../../../../shared/components/button/Button";
import { useRoot } from "../../../../../../shared/contexts/RootProvider";
import {
  capitalizeFirstLetter,
  validateRequired,
} from "../../../../../../shared/InternalService";

import styles from "./styles.module.scss";

const ReviewForm = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const [loading, setLoading] = useState(false);

  const { loggedInUser } = useRoot();
  const router = useRouter();

  const productId = router.query.productId || router?.pathname?.replace('/', '');

  const userName = capitalizeFirstLetter(loggedInUser?.email?.split("@")[0]);

  const ratingChanged = (stars: any) => {
    setSelectedStar(stars);
  };

  return (
    <Col xs={12} lg={7} className="mt-5 mt-lg-0">
      <div className={styles.reviewFormWrapper}>
        <div
          className={styles.leaveReview}
          dangerouslySetInnerHTML={{ __html: `Leave a review` }}
        />
        <div className={styles.userInfo}>
          <div className={styles.placeHolder}>
            <span>{userName.slice(0, 1)}</span>
          </div>
          <div className={styles.userName}>
            <span>{userName}</span>
            <span>Your review will be posted publicly</span>
          </div>
        </div>
        <ReactStars
          value={selectedStar}
          count={5}
          onChange={ratingChanged}
          size={30}
          half={false}
          color1="#0000002e"
          color2="#DAA520"
        />
        <div>
          <Formik
            initialValues={{
              name: "",
              reviewMsg: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              
              if (!productId) {
                triggerForm({
                  title: "",
                  text: "Product Id Not found!",
                  icon: "error",
                  confirmButtonText: "OK",
                });
                return;
              }

              const reviewMsg = values.reviewMsg;
              const name = values.name;

              if (!name || !reviewMsg) {
                triggerForm({
                  title: "",
                  text: "Fields are Empty!",
                  icon: "error",
                  confirmButtonText: "OK",
                });
                return;
              }

              if (selectedStar === 0) {
                triggerForm({
                  title: "",
                  text: "Rating scale is between 1-5. You have to select at least 1 star",
                  icon: "error",
                  confirmButtonText: "OK",
                });
                return;
              }

              try {
                setLoading(true);
                await instance.post(`/updateReview/${productId}`, {
                  author: loggedInUser?.displayName,
                  ratingValue: selectedStar,
                  name,
                  reviewBody: reviewMsg,
                });

                triggerForm({
                  title: "",
                  text: `The review was posted Successfully! Your review will appear publicly soon.`,
                  icon: "success",
                  confirmButtonText: "OK",
                });

                setLoading(false);
              } catch (error: any) {
                triggerForm({
                  title: "",
                  text: error.response.data?.message || error.response.data,
                  icon: "error",
                  confirmButtonText: "OK",
                });
                setLoading(false);
              }

              resetForm();
              setSelectedStar(0);
            }}
          >
            {({ errors, touched, isValidating, values }: any) => (
              <FormikForm>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="mt-3">Title</Form.Label>
                  <Field
                    validate={validateRequired}
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Share details of your own experiance about this product"
                  />
                  {errors.name && (
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                  )}
                  <div>
                    <Form.Label validate={validateRequired} className="mt-3">
                      Write your review
                    </Form.Label>
                  </div>
                  <Field
                    validate={validateRequired}
                    name="reviewMsg"
                    id="reviewMsg"
                    as="textarea"
                    rows={3}
                    placeholder="Share details of your own experiance about this product"
                  />
                  {errors.reviewMsg && (
                    <Form.Text className="text-danger">
                      {errors.reviewMsg}
                    </Form.Text>
                  )}
                </Form.Group>
                <Button loading={loading} type="submit">
                  Submit Review
                </Button>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </Col>
  );
};

export default ReviewForm;
