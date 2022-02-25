import styled from 'styled-components';
import { FcViewDetails } from 'react-icons/fc';
import SavedForm from '../SavedForm/SavedForm';
import { useState, useEffect } from 'react';

const Wrapper2 = styled.div`
  background: #fff8f6;
  width: 70%;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const WrapperTitle = styled.div`
  display: flex;
  height: 10%;
  border-bottom: 1px dotted gray;
  align-items: center;
`;
const Title = styled.h2`
  width: 25%;
  margin-left: 5%;
`;

function FormList(props) {
  const { form } = props;
  const [savedForm, setSavedForms] = useState([]);
  const [formId, setFormId] = useState(0);

  useEffect(() => {
    if (form.data) {
      setSavedForms(form.data); //[{id:"phone"},{id:"address"}....]
      setFormId(form.id);
    }
  }, []);
  //폼 생성하기 버튼 -> 생성하기 페이지로 넘어가기
  // 3번 생성된 폼 목록이 업데이트 되는 때: 제출하기 누르면 추가되어야함.

  return (
    <Wrapper2>
      {form.data ? (
        <WrapperTitle>
          <FcViewDetails size='50' style={{ marginLeft: 20 }} />
          <Title>{form.title}</Title>
        </WrapperTitle>
      ) : (
        <Title>제목이 없는 form입니다</Title>
      )}
      {form.data ? (
        <ul>
          <SavedForm savedForm={savedForm} formId={formId} />
        </ul>
      ) : (
        <div></div>
      )}
    </Wrapper2>
  );
}
export default FormList;
