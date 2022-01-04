import React,{useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { Container, Button, ButtonText,Text } from './styles';

export default function Logout(){

    const navigation = useNavigation()

    useEffect(async()=>{
        await AsyncStorage.removeItem('userid')
        await AsyncStorage.removeItem('username')
        await AsyncStorage.removeItem('token')
    },[])

    return(
        <Container>
            <Text>Certeza?</Text>
            <Button onPress={()=> navigation.navigate('Login')}>
                <ButtonText>Sim</ButtonText>
            </Button>
        </Container>
    )
}