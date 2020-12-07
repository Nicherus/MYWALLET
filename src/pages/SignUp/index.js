import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useMainContext } from '../../contexts/MainContext';
import { MainContainer } from './styles';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import ClickableText from '../../components/ClickableText';


export default function SignUp() {
  const { setUserData } = useMainContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const history = useHistory();

  const register = async () => {
    const body = {
      'username': name,
      'email': email,
      'password': password,
      'passwordConfirmation': passwordConfirmation,
    };

    try{
      const data = await axios.post(`http://localhost:3000/api/user/sign-up`, body);
      if(data){
        console.log('ok');
        setUserData(data);
        history.push('/home');
      }
    } catch(error){
        console.log(error.message);
        alert('Verifique sua internet!');
    }
  }

  const goLogin = () => {
    history.push('/sign-in');
  }

  return (
    <MainContainer>
      <Title 
        text={'MyWallet'}
      />
      <TextInput 
        placeholder="Name" 
        value={name} 
        onChangeText={(text) => setName(text.target.value)} 
      />
      <TextInput 
        placeholder="E-mail" 
        value={email} 
        onChangeText={(text) => setEmail(text.target.value)} 
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={(text) => setPassword(text.target.value)} 
      />
      <TextInput 
        placeholder="Confirm Password" 
        value={passwordConfirmation} 
        onChangeText={(text) => setPasswordConfirmation(text.target.value)}
      />
      <Button
      onClick={() => register()}
      label={'Register'}
      />
      <ClickableText 
        text={'Já tem uma conta? Entre agora!'}
        onClick={() => goLogin()}
      />
    </MainContainer>
  );
}