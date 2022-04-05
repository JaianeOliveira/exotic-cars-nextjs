/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import { Card, Container, Carrousel, Button } from "./styles";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const MyCarrousel = (
  carDetails: { id: number; color: string; image: string }[]
) => {
  const [items, setItems] = useState(carDetails);
  const next = () => {
    const newArr = [...items, items[0]];
    newArr.shift();
    setItems(newArr);
  };

  const back = () => {
    const newArr = [...items];
    newArr.unshift(items[items.length - 1]);
    newArr.pop();
    setItems(newArr);
  };

  const focusItem = () => {
    return items[1];
  };

  const RenderCarrousel = () => {
    return (
      <Container>
        <Button onClick={back}>
          <BsFillArrowLeftCircleFill size={30} color="#313136" />
        </Button>
        <Carrousel>
          {items.map((item: { id: number; color: string; image: string }) => (
            <Card key={item.id} isFocused={focusItem().id === item.id}>
              <Image src={item.image} width={300} height={180} />
            </Card>
          ))}
        </Carrousel>
        <Button onClick={next}>
          <BsFillArrowRightCircleFill size={30} color="#313136" />
        </Button>
      </Container>
    );
  };

  return {
    RenderCarrousel,
    focusItem,
  };
};

export default MyCarrousel;
