import React, { useEffect, useState } from 'react';
import FormList from '@/components/FormList/FormList';
import styled from 'styled-components';
import axios from 'axios';

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
`;

const Title = styled.h1`
  top: 10%;
  font-size: 2.3rem;
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
  width: 20%;
  height: 4.5vh;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 500;
`;

const Main = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFormList();
  }, [isLoading]);

  const getFormList = async () => {
    try {
      const res = await axios.get(
        'https://damp-dawn-99272.herokuapp.com/api/forms',
      );
      if (res.data) {
        setIsLoading(false);
        setForms(res.data.forms);
      }
      // console.log(res.data.forms);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(forms);
  return (
    <Container>
      <Title>생성된 폼 목록</Title>
      <BoxWrapper>
        {forms.map(form => (
          <FormList form={form} key={form.id} />
        ))}
      </BoxWrapper>
      <Button>폼 생성하기</Button>
    </Container>
  );
};

export default Main;
