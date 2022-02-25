import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdd6dd;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
`;

const Button = ({ name = "제출하기", postData }) => {
  return <Container onClick={postData}>{name}</Container>;
};

export default Button;
