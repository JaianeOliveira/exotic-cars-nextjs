import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "components";
import { Screen } from "./styles";
import car from "types/car";

const Home: NextPage = ({ data }: any) => {
  return (
    <Screen>
      <Head>
        <title>Exotic Cars</title>
      </Head>
      {data.map((car: car) => (
        <Card key={car.id} {...car} />
      ))}
    </Screen>
  );
};

export const getServerSideProps = async (context: any) => {
  const response = await fetch(`http://localhost:3000/api/cars`)
    .then((response) => response.json())
    .catch((error) => error.json());

  return {
    props: {
      data: response,
    },
  };
};

export default Home;
