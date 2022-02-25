import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Name from "@/components/GeneratedForm/Name";
import PhoneNumber from "@/components/GeneratedForm/PhoneNumber";
import Address from "@/components/GeneratedForm/Address";
import DropDown from "@/components/GeneratedForm/DropDown";
import InputFile from "@/components/GeneratedForm/InputFile";
import Button from "@/components/GeneratedForm/Button";
import CheckBox from "@/components/GeneratedForm/CheckBox";
import axios from "axios";

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
  const [forms, setForms] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState(null);
  const [attachment, setAttachment] = useState("");
  const [boolean, setBoolean] = useState(false);

  console.log(forms);

  let formData = {
    name: name,
    phone: number,
    address: address,
    input_0: size,
    input_1: attachment,
    agreement_0: boolean,
  };

  const getData = () => {
    axios
      .get("https://damp-dawn-99272.herokuapp.com/api/forms")
      .then((res) => setForms(res.data.forms[0].data))
      .catch((err) => console.log(err));
  };

  const postData = () => {
    axios
      .post(
        `https://damp-dawn-99272.herokuapp.com/api/forms/:id/submit`,
        formData
      )
      .then((res) => console.log(res.data.success));
  };

  useEffect(() => getData(), []);

  return (
    <Container>
      <SubContainer>
        {forms.length > 0
          ? forms.map((form) =>
              form.id === "name" ? (
                <Name
                  type={form.type}
                  required={form.required}
                  label={form.label}
                  placeholder={form.placeholder}
                />
              ) : form.id === "phone" ? (
                <PhoneNumber
                  type={form.type}
                  required={form.required}
                  label={form.label}
                />
              ) : form.id === "address" ? (
                <Address
                  type={form.type}
                  required={form.required}
                  label={form.label}
                />
              ) : form.id === "input_0" ? (
                <DropDown
                  type={form.type}
                  label={form.label}
                  option={form.option}
                  required={form.required}
                />
              ) : form.id === "input_1" ? (
                <InputFile
                  type={form.type}
                  label={form.label}
                  required={form.required}
                  description={form.description}
                />
              ) : form.id === "agreement_0" ? (
                <CheckBox
                  type={form.type}
                  label={form.label}
                  required={form.required}
                  contents={form.contents}
                />
              ) : null
            )
          : null}

        <Button onClick={postData} />
      </SubContainer>
    </Container>
  );
};

export default GeneratedForm;
