import React from "react";

interface IContentView {
  content: any;
}

const ContentView = (props: IContentView) => {
  const { content } = props;
  return <>{content}</>;
};

export default ContentView;
