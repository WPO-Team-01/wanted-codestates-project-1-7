import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

export const RightLayout = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: right;
`;

export const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KategorieText = styled.span`
  margin-top: 12px;
  font-size: 15px;
  color: gray;
`;

export const CommonButton = styled.button`
  cursor: pointer;
  border: 1px solid rgb(216, 214, 214);
  border-radius: 5px;
  padding: 8px;
  margin-top: 5px;
  font-size: 15px;
`;

export const CommonInput = styled.input`
  border: 1px solid rgb(216, 214, 214);
  border-radius: 5px;
  padding: 12px;
  outline: none;
  font-size: 15px;
  margin-top: 10px;
`;

export const SaveButton = styled(CommonButton)`
  background-color: rgb(20, 80, 255);
  color: white;
  font-weight: 800;
  margin-left: 10px;
  &:disabled {
    background-color: gray;
  }
`;

export const FieldAddButton = styled(CommonButton)`
  border: 1px solid rgb(20, 80, 255);
  background-color: white;
  color: rgb(20, 80, 255);
  font-weight: 800;
`;
