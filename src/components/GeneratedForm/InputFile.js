import React from "react";
import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

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
  font-weight: bold;
`;
// const Address = styled.input`
//   width: 360px;
//   height: 216px;
//   border: none;
//   border-radius: 0.5rem;
//   background: #f8fafb;
//   margin: auto;
// `;
const Label = styled.label`
  cursor: pointer;
  background-color: #f8fafb;
  text-align: center;
  width: 100%;
  padding: 50px 0;
`;
const Span = styled.span`
  display: block;
  font-size: 12px;
  color: #868e96;
`;
const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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
      {/* <Address /> */}
      <Label htmlFor="file-upload">
        <BiPlus style={{ fontSize: "40px", color: "#868e96" }} />
        {/* file preview가 있?없? */}
        <Span>눌러서 파일 등록</Span>
        <FileInput
          id="file-upload"
          name="file-upload"
          type="file"
          accept="image/*"
          className="sr-only"
          // onChange={onFileChange}
        />
      </Label>
      <Descripton>{description}</Descripton>
    </Container>
  );
};

export default InputFile;
