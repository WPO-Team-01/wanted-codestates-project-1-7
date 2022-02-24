import React from "react";
import styled from "styled-components";
import Name from "@/components/GeneratedForm/Name";
import PhoneNumber from "@/components/GeneratedForm/PhoneNumber";
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
        <Name />
        <PhoneNumber />
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
