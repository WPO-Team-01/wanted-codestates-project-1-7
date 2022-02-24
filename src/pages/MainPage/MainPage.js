import React from 'react';
import FormList from '@/components/FormList/FormList';
import styled from 'styled-components';

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
  return (
    <>
      <Title>생성된 폼 목록</Title>
      <BoxWrapper>
        <FormList />
        <FormList />
      </BoxWrapper>
      <Button>폼 생성하기</Button>
    </>
  );
};

export default Main;
