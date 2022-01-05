import React,{useEffect, useState} from 'react';
import {Container, Name} from './styles.js'
import {Feather} from '@expo/vector-icons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates'
import { NativeModules } from 'react-native';

export default function RenderInvites({data}){

    const [token,setToken] = useState('')
    const [userid,setUserid] = useState('')

    useEffect(async()=>{

        const token = await AsyncStorage.getItem('token')
        setToken(token)
        const user_id = await AsyncStorage.getItem('userid')
        setUserid(user_id)
    },[])

    async function deleteInvite(id){
        try{
            await fetch(`https://webcoffee.herokuapp.com/api/v1/invites/${id}/`,{
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'}
        }).then(r=>r.json()).then(json=>{
               console.log(json)
        })
        }catch{
            NativeModules.DevSettings.reload()
            Updates.reloadAsync()
        }
    }

    async function acceptInvite(send_user_id,send_username,id){
       try{
        await fetch(`https://webcoffee.herokuapp.com/api/v1/invites/`,{
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'},
            body: JSON.stringify({id:id,send_user_id:send_user_id, recv_user_id:userid, status: 1, send_username: send_username})
        }).then(r=>r.json()).then(json=>{
               console.log(json)
               
        })
       }catch{
            NativeModules.DevSettings.reload()
            Updates.reloadAsync()
       }
    }

    return(
        <Container>
            <Name>{data.send_username}</Name>
            <Feather name="check" size={28} color="green" onPress={()=>acceptInvite(data.send_user_id, data.send_username,data.id)}/>
            <Feather name="x" size={28} color="red" onPress={()=>deleteInvite(data.id)}/>
        </Container>
    )
}