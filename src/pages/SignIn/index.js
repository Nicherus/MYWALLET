import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import { useUserContext } from '../../contexts/UserContext';
import { MainContainer } from './styles';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import ClickableText from '../../components/ClickableText';


export default function SignIn() {
  // const { user, setUser } = useUserContext();
  const { user, setUser } = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const login = async () => {
    const body = {
      'email': email,
      'password': password,
    };

    try{
      const data = await axios.post(`http://localhost:3000/api/user/sign-in`, body);
      if(data){
        console.log('ok');
        // setUser(data);
        // history.push('/home');
      }
    } catch(error){
        console.log(error);
        alert('Verifique sua internet!');
    }
  }

  const goRegister = () => {
    history.push('/sign-up');
  }

  return (
    <MainContainer>
      <Title 
        text={'MyWallet'}
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
      <Button
      onClick={() => login()}
      label={'Login'}
      />
      <ClickableText 
        text={'Primeira vez? Cadastre-se!'}
        onClick={() => goRegister()}
      />
    </MainContainer>
  );
}