import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { createRef, useEffect, useState } from "react";
import dayjs from "dayjs";

import styles from "./blogPageMainView.module.scss";
import ReadingProgress from "../../shared/components/readingProgress/ReadingProgress";
// import { BlogService } from "../../database/DatabaseService";
import { useRouter } from "next/router";
import { IBlogItem } from "../../shared/interface";
import AllComments from "./views/allComments/AllComments";
import Image from "next/image";
import instance from "../../services/baseServices";
import { triggerForm } from "../../services/internalServices";

const BlogPageMainView = () => {
  const target: any = createRef();
  const router = useRouter();
  const [blogList, setBlogList] = useState<IBlogItem | null>(null);
  const [loading, setLoading] = useState(false);

  const blogId = router.query.blogId;

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const list: any = await instance.post(`/blogs/${blogId}`);
      setBlogList(list.data);
      setLoading(false);
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
    getAllBlogs();
  }, [blogId]);

  if (loading) {
    return (
      <div
        className="d-flex w-100 align-items-center justify-content-center"
        style={{ height: 300 }}
      >
        <div
          className="d-flex align-items-center justify-content-center spinner-grow text-primary"
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress target={target} />
      <Container className="static-content" ref={target}>
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="text-center mb-2">{blogList?.blogTitle}</h1>
            <p className="text-center">
              {dayjs.unix(Number(blogList?.date)).format("DD MMM YYYY")}{" "}
              &middot; {blogList?.blogAuthor}
              &middot; {blogList?.duration} Minutes Read
            </p>
            <section className="pt-4">
              <div className="d-flex cover w-100 mb-4 align-items-center justify-content-center">
                {blogList?.blogImage && (
                  <Image
                    src={blogList.blogImage}
                    layout="fixed"
                    height={400}
                    width={880}
                  />
                )}
              </div>
              <div className={styles.content}>
                {blogList?.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogList?.content,
                    }}
                  />
                )}
                <AllComments />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPageMainView;
