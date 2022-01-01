import React, { FunctionComponent } from "react";
import Head from "next/head";
import Router from "next/router";
import MainLayout from "../components/MainLayout";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"Posts"}>
      <h1>Posts</h1>
      <button onClick={linkHandler}>Go Back to Home</button>
    </MainLayout>
  );
};

export default Posts;

// posts
// post/47
