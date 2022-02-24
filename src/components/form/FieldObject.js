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
import { FormInputType } from "../../constants/form";

const DropdownOptions = {
  [FormInputType.Text]: "텍스트",
  [FormInputType.Phone]: "전화번호",
  [FormInputType.Address]: "주소",
  [FormInputType.Select]: "드롭다운",
  [FormInputType.File]: "첨부파일",
  [FormInputType.Agreement]: "이용약관",
};

const FieldObject = ({ form, handleDeleteForm, onChange }) => {
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
          value={form.title}
          onChange={(e) => handleChangeForm("title", e.target.value)}
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
        <DragBtn>
          <MdOutlineDragIndicator />
        </DragBtn>
        <DeleteBtn onClick={() => handleDeleteForm(form.id)}>x</DeleteBtn>
      </OptionBar>
      {[FormInputType.Text, FormInputType.Phone].includes(form.type) && (
        <EditPlaceholder>
          <Input
            placeholder="해당 필드에 들어갈 placeholder를 입력해 주세요"
            border={"none"}
            width={"90%"}
            height={"80%"}
            value={form.placeholder}
            onChange={(e) => handleChangeForm("placeholder", e.target.value)}
          />
        </EditPlaceholder>
      )}
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
              html,
            )
          }
        />
      </Wysiwyg>
    </Container>
  );
};

export default FieldObject;
