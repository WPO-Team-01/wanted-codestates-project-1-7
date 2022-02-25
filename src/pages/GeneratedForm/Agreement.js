import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  position: relative;
  width: 25px;
  height: 25px;
`;
const Header = styled.div`
  width: 448px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
const Title = styled.div`
  width: 90%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Description = styled.div`
  width: 448px;
  height: 65px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Agreement = () => {
  return (
    <Container>
      <Header>
        <Link to="/1">
          <Img src="image/left-arrow.png" />
        </Link>
        <Title> 개인정보 수집 약관 동의</Title>
      </Header>
      <Description>(개인정보 수집 및 약관 내용)</Description>
    </Container>
  );
};

export default Agreement;
