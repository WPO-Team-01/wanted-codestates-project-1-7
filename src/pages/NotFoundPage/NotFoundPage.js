import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  border: 1px solid #000;
  width: 100%;
  min-height: 70vh;
  padding: 0.5rem;
`;

const MessageBox = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  width: fit-content;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  cursor: pointer;
`;

const NotFound = () => {
  return (
    <Container>
      <MessageBox>올바르지 않은 접근입니다.</MessageBox>
      <BtnBox>
        <Btn>메인으로 돌아가기</Btn>
      </BtnBox>
    </Container>
  );
};

export default NotFound;
