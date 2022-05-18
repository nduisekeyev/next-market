import { Box, Typography } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import MainLayout from "../components/MainLayout";

interface DataType {
  id: number;
  title: string;
  description: string;
}

interface ProductType {
  uniUidRef: number;
}

interface HomeProps {
  data: DataType;
  products: ProductType;
}

const Home: NextPage<HomeProps> = ({ data, products }: HomeProps) => {
  const { title, description } = data;
  console.table(products);

  return (
    <MainLayout title={"Home"}>
      <Typography variant="h3">Home Page</Typography>
      <Box>{title}</Box>
      <Box>{description}</Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/images/frame.png"
          alt="Picture of the product"
          width={300}
          height={200}
        ></Image>
        <Image
          src="/images/frame.png"
          alt="Picture of the product"
          width={300}
          height={200}
        ></Image>
        <Image
          src="/images/frame.png"
          alt="Picture of the product"
          width={300}
          height={200}
        ></Image>
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const response = await fetch(`${process.env.API_URL}/home`);
  const productsResponse = await fetch(
    `${process.env.API_URL}/featuredProducts`
  );
  const data = await response.json();
  const products = await productsResponse.json();
  return { props: { data, products } };
};

export default Home;
