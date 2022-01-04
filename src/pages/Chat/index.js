import React, {useEffect, useState} from 'react';
import {Container,Header,HeaderButton,NameChat,ChatMessage, InputContainer, Input, SendButton} from './styles.js'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Feather} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import RenderMsg from '../../components/RenderMsg/index.js';


export default function Chat(){

    const route = useRoute()

    const navigation = useNavigation()

    const data = [1,2]

    useEffect(async()=>{
        const user_id = await AsyncStorage.getItem('userid')
        const username = await AsyncStorage.getItem('username')
        const token = await AsyncStorage.getItem('token')
        const send_user_id = route?.params?.data[0].id
        const send_username = route?.params?.data[0].username
    },[])

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
            <Input placeholder="Mensagem" placeholderTextColor="#fff"/>
            <SendButton>
                <Feather name="send" size={28} color="#0066ff"/>
            </SendButton>
            </InputContainer>
        </Container>
    )
}