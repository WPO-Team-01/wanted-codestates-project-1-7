import styled from 'styled-components';
import { FcViewDetails } from 'react-icons/fc';
import SavedForm from '../SavedForm/SavedForm';
import { useState, useEffect } from 'react';

const Wrapper2 = styled.div`
  background: #faebd7;
  width: 70%;
  height: 15%;
  border-radius: 10px;
`;
const Title = styled.h2`
  width: 25%;
  margin-left: 5%;
`;

function FormList(props) {
  const { form } = props;
  const [savedForm, setSavedForms] = useState([]);

  useEffect(() => {
    if (form.data) {
      setSavedForms(form.data); //[{id:"phone"},{id:"address"}....]
    }
  }, []);
  //폼 생성하기 버튼 -> 생성하기 페이지로 넘어가기
  // 3번 생성된 폼 목록이 업데이트 되는 때: 제출하기 누르면 추가되어야함.

  return (
    <Wrapper2>
      <FcViewDetails size='50' />
      {form.data ? (
        <Title>{form.title}</Title>
      ) : (
        <Title>제목이 없는 form입니다</Title>
      )}
      {form.data ? (
        <ul>
          <SavedForm savedForm={savedForm} />
        </ul>
      ) : (
        <div></div>
      )}
    </Wrapper2>
  );
}
export default FormList;
