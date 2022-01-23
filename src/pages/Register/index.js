import React, {useState} from 'react';
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';
import { Alert, Text } from 'react-native';

export default function Register(){

    const [email,setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [msg,setMsg] = useState([])

    async function Regis(){
        await fetch('https://webcoffee.herokuapp.com/api/v1/users/',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username:username, email:email, password: password, nome_chat: ''})
		}).then(res=>res.json()).then(json=>{
            console.log(json)
            setMsg(json)
            if (json?.email){
                if(typeof(json?.email) === typeof("")){
                    setMsg([])
                    Alert.alert("Sucesso","Conta criada com sucesso")
                }
            }
        })
    }


    return(
        <Container>
            <InputContainer>
                <Title>Register</Title>
                {msg?.email? <Text style={{color:"red",fontSize:15}}>{msg.email[0]}</Text>:<></>}
                <Input placeholder="E-mail" value={email} onChangeText={(text)=>{setEmail(text)}} autoCapitalize="none"/>
                {msg?.username ? <Text style={{color:"red",fontSize:15}}>{msg.username[0]}</Text>:<></>}
                <Input placeholder="Username" value={username} onChangeText={(text)=>{setUsername(text)}} autoCapitalize="none"/>
                {msg?.password? <Text style={{color:"red",fontSize:15}}>{msg.password[0]}</Text>:<></>}
                <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text)=>{setPassword(text)}} autoCapitalize="none"/>
                <Button onPress={() => Regis()}>
                    <ButtonTitle>REGISTER</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}