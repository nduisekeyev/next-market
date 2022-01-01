import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

export default function Post() {
  const router = useRouter();
  console.log("router", router);
  return <h1>Post {router.query.id}</h1>;
}
