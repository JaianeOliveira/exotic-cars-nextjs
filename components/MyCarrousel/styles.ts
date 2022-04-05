import styled from "styled-components";

export const Card = styled.div<{ isFocused: boolean }>`
  display: flex;
  height: 180px;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  transition: 0.4s all;

  img {
    transform: scale(${(props) => (props.isFocused ? 1.5 : 1)});
  }
  @media (max-width: 426px) {
    transform: scale(1);
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

export const Carrousel = styled.div`
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
