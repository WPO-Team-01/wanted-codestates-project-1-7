import React from "react";
import styled from "styled-components";
import DaumPost from "../DaumPostCode";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
const Text = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const Box = ({ handleModal, setAddress }) => {
  return (
    <>
      <Wrapper onClick={handleModal} />
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>
          <Icon>&times;</Icon>
          <Text>배송 주소</Text>
        </Header>
        <DaumPost setAddress={setAddress} />
      </Container>
    </>
  );
};

export default Box;
