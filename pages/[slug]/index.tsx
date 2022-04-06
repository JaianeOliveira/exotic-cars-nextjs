/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import {
  Screen,
  CarDataContainer,
  Title,
  ColorDetail,
  BackToCatalogButton,
  BookNowButton,
} from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Carrousel } from "components";
import car from "types/car";

type errorData = {
  message: string;
};

const CarDetails = ({ data }: { data: car }) => {
  const { CarrouselComponent, focusItem } = Carrousel(data.details);
  return (
    <Screen>
      <Head>
        <title>
          {data.brand} {data.model}
        </title>
      </Head>
      <img className="bgImage" src={focusItem().image} alt={data.slug} />
      <CarDataContainer image={focusItem().image}>
        <Title>
          <img src={data.logo} alt={data.brand} />
          <div>
            <h1>
              {data.brand} {data.model}
            </h1>
            <p>
              {"$"}
              {data.price}/day
            </p>
          </div>
        </Title>
        <ColorDetail>
          <h3>0{focusItem().id}</h3>
          <p>{focusItem().color}</p>
        </ColorDetail>
        <Link href="/" passHref>
          <BackToCatalogButton>
            <BsArrowLeft />
            <p> Back to Catalog</p>
          </BackToCatalogButton>
        </Link>

        <BookNowButton>
          <p>Book Now</p>
          <BsArrowRight />
        </BookNowButton>
        <CarrouselComponent />
      </CarDataContainer>
    </Screen>
  );
};

export const getServerSideProps = async (context: any) => {
  const car = await fetch(`http://localhost:3000/api/${context.query.slug}`)
    .then((response) => response.json())
    .catch((error) => error.json());
  console.log(car);
  return {
    props: {
      data: car,
    },
  };
};

export default CarDetails;
