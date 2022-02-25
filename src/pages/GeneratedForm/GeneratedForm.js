import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Name from "@/components/GeneratedForm/Name";
import PhoneNumber from "@/components/GeneratedForm/PhoneNumber";
import Address from "@/components/GeneratedForm/Address";
import DropDown from "@/components/GeneratedForm/DropDown";
import InputFile from "@/components/GeneratedForm/InputFile";
import Button from "@/components/GeneratedForm/Button";
import CheckBox from "@/components/GeneratedForm/CheckBox";
import Agreement from "@/components/GeneratedForm/Modal/Agreement";
import axios from "axios";
import { useParams } from "react-router-dom";

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
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
`;

const GeneratedForm = () => {
  const [forms, setForms] = useState([]);
  const [title, setTitle] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState(null);
  const [attachment, setAttachment] = useState("");
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { id } = useParams();

  let formData = {
    name: name,
    phone: number,
    address: address,
    input_0: size,
    input_1: attachment,
    agreement_0: checked,
  };

  const getData = () => {
    axios
      .get(`https://damp-dawn-99272.herokuapp.com/api/forms/${id}`)
      .then((res) => {
        setForms(res.data.form.data);
        setTitle(res.data.form.title);
      })
      .catch((err) => console.log(err));
  };

  const postData = () => {
    console.log("post");
    return axios
      .post(
        `https://damp-dawn-99272.herokuapp.com/api/forms/${id}/submit`,
        formData
      )
      .then((res) => console.log(res.data.success));
  };

  const checkCompleted = () => {
    if (name !== "" && number !== "" && address !== "" && checked) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  useEffect(() => {
    getData();
    checkCompleted();
  }, [name, number, address, checked]);
  // console.log(forms);
  // console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <>
      {agreement ? (
        <>
          <Agreement setAgreement={setAgreement} />
        </>
      ) : (
        <>
          <Container>
            <SubContainer>
              <form onSubmit={onSubmit}>
                <Title>{title}</Title>
                {forms.length > 0
                  ? forms.map((form, index) =>
                      form.type === "text" ? (
                        <Name
                          key={index}
                          type={form.type}
                          required={form.required}
                          label={form.label}
                          placeholder={form.placeholder}
                          name={name}
                          setName={setName}
                        />
                      ) : form.type === "phone" ? (
                        <PhoneNumber
                          key={index}
                          type={form.type}
                          required={form.required}
                          label={form.label}
                          number={number}
                          setNumber={setNumber}
                        />
                      ) : form.type === "address" ? (
                        <Address
                          key={index}
                          type={form.type}
                          required={form.required}
                          label={form.label}
                          address={address}
                          setAddress={setAddress}
                        />
                      ) : form.type === "select" ? (
                        <DropDown
                          key={index}
                          type={form.type}
                          label={form.label}
                          options={form.options}
                          required={form.required}
                          size={size}
                          setSize={setSize}
                        />
                      ) : form.type === "file" ? (
                        <InputFile
                          key={index}
                          type={form.type}
                          label={form.label}
                          required={form.required}
                          description={form.description}
                          attachment={attachment}
                          setAttachment={setAttachment}
                        />
                      ) : form.type === "agreement" ? (
                        <CheckBox
                          key={index}
                          type={form.type}
                          label={form.label}
                          required={form.required}
                          contents={form.contents}
                          checked={checked}
                          setChecked={setChecked}
                          agreement={agreement}
                          setAgreement={setAgreement}
                        />
                      ) : null
                    )
                  : null}

                <Button completed={completed} postData={postData} />
              </form>
            </SubContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default GeneratedForm;
