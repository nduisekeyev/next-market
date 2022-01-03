import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { NextPage, NextPageContext } from "next";
import MainLayout from "../../components/MainLayout";
import { MyPost } from "../../interfaces/posts";

interface PostProps {
  post: MyPost;
}

const Post: NextPage<PostProps> = ({ post: serverPost }) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      console.log("data", data);
      setPost(data);
    };

    if (!serverPost) {
      load();
    }
  }, [router.query.id, serverPost]);

  return (
    <>
      {!post ? (
        <MainLayout title={"Loading"}>Loading...</MainLayout>
      ) : (
        <MainLayout title={"Post"}>
          <h1>Post {post.id}</h1>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <Link href={"/posts"}>
            <a>Back to all posts</a>
          </Link>
        </MainLayout>
      )}
    </>
  );
};

// If want to combine Backend and Frontend, better use getInitialProps
Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null }; // if there is no post from server return null
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return { post };
};

// using SSR only with next js getServerSideProps recommended to use
// difference from getInitialProps that only runs on server-side and never runs on the browser.
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//   console.log("post", post);

//   return { props: { post } };
// };

export default Post;
