import React, { useEffect, useState } from "react";
import FormList from "@/components/FormList/FormList";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid grey;
`;

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
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const getFormList = async () => {
      try {
        const res = await axios
          .get("https://damp-dawn-99272.herokuapp.com/api/forms")
          .then((res) => setForms(res.data.forms));
        console.log(res.data.forms);
      } catch (err) {
        console.log(err);
      }
    };
    getFormList();
  }, []);

  return (
    <Container>
      <Title>생성된 폼 목록</Title>
      <BoxWrapper>
        {forms.map((form) => (
          <FormList form={form} />
        ))}
      </BoxWrapper>
      <Button>폼 생성하기</Button>
    </Container>
  );
};

export default Main;
