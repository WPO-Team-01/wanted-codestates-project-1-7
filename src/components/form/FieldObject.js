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
  TokenDiv,
  Token,
  TokenDeleteBtn,
  Wysiwyg,
} from "./styled";
import { MdOutlineDragIndicator } from "react-icons/md";
import { FormInputType } from "../../constants/form";
import { useEffect, useState, useRef } from "react";

const DropdownOptions = {
  [FormInputType.Text]: "텍스트",
  [FormInputType.Phone]: "전화번호",
  [FormInputType.Address]: "주소",
  [FormInputType.Select]: "드롭다운",
  [FormInputType.File]: "첨부파일",
  [FormInputType.Agreement]: "이용약관",
};

const FieldObject = ({ form, handleDeleteForm, onChange, onDrag }) => {
  const tokenInputRef = useRef("");
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if ([FormInputType.Select].includes(form.type)) {
      tokenInputRef.current.value = "";
    }
  }, [tokens]);

  const handleMakeToken = (e) => {
    if (e.target.value.includes(",")) {
      if (tokenInputRef.current.value.trim()) {
        let addToken = tokenInputRef.current.value.substring(
          0,
          tokenInputRef.current.value.length - 1
        );
        setTokens((tagArr) => [...tokens, addToken]);
      } else {
        tokenInputRef.current.value = "";
      }
    }
  };

  const handleDeleteToken = (delIndex) => {
    setTokens(
      tokens.filter((elem, index) => {
        return index !== delIndex;
      })
    );
  };

  const handleChangeForm = (field, value) => {
    onChange(form.id, { [field]: value });
  };

  return (
    <Container>
      <OptionBar>
        <Dropdown
          value={form.type}
          onChange={(e) => handleChangeForm("type", e.target.value)}
        >
          <option value="" disabled>
            옵션
          </option>
          {Object.entries(DropdownOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </Dropdown>
        <Input
          placeholder="필드명을 입력해 주세요"
          value={form.label}
          onChange={(e) => handleChangeForm("label", e.target.value)}
          height={"80%"}
          width={"100%"}
          border={"1px solid #ebeced"}
        />
        <RequiredCheck>
          <input
            onChange={(e) => handleChangeForm("required", e.target.checked)}
            type="checkbox"
            checked={form.required}
          />
          <label>필수</label>
        </RequiredCheck>
        <DragBtn {...onDrag}>
          <MdOutlineDragIndicator />
        </DragBtn>
        <DeleteBtn onClick={() => handleDeleteForm(form.id)}>x</DeleteBtn>
      </OptionBar>
      {([FormInputType.Text, FormInputType.Phone].includes(form.type) && (
        <EditPlaceholder>
          <Input
            placeholder="해당 필드에 들어갈 placeholder를 입력해 주세요"
            border={"none"}
            width={"90%"}
            height={"80%"}
            value={form.placeholder ?? ""}
            onChange={(e) => handleChangeForm("placeholder", e.target.value)}
          />
        </EditPlaceholder>
      )) ||
        ([FormInputType.Select].includes(form.type) && (
          <EditPlaceholder>
            {tokens.map((elem, index) => {
              return (
                <TokenDiv key={index}>
                  <Token>{elem}</Token>
                  <TokenDeleteBtn onClick={() => handleDeleteToken(index)}>
                    x
                  </TokenDeleteBtn>
                </TokenDiv>
              );
            })}
            <Input
              ref={tokenInputRef}
              type="text"
              placeholder="옵션 (각 아이템은 콤마(,)로 구분합니다.)"
              border={"none"}
              width={"90%"}
              height={"80%"}
              onChange={handleMakeToken}
            />
          </EditPlaceholder>
        ))}
      <Wysiwyg>
        <EditorSet
          value={
            form.type === FormInputType.Agreement
              ? form.contents
              : form.description
          }
          onChange={(html) =>
            handleChangeForm(
              form.type === FormInputType.Agreement
                ? "contents"
                : "description",
              html
            )
          }
        />
      </Wysiwyg>
    </Container>
  );
};

export default FieldObject;
