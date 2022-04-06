import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-300px);
}
to {
  opacity: 1;
}
`;

const slideOut = keyframes`
from {
  opacity: 0;
  transform: translateX(300px);
}
to {
  opacity: 1;
}
`;
export const Card = styled.div<{ isFocused: boolean; isLeft: boolean }>`
  display: flex;
  height: 180px;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  transition: 0.4s all;

  img {
    transform: scale(${(props) => (props.isFocused ? 1.5 : 1)});
    animation: ${(props) => (!props.isLeft ? slideIn : slideOut)} 0.5s ease;

    @media (max-width: 426px) {
      transform: scale(1);
    }
  }
`;
export const Container = styled.div`
  position: fixed;
  bottom: 2vh;
  display: flex;
  flex-direction: row;
  width: 90%;
  max-height: 25vh;
  justify-content: space-between;
  background-color: transparent;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background: transparent;
  margin-right: 20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
