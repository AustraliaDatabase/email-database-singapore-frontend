import classNames from "classnames";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "../../shared/components/card/Card";
import { IBlogItem } from "../../shared/interface";

import styles from "./blogMainView.module.scss";

interface IBlogMainView {
  blogList: IBlogItem[];
}

const BlogMainView = (props: IBlogMainView) => {
  const { blogList } = props;

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center">Our Blog</h1>
        </Col>
        <Col xs="12">
          <Row className="form-row">
            {blogList?.map((element: IBlogItem, index) => {
              return (
                <Col md={6} key={index} className="mb-3">
                  <Card className={classNames("p-0", styles.card)}>
                    <div className={styles.thumbnail}>
                      <Image
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        src="/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"
                        width={150}
                        height={200}
                        alt="Blog post"
                      />
                    </div>
                    <div className="p-3 position-relative">
                      <h3>{element.blogTitle}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: element.content,
                        }}
                      />
                      <div className={styles.shade} />
                      <a
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${element.uniqueName}`}
                        className={styles.action}
                      >
                        Read Now
                        <small>{element.duration} minutes read</small>
                      </a>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogMainView;
