import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionBar = styled.div`
  display: flex;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #ebeced;
  border-radius: 10px 10px 0 0;
  width: 100%;
  align-items: center;
`;

export const DeleteBtn = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30px;
  border-radius: 0 10px 0 0;
  background-color: red;
  color: white;
`;

export const DragBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
`;

export const Dropdown = styled.select`
  width: 100px;
  border: none;
  background-color: white;
  height: 25px;
  font-size: 5px;
`;

export const Input = styled.input`
  font-size: 5px;
  outline: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-left: ${(props) => props.border};
  border-top: none;
  border-bottom: none;
  border-right: ${(props) => props.border};
`;

export const EditPlaceholder = styled.div`
  display: flex;
  border: 1px solid;
  box-sizing: border-box;
  align-items: center;
  border-color: white #ebeced #ebeced #ebeced;
  width: 100%;
  height: 30px;
`;

export const RequiredCheck = styled.div`
  display: flex;
  width: 60px;
  font-size: 5px;
  align-items: center;
  height: 100%;
  background-color: #f8f8f9;
`;

export const TokenDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 7pt;

  border: 1px solid;
  border-color: yellowgreen;
  padding: 2px;
  margin: 3px;
`;

export const Token = styled.div`
  white-space: nowrap;
  margin-left: 5px;
  width: 100%;
`;

export const TokenDeleteBtn = styled.div`
  cursor: pointer;
  margin-left: 5px;
  font-size: 10pt;
  margin-right: 5px;
`;

export const Wysiwyg = styled.div`
  border: 1px solid #ebeced;
  border-top: none;
  padding: 3px;
  border-radius: 0 0 10px 10px;
`;
