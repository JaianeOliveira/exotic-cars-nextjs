import type { NextPage } from "next";

import { Card } from "components";
import car from "types/car";

import { Screen } from "./styles";

const Home: NextPage = ({ data }: any) => {
  return (
    <Screen>
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
