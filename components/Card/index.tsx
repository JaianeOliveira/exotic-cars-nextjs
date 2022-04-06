import React from "react";
import Link from "next/link";

import {
  CardContainer,
  Background,
  BottomRow,
  BrandAndModel,
  TopRow,
  Price,
  MoreOptionsButton,
} from "./styles";
import { BsThreeDots } from "react-icons/bs";
import car from "types/car";
import Colors from "utils/constants/colors";

const Card = (props: car) => {
  console.log(props.image);
  return (
    <Link href={`/${props.slug}`} passHref>
      <CardContainer key={props.id}>
        <Background image={props.image}>
          <TopRow>
            <BrandAndModel>
              <h3>{props.brand}</h3>
              <p>{props.model}</p>
            </BrandAndModel>
            <MoreOptionsButton>
              <BsThreeDots color={Colors.treeDotsIconColor} size={24} />
            </MoreOptionsButton>
          </TopRow>
          <BottomRow>
            <Price>
              <h3>
                $ {props.price}
                <span>/day</span>
              </h3>
            </Price>
          </BottomRow>
        </Background>
      </CardContainer>
    </Link>
  );
};

export default Card;
