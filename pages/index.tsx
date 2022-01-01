import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout title={"Home"}>
      <h1>Home Page</h1>
    </MainLayout>
  );
};

export default Home;
