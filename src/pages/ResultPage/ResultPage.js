import React, { useState } from "react";
import { Result } from "@/components";
import { useParams } from "react-router-dom";

const dummyForms = [
  {
    id: 1,
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
  {
    id: 2,
    title: "포켓몬마스터",
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
];

const dummyData = {
  1: [
    {
      id: 1,
      name: "피카츄",
      phone: "123-0000-0000",
      address: "발전소",
      input_0: "S",
      input_1: "https://imageurl/88783434.png",
      agreement_0: true,
    },
  ],
  2: [
    {
      id: 2,
      name: "파이리",
      phone: "000-2345-0000",
      address: "분화구",
      input_0: "S",
      input_1: "https://imageurl/88783434.png",
      agreement_0: true,
    },
    {
      id: 3,
      name: "꼬부기",
      phone: "000-3456-0000",
      address: "깊은 바다 속 파인애플",
      input_0: "S",
      input_1: "https://imageurl/88783434.png",
      agreement_0: true,
    },
    {
      id: 4,
      name: "이상해씨",
      phone: "000-0000-4567",
      address: "잠비아",
      input_0: "S",
      input_1: "https://imageurl/88783434.png",
      agreement_0: true,
    },
  ],
};

const dummyType = [
  "text",
  "phone",
  "address",
  "input_0",
  "input_1",
  "agreement_0",
];

const ResultPage = () => {
  // formId 추후 변경
  const formId = 2;
  // const formId = useParams().id;

  const formData = dummyForms.filter((form) => form.id === formId)[0];
  const dataList = dummyData[formId];

  console.log(formData);

  return (
    <div>
      {!dataList && <div>일치하는 데이터가 없습니다. 폼 ID를 확인해주세요</div>}
      {dataList && (
        <>
          <div>{formData.title}</div>
          <div>
            {dataList.map((data, index) => (
              <Result
                key={`${data.id}-${index}`}
                formInfo={formData}
                data={data}
                dataType={dummyType}
              ></Result>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultPage;
