import React from "react";
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

const CheckBox = ({ label, checked, setChecked, setAgreement }) => {
  const handleCheckBox = () => {
    setChecked(!checked);
  };

  const openAgreement = () => {
    setAgreement(true);
  };

  return (
    <Container>
      <SubContainer onClick={handleCheckBox}>
        <Img src={checked ? "image/checked.png" : "image/unChecked.png"} />
        <Check checked={checked} onChange={() => {}} />
        <Span>{label}</Span>
      </SubContainer>

      <Arrow src="image/right-arrow.png" onClick={openAgreement} />
    </Container>
  );
};

export default CheckBox;
