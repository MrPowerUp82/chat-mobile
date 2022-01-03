import React from 'react';
import {Container, Header, HeaderButton,Title, Select, InviteBox, Button, TextButton} from './styles'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Search(){

    const navigation = useNavigation()


    return(
        <Container>
            <Header>
                <HeaderButton onPress={()=>navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color="#fff"/>
                </HeaderButton>
                <Title>Enviar Solicitação?</Title>
            </Header>
            <InviteBox>
            <Select>
                <Select.Item label="Teste" value="Teste" />
                <Select.Item label="Teste" value="Teste" />
            </Select>
            <Button>
                <TextButton>Enviar</TextButton>
            </Button>
            </InviteBox>
        </Container>
    )
}