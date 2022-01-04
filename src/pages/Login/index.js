import React, {useState, useCallback} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';

export default function Login(){

    const [inputUsername,setInputUsername] = useState('')
    const [inputPassword,setInputPassword] = useState('')
    const [token, setToken] = useState('')

    const Submit= useCallback(async()=>{
        async function handleLogin(username,password){
            await fetch('https://webcoffee.herokuapp.com/token/',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username:username.toString(), password: password.toString()})
            }).then(r=>r.json()).then(json=>console.log(json,username))
        }
        await handleLogin(inputUsername, inputPassword)
    },[inputUsername,inputPassword])


    return(
        <Container>
            <InputContainer>
                <Title>Login Page</Title>
                <Input placeholder="Username" value={inputUsername} onChange={(text)=>setInputUsername(text)}/>
                <Input placeholder="Password" secureTextEntry={true} value={inputPassword} onChange={(text)=>setInputPassword(text)}/>
                <Button onPress={Submit}>
                    <ButtonTitle>LOGIN</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}