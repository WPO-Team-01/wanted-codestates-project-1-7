import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
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

const Agreement = ({ setAgreement }) => {
  const closeAgreement = () => {
    setAgreement(false);
  };

  return (
    <>
      <Container>
        <Header>
          <Img src="image/left-arrow.png" onClick={closeAgreement} />
          <Title> 개인정보 수집 약관 동의</Title>
        </Header>
        <Description>(개인정보 수집 및 약관 내용)</Description>
      </Container>
    </>
  );
};

export default Agreement;
