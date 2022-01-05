import React, {useState} from 'react';
import { Container, InputContainer,Title,Input, Button, ButtonTitle} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Register(){

    const navigation = useNavigation();

    const [email,setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')

    async function Regis(){
        await fetch('https://webcoffee.herokuapp.com/api/v1/users/',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username:username, email:email, password: password, nome_chat: ''})
		}).then(res=>res.json()).then(json=>{
            console.log(json)
            alert("Certo. Agora vá até a página de Login...")
        })
    }

    function navigateToLoginPage(){
        navigation.navigate('Login')
    }


    return(
        <Container>
            <InputContainer>
                <Title>Register</Title>
                <Input placeholder="E-mail" value={email} onChangeText={(text)=>{setEmail(text)}}/>
                <Input placeholder="Username" value={username} onChangeText={(text)=>{setUsername(text)}}/>
                <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text)=>{setPassword(text)}}/>
                <Button onPress={() => Regis()}>
                    <ButtonTitle>REGISTER</ButtonTitle>
                </Button>
            </InputContainer>
        </Container>
    )
}