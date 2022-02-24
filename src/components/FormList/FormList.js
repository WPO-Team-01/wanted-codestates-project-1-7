import styled from 'styled-components';

const Wrapper2 = styled.div`
  border: 1px solid #ccc;
  width: 70%;
  height: 15%;
  border-radius: 10px;
`;
const Title = styled.h2`
  width: 25%;
  margin-left: 5%;
`;
function FormList() {
  return (
    <Wrapper2>
      <Title>Form 제목</Title>
    </Wrapper2>
  );
}
export default FormList;
