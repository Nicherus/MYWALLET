import React from 'react';
import { TextContainer } from './styles';


export default function ClickableText({text, onClick}) {

  return (
      <TextContainer onClick={onClick}>
        {text}
      </TextContainer>
  );
}