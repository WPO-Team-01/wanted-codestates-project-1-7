import FieldObject from "@/components/form/FieldObject";
import React, { useState } from "react";
import axios from "axios";
import {
  Layout,
  RightLayout,
  ContentsDiv,
  KategorieText,
  CommonButton,
  CommonInput,
  SaveButton,
  FieldAddButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

const CreateFormPage = () => {
  const [title, setTitle] = useState("");
  const [formList, setFormList] = useState([]);

  const nagigate = useNavigate();

  const onCreateForm = () => {
    setFormList((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "",
        label: "",
        description: "",
        required: false,
      },
    ]);
  };

  const handleChangeForm = (id, value) => {
    setFormList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, ...value };
        }
        return item;
      });
    });
  };

  const onDeleteForm = (data) => {
    const target = formList.filter(({ id }) => id !== data);
    setFormList(target);
  };

  const submitForm = async () => {
    await axios.post("https://damp-dawn-99272.herokuapp.com/api/forms", {
      form: { title: title, data: formList },
    });

    alert("성공했습니다!");
    nagigate("/");
  };

  const isFormVaild =
    formList.every((form) => form.type && form.label) &&
    title.length &&
    formList.length;

  return (
    <Layout>
      <KategorieText>제목 *</KategorieText>
      <CommonInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <KategorieText>필드목록 *</KategorieText>
      <ContentsDiv>
        {formList.map((form) => {
          return (
            <FieldObject
              key={form.id}
              form={form}
              handleDeleteForm={onDeleteForm}
              onChange={handleChangeForm}
            />
          );
        })}
      </ContentsDiv>
      <FieldAddButton onClick={onCreateForm}>필드 추가하기</FieldAddButton>
      <RightLayout>
        <CommonButton>폼열기</CommonButton>
        <SaveButton onClick={submitForm} disabled={!isFormVaild}>
          저장하기
        </SaveButton>
      </RightLayout>
    </Layout>
  );
};

export default CreateFormPage;
