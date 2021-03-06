import React, { useEffect } from "react";
import styled from "styled-components";

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
const Caution = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  color: red;
  font-size: 12px;
`;

const PhoneNumber = ({
  type,
  label = "휴대폰 번호",
  caution = "휴대폰 번호 항목은 필수 정보입니다",
  number,
  setNumber,
}) => {
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    if (number.length === 10) {
      setNumber(number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (number.length === 13) {
      setNumber(
        number.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [number]);

  return (
    <Container>
      <Text>{label}</Text>
      <Input
        type={type}
        value={number}
        onChange={(e) => onChangeNumber(e)}
        required
      />
      {number === "" ? <Caution>{caution}</Caution> : null}
    </Container>
  );
};

export default PhoneNumber;
