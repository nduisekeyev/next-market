import React, { FunctionComponent } from "react";
import Router from "next/router";
import MainLayout from "../../components/MainLayout";

interface AboutProps {
  title: string;
  description: string;
}

const About: FunctionComponent<AboutProps> = ({ title, description }) => {
  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <h1>About Page</h1>

      <button onClick={linkHandler}>Go Back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go To Posts</button>
    </MainLayout>
  );
};

export default About;
