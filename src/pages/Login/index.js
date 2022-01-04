import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';

export default function Login(){

    const [inputUsername,setInputUsername] = useState('')

    async function handleLogin(){

    }

    return(
        <Container>
            <InputContainer>
                <Title>Login Page</Title>
                <Input placeholder="Username" value={inputUsername} onChange={(text)=>setInputUsername(text)}/>
                <Input placeholder="Password"/>
                <Button>
                    <ButtonTitle>LOGIN</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}