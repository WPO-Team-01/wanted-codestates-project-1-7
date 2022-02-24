import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  border: 1px solid red;
  width: 50%;
  height: 10%;
  border-radius: 10px;
`;
const Title = styled.h2`
  width: 20%;
  margin-left: 5%;
`;
function FormList() {
  return (
    <Wrapper>
      <Title>Form 제목</Title>
    </Wrapper>
  );
}
export default FormList;
