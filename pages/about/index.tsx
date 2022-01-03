import React, { FunctionComponent } from "react";
import Router from "next/router";
import MainLayout from "../../components/MainLayout";
import { NextPage } from "next";

interface AboutProps {
  title: string;
}

const About: NextPage<AboutProps> = ({ title }) => {
  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <h1>{title}</h1>

      <button onClick={linkHandler}>Go Back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go To Posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();
  return { title: data.title };
};

export default About;
