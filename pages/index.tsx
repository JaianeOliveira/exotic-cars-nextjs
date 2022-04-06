import Head from "next/head";
import { Card } from "components";
import { Screen } from "styles/page-styles/home";
import car from "types/car";

const Home = ({ data }: { data: car[] }) => {
  if (!data[0].slug) {
    return <div>Error</div>;
  }
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
    .catch((error) => JSON.stringify(error));

  return {
    props: {
      data: response,
    },
  };
};

export default Home;
