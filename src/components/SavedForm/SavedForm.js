import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import styled from "styled-components";

const Phone = styled.div`
  width: 30%;
  border: 2px solid red;
`;

const SavedForm = (props) => {
  const { savedForm } = props; //[{id:"phone"},{id:"address"}....]

  return (
    <div>
      <IoCheckboxOutline size="30" />
      {savedForm.map((el) => {
        if (el.id === "phone") {
          return <Phone>{el.label}</Phone>;
        }
      })}
    </div>
  );
};

export default SavedForm;
