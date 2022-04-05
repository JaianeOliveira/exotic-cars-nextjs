/* eslint-disable @next/next/no-img-element */
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
  const [isLeftDirection, setIsLeftDirection] = useState(false);
  const next = () => {
    const newArr = [...items, items[0]];
    newArr.shift();
    setItems(newArr);
    setIsLeftDirection(false);
  };

  const back = () => {
    const newArr = [...items];
    newArr.unshift(items[items.length - 1]);
    newArr.pop();
    setItems(newArr);
    setIsLeftDirection(true);
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
            <Card
              key={item.id}
              isFocused={focusItem().id === item.id}
              isLeft={isLeftDirection}
            >
              <img src={item.image} alt={item.color} />
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
