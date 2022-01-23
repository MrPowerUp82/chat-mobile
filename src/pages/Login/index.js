import React, {useState, useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';
import { NativeModules, Alert } from 'react-native';
import * as Updates from 'expo-updates'


export default function Login(){


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [token, setToken] = useState('')
    const [user,setUser] = useState('')
    const [userID,setUserID] = useState('')
    const [ok,setOk] = useState(false)

    useEffect(async()=>{
        if (ok){
            await Promise.all([
                AsyncStorage.setItem('token', token),
                AsyncStorage.setItem('username',user),
                AsyncStorage.setItem('userid',userID.toString())
                ])
                NativeModules.DevSettings.reload()
                await Updates.reloadAsync()
        }
    },[ok])

    useEffect(async()=>{
        if (token !== ''){
            await fetch('https://webcoffee.herokuapp.com/api/v1/user/',{
			headers: {'Authorization': `Bearer ${token}`}
		}).then(r=>r.json()).then(json=>{
            console.log(json[0])
            setUser(json[0].username)
            setUserID(json[0].id)
            setOk(true)
        })
        }
    },[token])


    async function handleLogin(){
        await fetch('https://webcoffee.herokuapp.com/token/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:username, password: password})
        }).then(r=>r.json()).then(json=>{
            if (json?.detail){
                Alert.alert("Login", json.detail)
            }else{
                setToken(json.access)
            }
        })
    }


    return(
        <Container>
            <InputContainer>
                <Title>Login</Title>
                <Input placeholder="Username" value={username} onChangeText={(text)=>{setUsername(text)}}/>
                <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text)=>{setPassword(text)}}/>
                <Button onPress={()=>handleLogin()}>
                    <ButtonTitle>LOGIN</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}