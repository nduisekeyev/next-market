import React, { FunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";

interface MainProps {
  title: string;
}

const MainLayout: FunctionComponent<MainProps> = ({
  children,
  title = "Next App",
}) => {
  return (
    <div className="nav">
      <Head>
        <title>{title} | Next Market</title>
        <meta name="description" content="Next Market with a lot of products" />
        <meta name="keywords" content="Next Market" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: darkblue;
          color: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 1;
        }

        nav a {
          color: white;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
