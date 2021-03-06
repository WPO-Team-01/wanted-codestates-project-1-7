import React, { useEffect, useState } from "react";
import { Result } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: 70vh;
  padding: 0.5rem;
`;

const TitleBox = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid #999;
  padding: 0.5rem;
  width: 100%;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  background-color: skyblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-height: 70vh;
  padding: 0.8rem;
  border: 1px solid #999;
  border-radius: 8px;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const formId = useParams().id;
  const [formList, setFormList] = useState([]);
  const [isLoading, setIsLoading] = useState(!formList.length ? true : false);

  const fetchForms = async () => {
    const { formResult } = await fetch(
      `https://damp-dawn-99272.herokuapp.com/api/forms/${formId}/result`
    ).then((response) => response.json());
    setIsLoading(false);
    if (!formResult) return;
    setFormList(formResult);
  };

  useEffect(() => {
    if (!formList.length) fetchForms();
  }, [formList]);

  return (
    <Container>
      {isLoading && <TitleBox>로딩중입니다. 잠시만 기다려주세요.</TitleBox>}
      {!isLoading && !formList.length && (
        <>
          <TitleBox>
            일치하는 데이터가 없습니다. 일시적인 오류일 수도 있으니 새로고침을
            눌러주세요.
          </TitleBox>
          <TitleBox>오류가 계속된다면, 폼 ID를 확인해주세요</TitleBox>
          <BtnBox>
            <Btn onClick={() => navigate("/")}>메인으로 돌아가기</Btn>
          </BtnBox>
        </>
      )}
      {!isLoading && formList.length > 0 && (
        <>
          <TitleBox>설문 참여자 목록</TitleBox>
          <ResultBox>
            {formList.map((data, index) => (
              <Result key={`${data.id}-${index}`} data={data}></Result>
            ))}
          </ResultBox>
        </>
      )}
    </Container>
  );
};

export default ResultPage;
