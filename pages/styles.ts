import styled from "styled-components";

export const CenteredDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  flex: 1;
  height: 100vh;
  padding: 10vh 8vw;
`;

export const TryAgainButton = styled.button`
  background-color: ${(props) => props.theme.authButtonBlue};
  border: none;
  outline: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
