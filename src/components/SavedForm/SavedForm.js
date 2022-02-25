import React from 'react';
import { IoCheckboxOutline } from 'react-icons/io5';
import styled from 'styled-components';

const Label = styled.div`
  width: 30%;
  border: 1px dotted gray;
  border-radius: 5px;
`;

const SavedForm = props => {
  const { savedForm, isLoading } = props; //[{id:"phone"},{id:"address"}....]

  return (
    <div>
      <IoCheckboxOutline size='30' />
      {!isLoading &&
        savedForm.map(el => {
          return <Label key={el.id}>{el.label}</Label>;
        })}
    </div>
  );
};

export default SavedForm;
