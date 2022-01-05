import React, {useState, useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';

export default function Login(){


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [token, setToken] = useState('')
    const [user,setUser] = useState('')
    const [userID,setUserID] = useState('')

    useEffect(async()=>{
        if (token !== ''){
            await fetch('https://webcoffee.herokuapp.com/api/v1/user/',{
			headers: {'Authorization': `Bearer ${token}`}
		}).then(r=>r.json()).then(json=>{
            console.log(json[0])
            setUser(json[0].username)
            setUserID(json[0].id)
        })
        await AsyncStorage.setItem('username',user)
        await AsyncStorage.setItem('userid',userID.toString())
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
            setToken(json.access)
        })
        await AsyncStorage.setItem('token', token)
        await AsyncStorage.setItem('username',user)
        await AsyncStorage.setItem('userid',userID.toString())
        
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