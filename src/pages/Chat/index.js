import React, {useEffect, useState} from 'react';
import {Container,Header,HeaderButton,NameChat,ChatMessage, InputContainer, Input, SendButton} from './styles.js'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Feather} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import RenderMsg from '../../components/RenderMsg/index.js';


export default function Chat(){

    const [msgs,setMsgs] = useState([])
    const [sendusername,setUsername]=useState('')
    const [userid,setUserid] =useState('')

    const route = useRoute()

    const navigation = useNavigation()

    const data = [1,2]

    useEffect(async()=>{
        const user_id = await AsyncStorage.getItem('userid')
        setUserid(user_id)
        const username = await AsyncStorage.getItem('username')
        const token = await AsyncStorage.getItem('token')
        const send_user_id = route?.params?.data[0].id
        const send_username = route?.params?.data[0].username
        setUsername(send_username)
        await fetch(`https://webcoffee.herokuapp.com/api/v1/msgs/${user_id}/${send_user_id}/`,{
            headers: {'Authorization': `Bearer ${token}`}
        }).then(r=>r.json()).then(json=>{
            setMsgs(json)
        })
    },[])

    return(
        <Container>
            <Header>
                <HeaderButton onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={28} color="#fff" />
                </HeaderButton>
                <NameChat>{sendusername}</NameChat>
            </Header>
            <ChatMessage data={msgs} renderItem={({item})=><RenderMsg data={item} user_id={userid} />} keyExtractor={(item)=>item.id} />
            <InputContainer>
            <Input placeholder="Mensagem" placeholderTextColor="#fff"/>
            <SendButton>
                <Feather name="send" size={28} color="#0066ff"/>
            </SendButton>
            </InputContainer>
        </Container>
    )
}