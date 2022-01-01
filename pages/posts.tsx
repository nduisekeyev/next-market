import React, { FunctionComponent, useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import MainLayout from "../components/MainLayout";

interface PostsProps {
  posts: any;
}

const Posts = ({ posts: serverPosts }: PostsProps) => {
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

export default Posts;

Posts.getInitialProps = async ({ req }: any) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return { posts };
};

// posts
// post/47
