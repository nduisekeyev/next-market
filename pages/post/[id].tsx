import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

interface PostProps {
  post: PostServerProps;
}

interface PostServerProps {
  id: number;
  title: string;
  body: string;
}

export default function Post({ post: serverPost }: PostProps) {
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
}

Post.getInitialProps = async ({ query, req }: any) => {
  if (!req) {
    return { post: null }; // if there is no post from server return null
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  console.log("post", post);

  return { post };
};
