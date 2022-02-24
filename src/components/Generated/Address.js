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

const Address = ({ title = "배송지" }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Input />
    </Container>
  );
};

export default Address;
