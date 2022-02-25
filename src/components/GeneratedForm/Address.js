import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Modal/Box";

const Container = styled.div`
  width: 400px;
  height: 107px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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

const Address = ({ label, address, setAddress }) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((open) => !open);
  };
  const deleteInputValue = () => {
    setAddress((address) => "");
  };

  return (
    <>
      {open ? (
        <Box
          handleModal={handleModal}
          address={address}
          setAddress={setAddress}
        />
      ) : null}
      <Container>
        <Text>{label}</Text>
        <Input
          onClick={() => {
            handleModal();
            deleteInputValue();
          }}
          value={address}
          onChange={() => {}}
          required
        />
      </Container>
    </>
  );
};

export default Address;
