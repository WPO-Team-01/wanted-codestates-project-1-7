import React from 'react';
// import { IoCheckboxOutline } from 'react-icons/io5';
import { FcCheckmark } from 'react-icons/fc';
import styled from 'styled-components';

const Label = styled.div`
  width: 100%;
  border-radius: 5px;
  font-weight: 500;
`;
const ListWrap = styled.div`
  display: flex;
  width: 50%;
`;
const SavedForm = props => {
  const { savedForm } = props; //[{id:"phone"},{id:"address"}....]

  return (
    <div>
      {savedForm.map(el => {
        return (
          <ListWrap>
            <FcCheckmark size='30' style={{ marginRight: 10 }} />
            <Label key={el.id}>{el.label}</Label>
          </ListWrap>
        );
      })}
    </div>
  );
};

export default SavedForm;
