import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 107px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0 auto;
`;
const Text = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
`;
const Select = styled.select`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 0.5rem;
  background: #f8fafb;
  margin: auto;
`;
const Option = styled.option`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 0.5rem;
  background: #f8fafb;
  margin: auto;
`;

const DropDown = ({ title = "옵션1", options = ["S", "L", "XL", "XXL"] }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Select>
        {options.map((option) => (
          <Option value={option}>{option}</Option>
        ))}
      </Select>
    </Container>
  );
};

export default DropDown;
