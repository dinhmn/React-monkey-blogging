import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 25px;
  line-height: 1;
  color: white;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 8px;
  font-weight: 600px;
  font-size: 18px;
  width: 100%;
`;
const Button = () => {
  return <ButtonStyles>Sign up</ButtonStyles>;
};

export default Button;
