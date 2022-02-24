import React from "react";
import styled from "styled-components";
import Form from "@/components/Generated/Form";
import Address from "@/components/Generated/Address";
import DropDown from "@/components/Generated/DropDown";
import InputFile from "@/components/Generated/InputFile";
import Button from "@/components/Generated/Button";

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

const GeneratedForm = () => {
  return (
    <Container>
      <SubContainer>
        <Form />
        <Form />
        <Address />
        <DropDown />
        <InputFile />
        <Button />
      </SubContainer>
    </Container>
  );
};

export default GeneratedForm;
