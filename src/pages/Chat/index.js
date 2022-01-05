import React, {useEffect, useState, useRef} from 'react';
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
    const [times, setTimes] = useState('')
    const msgRef = useRef(null)


    const route = useRoute()

    const navigation = useNavigation()


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
        setInterval(()=>{
            setTimes(Math.random(1,1000)+1)
        },10000)
    },[])

    useEffect(async()=>{
        if (times !== ''){
            const user_id = await AsyncStorage.getItem('userid')
            const token = await AsyncStorage.getItem('token')
            const send_user_id = route?.params?.data[0].id
            await fetch(`https://webcoffee.herokuapp.com/api/v1/msgs/${user_id}/${send_user_id}/`,{
            headers: {'Authorization': `Bearer ${token}`}
        }).then(r=>r.json()).then(json=>{
            setMsgs(json)
        })
        }
    },[times])

    async function sendMsg(){
        if(sendmsg === ''){
            alert('Você não digitou nada')
        }else{
            await fetch('https://webcoffee.herokuapp.com/api/v1/msgs/',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({send_user_msg_id:userid, recv_user_msg_id: senduserid, msg: sendmsg})
		}).then(r=>r.json()).then(json=>{
            if (msgs.error === undefined){
                setMsgs([...msgs,json])
            }else{
                setMsgs([json])
            }
            setSendMsg('')
        })
        }
    }

    return(
        <Container>
            <Header>
                <HeaderButton onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={28} color="#fff" />
                </HeaderButton>
                <NameChat>{sendusername}</NameChat>
            </Header>
            <ChatMessage data={msgs} renderItem={({item})=><RenderMsg data={item} user_id={userid} />} keyExtractor={(item)=>item.id.toString()} ref={msgRef} onContentSizeChange={() => msgRef.current.scrollToEnd() } onLayout={() => msgRef.current.scrollToEnd() } />
            <InputContainer>
            <Input placeholder="Mensagem" placeholderTextColor="#fff" value={sendmsg} onChangeText={(text)=>setSendMsg(text)}/>
            <SendButton onPress={()=>sendMsg()}>
                <Feather name="send" size={28} color="#0066ff"/>
            </SendButton>
            </InputContainer>
        </Container>
    )
}