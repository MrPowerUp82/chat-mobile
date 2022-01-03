import React from 'react';
import {Container,Header,HeaderButton,NameChat,ChatMessage, InputContainer, Input, SendButton} from './styles.js'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import RenderMsg from '../../components/RenderMsg/index.js';


export default function Chat(){

    const navigation = useNavigation()

    const data = [1]

    return(
        <Container>
            <Header>
                <HeaderButton onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={28} color="#fff" />
                </HeaderButton>
                <NameChat>Teste</NameChat>
            </Header>
            <ChatMessage data={data} renderItem={({item})=><RenderMsg/>} />
            <InputContainer>
            <Input />
            <SendButton>
                <Feather name="send" size={28} color="#0066ff"/>
            </SendButton>
            </InputContainer>
        </Container>
    )
}