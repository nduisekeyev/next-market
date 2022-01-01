import React, { FunctionComponent, useState, useEffect } from "react";
import Router from "next/router";
import MainLayout from "../components/MainLayout";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  const [posts, setPosts] = useState([]);

  // Without using SSR, since <pre>[]</pre> - an empty array
  // useEffect(() => {
  //   const load = async () => {
  //     const response = await fetch("http://localhost:4200/posts");
  //     const json = await response.json();
  //     setPosts(json);
  //   };
  //   load();
  // }, []);

  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"Posts"}>
      <h1>Posts</h1>
      <button onClick={linkHandler}>Go Back to Home</button>
      <pre>{JSON.stringify([], null, 2)}</pre>
    </MainLayout>
  );
};

export default Posts;

// posts
// post/47
