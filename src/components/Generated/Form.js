import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 107px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0 auto;
`;
const Text = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  font-size: 12px;
`;
const Input = styled.input`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 0.5rem;
  background: #f8fafb;
  margin: auto;
`;
const Caution = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  color: red;
  font-size: 12px;
`;

const Form = ({
  type = "text",
  title = "이름",
  caution = "이름 항목은 필수 정보입니다",
}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Input type={type}></Input>
      <Caution>{caution}</Caution>
    </Container>
  );
};

export default Form;
