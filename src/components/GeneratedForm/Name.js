import React from "react";
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

const Name = ({
  type = "text",
  title = "이름",
  caution = "이름 항목은 필수 정보입니다",
  name,
  setName,
}) => {
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <Container>
      <Text>{title}</Text>
      <Input
        type={type}
        value={name}
        onChange={(e) => onChangeName(e)}
        placeholder="주민등록상 이름 입력"
        required
      />
      {name === "" ? <Caution>{caution}</Caution> : null}
    </Container>
  );
};

export default Name;
