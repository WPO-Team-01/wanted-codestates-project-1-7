import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Modal/Box";

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
  font-weight: bold;
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
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((open) => !open);
  };
  return (
    <>
      {open ? <Box handleModal={handleModal} /> : null}
      <Container>
        <Text>{title}</Text>
        <Input onClick={handleModal} />
      </Container>
    </>
  );
};

export default Address;
