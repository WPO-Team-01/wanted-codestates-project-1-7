import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SubContainer = styled.div`
  width: 95%;
  height: 32px;
  display: flex;
  align-items: center;
`;
const Check = styled.input`
  display: none;
  width: 32px;
  height: 32px;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
`;
const Span = styled.span`
  width: 90%;
`;
const Arrow = styled.img`
  width: 25px;
  height: 25px;
`;

const CheckBox = ({ text = "개인정보 수집 약관 동의 (필수)" }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <SubContainer onClick={handleCheckBox}>
        <Img src={checked ? "image/checked.png" : "image/unChecked.png"} />
        <Check checked={checked} />
        <Span>{text}</Span>
      </SubContainer>
      <Link to="/2">
        <Arrow src="image/right-arrow.png" />
      </Link>
    </Container>
  );
};

export default CheckBox;
