import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: black solid 1px;
`;

const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 448px;
  height: 100%;
  border: blue solid 1px;
`;

const Form = styled.div`
  width: 400px;
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0 auto;
  border: red solid 1px;
`;

const Text = styled.div`
  width: 100%;
  height: 20px;
  border: black solid 1px;
`;
const Input = styled.input`
  width: 100%;
  height: 54px;
  border: black solid 1px;
  border-radius: 0.5rem;
  background: #f8fafb;
`;
const Caution = styled.div`
  width: 100%;
  height: 15px;
  border: black solid 1px;
`;

const GeneratedForm = () => {
  return (
    <Container>
      <SubContainer>
        <Form>
          <Text></Text>
          <Input type="text"></Input>
          <Caution></Caution>
        </Form>
      </SubContainer>
    </Container>
  );
};

export default GeneratedForm;
