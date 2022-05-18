import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { NextPage, NextPageContext } from "next";
import MainLayout from "../components/MainLayout";
import { MyPost } from "../interfaces/posts";
import { Typography } from "@mui/material";

interface PostsProps {
  posts: MyPost[];
}

const Posts: NextPage<PostsProps> = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const json = await response.json();
      setPosts(json);
    };
    if (!posts) {
      load();
    }
  }, [posts]);

  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <>
      {!posts ? (
        <MainLayout title={"Loading"}>Loading...</MainLayout>
      ) : (
        <MainLayout title={"Posts"}>
          <Typography variant="h3">Posts</Typography>
          <button onClick={linkHandler}>Go Back to Home</button>

          <ul>
            {posts.map((post: any) => (
              <li key={post.id}>
                <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </MainLayout>
      )}
    </>
  );
};

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts = await response.json();

  return { posts };
};

// export const getServerSideProps = async ({ req }: any) => {
//   const res = await fetch("http://localhost:4300/posts/");
//   const posts = await res.json();

//   if (!req) {
//     return {
//       posts: null,
//     };
//   }

//   return { props: { posts } };
// };

export default Posts;
