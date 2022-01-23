import React,{useEffect, useState} from 'react';
import {Container, Header, HeaderButton,Title, Select, InviteBox, Button, TextButton} from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Search(){

    const [users,setUsers] = useState([])
    const [token,setToken] = useState('')
    const [userid,setUserid] = useState('')
    const [username,setUsername] = useState('')
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(async()=>{
        let isActive = true
        const ac = new AbortController()
        if(isActive){
            const token = await AsyncStorage.getItem('token')
        setToken(token)
        const user_id = await AsyncStorage.getItem('userid')
        setUserid(user_id)
        const username = await AsyncStorage.getItem('username')
        setUsername(username)
        await fetch('https://webcoffee.herokuapp.com/api/v1/users/'+user_id+'/',{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'}
        }).then(r=>r.json()).then(json=>{
           if(isActive){
            setUsers(json)
           }
        })
        }
        return () =>{
            isActive= false
            ac.abort()
        }
    },[])


    async function sendInvite(){
        await fetch(`https://webcoffee.herokuapp.com/api/v1/invites/`,{
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'},
            body: JSON.stringify({send_user_id:userid, recv_user_id:selectedValue[0], status: 0, send_username: username})
        }).then(r=>r.json()).then(json=>{
                console.log(json)
        })
    }


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
            <Select selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue([itemValue,users[itemIndex].username])}>
                {users.map((item)=>(
                    <Select.Item key={item.id} label={item.username} value={item.id} />
                ))}
            </Select>
            <Button onPress={()=>sendInvite()}>
                <TextButton>Enviar</TextButton>
            </Button>
            </InviteBox>
        </Container>
    )
}