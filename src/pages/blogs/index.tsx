import { GetServerSidePropsContext } from "next";
import React from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import BlogMainView from "../../mainViews/blogMainView/BlogMainView";
import instance from "../../services/baseServices";
import { IBlogItem } from "../../shared/interface";

interface IBlogPage {
  blogList: IBlogItem[]
}

const BlogPage = (props: IBlogPage) => {
  const {blogList} = props;

  return (
    <PublicLayout>
      <BlogMainView blogList={blogList} />
    </PublicLayout>
  );
};

export default BlogPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const blogList: any = await instance.post("/blogs");

  return {
    props: {
      blogList: blogList?.data || null,
    },
  };
}
