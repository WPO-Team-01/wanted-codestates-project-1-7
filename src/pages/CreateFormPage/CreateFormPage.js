import FieldObject from "@/components/form/FieldObject";
import React, { useState } from "react";
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

const CreateFormPage = () => {
  const [title, setTitle] = useState("");
  const [formList, setFormList] = useState([]);

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
        <SaveButton>저장하기</SaveButton>
      </RightLayout>
    </Layout>
  );
};

export default CreateFormPage;
