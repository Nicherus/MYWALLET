import React from 'react';
import { ButtonContainer } from './styles';


export default function Button({onClick, label}) {

  return (
      <ButtonContainer 
        onClick={onClick}
      >
        {label}
      </ButtonContainer>
  );
}