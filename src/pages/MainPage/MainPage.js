import React from 'react';
import FormList from '@/components/FormList/FormList';
import styled from 'styled-components';

const Title = styled.h2``;
const Button = styled.button`
  position: absolute;
  top: 70 %;
  width: 30%;
  height: 5%;
  background-color: pink;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
`;
const Main = () => {
  return (
    <>
      <Title>생성된 폼 목록</Title>
      <FormList />
      {/* <Button>폼 생성하기</Button> */}
    </>
  );
};

export default Main;
