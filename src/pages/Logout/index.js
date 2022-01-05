import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Button, ButtonText,Text } from './styles';
import { NativeModules } from 'react-native';
import * as Updates from 'expo-updates'

export default function Logout(){
    

    async function sair(){
        await AsyncStorage.removeItem('userid')
        await AsyncStorage.removeItem('username')
        await AsyncStorage.removeItem('token')
        NativeModules.DevSettings.reload()
        await Updates.reloadAsync()
    }

    return(
        <Container>
            <Text>Certeza?</Text>
            <Button onPress={()=> sair()}>
                <ButtonText>Sim</ButtonText>
            </Button>
        </Container>
    )
}