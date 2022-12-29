import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// import { BlogService } from "../../../../database/DatabaseService";
import SingleSubComment from "../singleSubComment/SingleSubComment";
import instance from "../../../../services/baseServices";
import { triggerForm } from "../../../../services/internalServices";

interface ISubComments {
  parentId: string;
  loading: boolean;
}

const SubComments = (props: ISubComments) => {
  const { parentId, loading } = props;
  const router = useRouter();
  const blogId = router.query.blogId;

  const [subCommentList, setSubCommentList] = useState([]);

  const getAllSubComments = async () => {
    try {
      const list: any = await instance.post(`/subComments/${blogId}`, {
        commentId: parentId,
      });

      setSubCommentList(list.data);
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    if (!loading) {
      getAllSubComments();
    }
  }, [blogId, loading]);

  return (
    <div>
      {subCommentList?.map((element, index) => {
        return (
          <SingleSubComment
            key={index}
            element={element}
            refreshSubComments={getAllSubComments}
            parentId={parentId}
          />
        );
      })}
    </div>
  );
};

export default SubComments;
