import React, { useState } from "react";
import styled from "styled-components";
import { BiCamera, BiPlus } from "react-icons/bi";

const Container = styled.div`
  width: 400px;
  height: 254px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  height: 185px;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;
const FileBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;
const FileText = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 0;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const SpanWrapper = styled.div`
  padding: 60px 0;
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
  const [attachment, setAttachment] = useState("");
  const [filePreview, setFilePreview] = useState("");

  const onFileChange = (e) => {
    console.log(e);
    const {
      target: { files },
    } = e;
    const imgFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(imgFile);
    const url = URL.createObjectURL(imgFile);
    setFilePreview(url);
  };

  return (
    <Container>
      <Text>{title}</Text>
      {/* <Address /> */}
      <Label htmlFor="file-upload">
        {/* file preview가 있?없? */}
        {filePreview ? (
          <>
            <FileBg>
              <BiCamera
                style={{ color: "#fff", fontSize: "30px", width: "100%" }}
              />
              <FileText>눌러서 파일 변경</FileText>
            </FileBg>
            <Img src={filePreview} alt="uploadImage" />
          </>
        ) : (
          <SpanWrapper>
            <BiPlus style={{ fontSize: "40px", color: "#868e96" }} />
            <Span>눌러서 파일 등록</Span>
          </SpanWrapper>
        )}
        <FileInput
          id="file-upload"
          name="file-upload"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={onFileChange}
        />
      </Label>
      <Descripton>{description}</Descripton>
    </Container>
  );
};

export default InputFile;
