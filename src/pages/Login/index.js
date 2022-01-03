import React from 'react';
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';

export default function Login(){
    return(
        <Container>
            <InputContainer>
                <Title>Login Page</Title>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>
                    <ButtonTitle>LOGIN</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}