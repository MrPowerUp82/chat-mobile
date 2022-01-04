import React,{useEffect, useState} from 'react';
import {Container, ListInvites, HeaderButton, Header} from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import RenderInvites from '../../components/RenderInvites'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Send(){

    const [invites,setInvites] = useState([])
    const [token,setToken] = useState('')
    const [userid,setUserid] = useState('')

    const navigation = useNavigation();


    function navigateToSearchPage(){
        navigation.navigate('Search')
    }

    useEffect(async()=>{

        const token = await AsyncStorage.getItem('token')
        setToken(token)
        const user_id = await AsyncStorage.getItem('userid')
        setUserid(user_id)

        await fetch('https://webcoffee.herokuapp.com/api/v1/invites/'+user_id+'/',{
            headers: {'Authorization': `Bearer ${token}`}
        }).then(r=>r.json()).then(json=>{
            setInvites(json)
        })
    },[])

    return(
        <Container>
            <Header>
                <HeaderButton onPress={()=>navigateToSearchPage()}>
                    <Feather name="search" size={28} color="#fff"/>
                </HeaderButton>
            </Header>
            <ListInvites data={invites} renderItem={({item})=><RenderInvites data={item}/>} keyExtractor={(item)=>item.id} />
        </Container>
    )
}