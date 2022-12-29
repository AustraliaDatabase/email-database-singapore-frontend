import React, { useState } from "react";
import { User } from "phosphor-react";
import { Col, FormControl, FormGroup, Row } from "react-bootstrap";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import Button from "../../../../shared/components/button/Button";
import styles from "./style.module.scss";
// import { BlogService } from "../../../../database/DatabaseService";
import { triggerForm } from "../../../../services/internalServices";
import { useRoot } from "../../../../shared/contexts/RootProvider";
import { IBlogComment } from "../../../../shared/interface";
import instance from "../../../../services/baseServices";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

interface ISingleSubComment {
  element: IBlogComment;
  refreshSubComments: Function;
  parentId: string;
}

const SingleSubComment = (props: ISingleSubComment) => {
  const { element, refreshSubComments, parentId } = props;

  const router = useRouter();
  const { loggedInUser, setAuthEnable } = useRoot();

  const blogId = router.query.blogId;

  const [loading, setLoading] = useState(false);

  const [replyEnable, setReplyEnable] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const replyPostComment = async () => {
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
      refreshSubComments();
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

  const pressDelete = () => {
    Swal.fire({
      title: "",
      text: `Are you sure you want to remove this item?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#FF4800",
      cancelButtonColor: "#010F35",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await instance.post(`/removeSubComment/${blogId}`, {
            parentId,
            subCommentId: element.id,
          });

          triggerForm({
            title: "",
            text: `Successfully Deleted`,
            icon: "success",
            confirmButtonText: "OK",
          });
          setLoading(false);
          refreshSubComments();
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
      setLoading(true);
    });
  };

  return (
    <>
      <div className="d-flex">
        <div className={styles.line}></div>
        <div className={styles.response}>
          <span className={styles.icon}>
            <User size={18} />
          </span>
          <div className={styles.comment}>
            <p className={styles.name}>
              <b>{element.name}</b>
            </p>
            <p className="mb-0">{element.comment}</p>
          </div>
          <div className={styles.time}>
            {/* @ts-ignore */}
            <small>{dayjs.unix(element.date).fromNow()}</small>
            <span className="mx-2">&middot;</span>
            <Button
              onClick={() => setReplyEnable(true)}
              variant="text"
              size="small"
            >
              Reply
            </Button>
            {element.email === loggedInUser?.email && (
              <Button
                onClick={pressDelete}
                variant="text"
                size="small"
                className={styles.deleteButton}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </div>
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
                  onClick={() => replyPostComment()}
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
    </>
  );
};

export default SingleSubComment;
