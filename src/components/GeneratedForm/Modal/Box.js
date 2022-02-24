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
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 36px;
  cursor: pointer;
`;

const Box = ({ handleModal }) => {
  return (
    <>
      <Wrapper onClick={handleModal} />
      <Header>
        <Icon />
      </Header>
      <Container onClick={(e) => e.stopPropagation()}>
        <DaumPost />
      </Container>
    </>
  );
};

export default Box;
