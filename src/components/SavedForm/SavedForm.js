import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Label = styled.div`
  width: 100%;
  border-radius: 5px;
  font-weight: 500;
`;
const ListWrap = styled.div`
  display: flex;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38%;
  margin-top: 4%;
  margin-left: 58%;
`;
const Button1 = styled.button`
  width: 100%;
  height: 4vh;
  background-color: navy;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
`;
const Button2 = styled.button`
  width: 100%;
  height: 4vh;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
`;

const SavedForm = props => {
  const { savedForm, formId } = props; //[{id:"phone"},{id:"address"}....]

  return (
    <div>
      {savedForm.map(el => {
        return (
          <ListWrap key={el.id}>
            <FcCheckmark size='30' style={{ marginRight: 10 }} />
            <Label>{el.label}</Label>
          </ListWrap>
        );
      })}
      <ButtonWrapper>
        <Link to={`/generated/${formId}`}>
          <Button1>폼 작성하기</Button1>
        </Link>
        <Link to={`/result/${formId}`}>
          <Button2>제출된 폼 확인하기</Button2>
        </Link>
      </ButtonWrapper>
    </div>
  );
};

export default SavedForm;
