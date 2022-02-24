import React, { useState } from "react";
import FormList from "@/components/FormList/FormList";
import styled from "styled-components";

const Title = styled.h2`
  top: 10%;
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 3%;
`;
const Button = styled.button`
  width: 30%;
  height: 5%;
  background-color: skyblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
`;
const Main = () => {
  const [forms, setForms] = useState([
    {
      id: 123,
      title: "예제 폼",
      data: [
        {
          id: "name",
          type: "text",
          required: true,
          label: "이름",
          placeholder: "주민등록상 이름 입력",
        },
        {
          id: "phone",
          type: "phone",
          required: true,
          label: "휴대폰 번호",
        },
        {
          id: "address",
          type: "address",
          required: true,
          label: "배송지",
        },
        {
          id: "input_0",
          type: "select",
          label: "옵션1",
          options: ["S", "L", "XL", "XXL"],
          required: true,
        },
        {
          id: "input_1",
          type: "file",
          label: "첨부파일",
          required: false,
          description: "<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>",
        },
        {
          id: "agreement_0",
          type: "agreement",
          label: "개인정보 수집 약관 동의",
          required: true,
          contents: "<p>(개인정보 수집 및 약관 내용)</p>",
        },
      ],
    },
  ]);

  return (
    <>
      <Title>생성된 폼 목록</Title>
      <BoxWrapper>
        {forms.map((form) => (
          <FormList form={form} />
        ))}
      </BoxWrapper>
      <Button>폼 생성하기</Button>
    </>
  );
};

export default Main;
