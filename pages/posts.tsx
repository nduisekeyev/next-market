import React, { FunctionComponent, useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { NextPage } from "next";
import MainLayout from "../components/MainLayout";

interface PostsProps {
  posts: any;
}

const Posts: NextPage<PostsProps> = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("http://localhost:4200/posts");
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
          <h1>Posts</h1>
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

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return { posts };
};

// export const getServerSideProps = async ({ req }: any) => {
//   const res = await fetch("http://localhost:4200/posts/");
//   const posts = await res.json();

//   if (!req) {
//     return {
//       posts: null,
//     };
//   }

//   return { props: { posts } };
// };

export default Posts;
