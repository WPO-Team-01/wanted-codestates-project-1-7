import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 254px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  font-size: 12px;
`;
const Address = styled.input`
  width: 360px;
  height: 216px;
  border: none;
  border-radius: 0.5rem;
  background: #f8fafb;
  margin: auto;
`;
const Descripton = styled.p`
  display: flex;
  font-size: 12px;
`;

const InputFile = ({
  title = "첨부파일 (선택)",
  description = "첨부파일은 위와 같이 입력할 수 있습니다",
}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Address />
      <Descripton>{description}</Descripton>
    </Container>
  );
};

export default InputFile;
