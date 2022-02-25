import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 400px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ completed }) => (completed ? "#fd6c6b" : "#fdd6dd")};
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
  color: white;
`;

const Button = ({ name = "제출하기", completed, postData }) => {
  return (
    <Container onClick={postData} completed={completed}>
      {name}
    </Container>
  );
};

export default Button;
