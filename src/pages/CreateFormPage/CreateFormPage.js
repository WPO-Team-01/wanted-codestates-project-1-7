import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const RightLayout = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: right;
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 5px;
`;

const KategorieText = styled.span`
  margin-top: 12px;
  font-size: 15px;
  color: gray;
`;

const CommonButton = styled.button`
  cursor: pointer;
  border: 1px solid rgb(216, 214, 214);
  border-radius: 5px;
  padding: 8px;
  margin-top: 5px;
  font-size:15px;
`;

const CommonInput = styled.input`
  border: 1px solid rgb(216, 214, 214);
  border-radius: 5px;
  padding: 12px;
  outline: none;
  font-size: 15px;
  margin-top: 10px;
`;

const SaveButton = styled(CommonButton)`
  background-color: rgb(20, 80, 255);
  color: white;
  font-weight: 800;
  margin-left: 10px;
`;

const FieldAddButton = styled(CommonButton)`
  border: 1px solid rgb(20, 80, 255);
  background-color: white;
  color: rgb(20, 80, 255);
  font-weight: 800;
`;

const CreateFormPage = () => {
  return (
    <Layout>
      <KategorieText>제목 *</KategorieText>
      <CommonInput />
      <KategorieText>필드목록 *</KategorieText>
      <ContentsDiv>필드 목록들 담는 div 투명으로 할 예정</ContentsDiv>
      <FieldAddButton>필드 추가하기</FieldAddButton>
      <RightLayout>
        <CommonButton>폼열기</CommonButton>
        <SaveButton>저장하기</SaveButton>
      </RightLayout>
    </Layout>
  );
};

export default CreateFormPage;
