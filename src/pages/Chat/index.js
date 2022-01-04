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
    const [senduserid,setSenduserid] = useState('')
    const [sendmsg, setSendMsg] =useState('')
    const [token,setToken] =useState('')

    const route = useRoute()

    const navigation = useNavigation()

    const data = [1,2]

    useEffect(async()=>{
        const user_id = await AsyncStorage.getItem('userid')
        setUserid(user_id)
        const username = await AsyncStorage.getItem('username')
        const token = await AsyncStorage.getItem('token')
        setToken(token)
        const send_user_id = route?.params?.data[0].id
        setSenduserid(send_user_id)
        const send_username = route?.params?.data[0].username
        setUsername(send_username)
        await fetch(`https://webcoffee.herokuapp.com/api/v1/msgs/${user_id}/${send_user_id}/`,{
            headers: {'Authorization': `Bearer ${token}`}
        }).then(r=>r.json()).then(json=>{
            setMsgs(json)
        })
    },[])

    async function sendMsg(){
        await fetch('https://webcoffee.herokuapp.com/api/v1/msgs/',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({send_user_msg_id:userid, recv_user_msg_id: senduserid, msg: sendmsg})
		}).then(r=>r.json()).then(json=>{
            setMsgs([...msgs,json])
        })
    }

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
            <Input placeholder="Mensagem" placeholderTextColor="#fff" value={sendmsg} onChangeText={(text)=>setSendMsg(text)}/>
            <SendButton onPress={()=>sendMsg()}>
                <Feather name="send" size={28} color="#0066ff"/>
            </SendButton>
            </InputContainer>
        </Container>
    )
}