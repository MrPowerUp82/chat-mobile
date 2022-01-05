import React from 'react';
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';

export default function Register(){
    return(
        <Container>
            <InputContainer>
                <Title>Register</Title>
                <Input placeholder="E-mail"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>
                    <ButtonTitle>REGISTER</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}