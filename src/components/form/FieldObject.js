import styled from "styled-components";
import { useState } from "react";
import EditorSet from "./EditorSet";
import {
  Container,
  OptionBar,
  DeleteBtn,
  DragBtn,
  Dropdown,
  Input,
  EditPlaceholder,
  RequiredCheck,
  Wysiwyg,
} from "./styled";
import { MdOutlineDragIndicator } from "react-icons/md";

const FieldObject = () => {
  const [selectValue, setSelectValue] = useState("선택해주세요");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <Container>
      <OptionBar>
        <Dropdown onChange={(e) => handleChange(e)}>
          <option>{selectValue}</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </Dropdown>
        <Input
          placeholder="필드명을 입력해 주세요"
          height={"80%"}
          width={"100%"}
          border={"1px solid #ebeced"}
        />
        <RequiredCheck>
          <input type="checkbox" />
          <label>필수</label>
        </RequiredCheck>
        <DragBtn>
          <MdOutlineDragIndicator />
        </DragBtn>
        <DeleteBtn>x</DeleteBtn>
      </OptionBar>
      <EditPlaceholder>
        <Input
          placeholder="해당 필드에 들어갈 placeholder를 입력해 주세요"
          border={"none"}
          width={"90%"}
          height={"80%"}
        />
      </EditPlaceholder>
      <Wysiwyg>
        <EditorSet />
      </Wysiwyg>
    </Container>
  );
};

export default FieldObject;
