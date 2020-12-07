import React from 'react';
import { TextContainer } from './styles';


export default function TextInput({placeholder, onChangeText, value}) {

  return (
      <TextContainer 
        placeholder={placeholder}
        value={value}
        onChange={onChangeText} 
      />
  );
}