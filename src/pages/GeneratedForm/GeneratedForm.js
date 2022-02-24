import React from "react";
import styled from "styled-components";
import Form from "@/components/GeneratedForm/Form";
import Address from "@/components/GeneratedForm/Address";
import DropDown from "@/components/GeneratedForm/DropDown";
import InputFile from "@/components/GeneratedForm/InputFile";
import Button from "@/components/GeneratedForm/Button";
import CheckBox from "@/components/GeneratedForm/CheckBox";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 448px;
  height: 100%;
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
        <CheckBox />
        <Button />
      </SubContainer>
    </Container>
  );
};

export default GeneratedForm;
