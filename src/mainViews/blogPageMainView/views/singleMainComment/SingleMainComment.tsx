import classNames from "classnames";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { User } from "phosphor-react";
import { useState } from "react";
import { Col, FormControl, FormGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import instance from "../../../../services/baseServices";
// import { BlogService } from "../../../../database/DatabaseService";
import { triggerForm } from "../../../../services/internalServices";

import Button from "../../../../shared/components/button/Button";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { IBlogComment } from "../../../../shared/interface";
import SubComments from "../subComments/SubComments";
import styles from "./style.module.scss";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

interface ISingleMainComment {
  singleMainComment: IBlogComment;
  refreshComment: Function;
}

const SingleMainComment = (props: ISingleMainComment) => {
  const router = useRouter();
  const { singleMainComment, refreshComment } = props;

  const { loggedInUser, setAuthEnable } = useRoot();

  const blogId = router.query.blogId;
  const [replyEnable, setReplyEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const replyPostComment = async (parentId: string) => {
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
      await instance.post(`/updateSubComment/${blogId}`, {
        name: loggedInUser.name || "",
        email: loggedInUser.email,
        comment: commentInput,
        date: dayjs().unix(),
        parentId,
      });

      triggerForm({
        title: "",
        text: `Comment Created`,
        icon: "success",
        confirmButtonText: "OK",
      });
      setCommentInput("");
      setLoading(false);
      setReplyEnable(false);
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

  const pressDelete = (parentId: string) => {
    Swal.fire({
      title: "",
      text: `Are you sure you want to remove this item?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#FF4800",
      cancelButtonColor: "#010F35",
      cancelButtonText: "No",
    }).then(async (result) => {
      setLoading(true);

      if (result.isConfirmed) {
        try {
          await instance.post(`/removeMainComment/${blogId}`, {
            parentId,
          });
          triggerForm({
            title: "",
            text: `Successfully Deleted`,
            icon: "success",
            confirmButtonText: "OK",
          });
          setLoading(false);
          refreshComment();
        } catch (error: any) {
          triggerForm({
            title: "",
            text: error.response.data?.message,
            icon: "error",
            confirmButtonText: "OK",
          });

          setLoading(false);
        }
      }
    });
  };

  return (
    <>
      <div className={classNames(styles.response, styles.hasReplies)}>
        <div className="d-flex">
          <span className={styles.icon}>
            <User size={18} />
          </span>
          <div className={styles.comment}>
            <p className={styles.name}>
              <b>{singleMainComment.name}</b>
            </p>
            <p className="mb-0">{singleMainComment.comment}</p>
          </div>
        </div>
        <div className={styles.time}>
          {/* @ts-ignore */}
          <small>{dayjs.unix(singleMainComment.date).fromNow()}</small>
          <span className="mx-2">&middot;</span>
          {!replyEnable && (
            <Button
              onClick={() => {
                setReplyEnable(true);
              }}
              variant="text"
              size="small"
            >
              Reply
            </Button>
          )}
          {singleMainComment.email === loggedInUser?.email && (
            <Button
              onClick={() => pressDelete(singleMainComment.id)}
              variant="text"
              size="small"
              className={styles.deleteButton}
            >
              Delete
            </Button>
          )}
        </div>

        <div>
          {replyEnable && (
            <FormGroup
              className="mb-3 pb-2"
              style={{ marginLeft: 48, marginTop: 16 }}
            >
              <Row className="form-row">
                <Col>
                  <FormControl
                    placeholder="What are your thoughts?"
                    type="text"
                    value={commentInput}
                    onChange={(event) => setCommentInput(event.target.value)}
                  />
                </Col>
                <Col md="auto" className="mt-2 mt-md-0">
                  <div className="d-flex text-end" style={{ gap: 10 }}>
                    <Button
                      loading={loading}
                      variant="secondary"
                      onClick={() => replyPostComment(singleMainComment.id)}
                    >
                      Post
                    </Button>
                    <Button
                      variant="tertiary"
                      onClick={() => setReplyEnable(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </Col>
              </Row>
            </FormGroup>
          )}
        </div>

        <div className={styles.replies}>
          <SubComments parentId={singleMainComment.id} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default SingleMainComment;
