import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { useUserContext } from '../../contexts/UserContext';
import { MainContainer } from './styles';


export default function SignIn() {
//   const { user, setUser } = useUserContext();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const register = async () => {
//     const body = {
//       'email': email,
//       'password': password,
//     };

//     try{
//       const data = await axios.post(`http://localhost:3000/api/users/sign-in`, body);
//       if(data){
//         setUser(data);
//         history.push(`/home`);
//       }
//     } catch(error){
//         console.log(error);
//         alert('Verifique sua internet!');
//     }
//   }

  return (
    <MainContainer>
    </MainContainer>
  );
}