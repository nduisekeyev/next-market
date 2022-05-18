import React from "react";
import Router from "next/router";
import MainLayout from "../../components/MainLayout";
import { NextPage } from "next";
import { Typography } from "@mui/material";

interface AboutProps {
  title: string;
}

const About: NextPage<AboutProps> = ({ title }) => {
  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <Typography variant="h3">{title}</Typography>

      <button onClick={linkHandler}>Go Back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go To Posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return { title: data.title };
};

export default About;
