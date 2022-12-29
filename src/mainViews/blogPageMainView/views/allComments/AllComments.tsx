import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, FormControl, FormGroup, Row } from "react-bootstrap";
import instance from "../../../../services/baseServices";
// import { BlogService } from "../../../../database/DatabaseService";
import { triggerForm } from "../../../../services/internalServices";

import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import SingleMainComment from "../singleMainComment/SingleMainComment";
import styles from "./style.module.scss";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const AllComments = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const [loading, setLoading] = useState(false);
  const { loggedInUser, setAuthEnable } = useRoot();

  const [mainCommentList, setMainCommentList] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const getAllMainComments = async () => {
    const list: any = await instance.post(`comments/${blogId}`);

    setMainCommentList(list.data);
  };

  useEffect(() => {
    if (blogId) {
      getAllMainComments();
    }
  }, [blogId]);

  const postComment = async () => {
    if (!loggedInUser) {
      setAuthEnable(true);

      return;
    }
    setLoading(true);
    if (!commentInput) {
      triggerForm({
        title: "",
        text: "Comment Field is Empty!",
        icon: "error",
        confirmButtonText: "OK",
      });

      setLoading(false);
      return;
    }
    try {
      await instance.post(`/updateMainComment/${blogId}`, {
        name: loggedInUser.name || "",
        email: loggedInUser.email,
        comment: commentInput,
        date: dayjs().unix(),
        childComments: [],
      });

      getAllMainComments();

      triggerForm({
        title: "",
        text: `Comment Submitted`,
        icon: "success",
        confirmButtonText: "OK",
      });
      setCommentInput("");
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
  };

  return (
    <div className={styles.responses}>
      <hr />
      <h4 className="mb-3">Responses ({mainCommentList?.length})</h4>
      <FormGroup className="mb-3 pb-2">
        <Row className="form-row">
          <Col>
            <FormControl
              onChange={(event) => setCommentInput(event.target.value)}
              placeholder="What are your thoughts?"
              type="text"
              value={commentInput}
            />
          </Col>
          <Col md="auto" className="mt-2 mt-md-0">
            <div className="text-end">
              <Button loading={loading} onClick={postComment}>
                Post
              </Button>
            </div>
          </Col>
        </Row>
      </FormGroup>
      <div>
        <h3>Latest comments</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.responses}>
          {mainCommentList.map((singleMainComment, index) => {
            return (
              <SingleMainComment
                key={index}
                singleMainComment={singleMainComment}
                refreshComment={getAllMainComments}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllComments;
