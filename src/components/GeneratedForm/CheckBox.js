import React from "react";
import styled from "styled-components";

const Container = styled.label`
  width: 400px;
  height: 32px;
  display: flex;
  align-items: center;
`;
const Check = styled.input`
  width: 32px;
  height: 32px;
`;
const Span = styled.span``;
const Arrow = styled.a`
  width: 32px;
  height: 32px;
`;

const CheckBox = ({ text = "개인정보 수집 약관 동의 (필수)" }) => {
  return (
    <Container>
      <Check />
      <Span>{text}</Span>
      <Arrow />
    </Container>
  );
};

export default CheckBox;
