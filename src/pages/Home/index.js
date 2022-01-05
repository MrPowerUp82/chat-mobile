import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Container, SliderFriends, Text} from './styles.js'
import SliderItem from '../../components/SliderItems/index.js';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export default function Home(){

    const [friends,setFriends] = useState([])

    useEffect(async()=>{
        const user_id = await AsyncStorage.getItem('userid')
        const username = await AsyncStorage.getItem('username')
        const token = await AsyncStorage.getItem('token')
        try{
            await fetch('https://webcoffee.herokuapp.com/api/v1/friends/'+user_id+'/',{
            headers: {'Authorization': `Bearer ${token}`}
        }).then(r=>r.json()).then(json=>{
            setFriends(json)
        })
        }catch{
            setFriends('erro')
        }
        
    },[])

    const navigation = useNavigation()

    function navigateToChat(item){
        navigation.navigate('Chat', {data:item})
    }

    if(friends === 'erro'){
      return(
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Você não tem amigos</Text>
        </View>
      )
    }else{
        return(
            <Container>
                <SliderFriends data={friends} renderItem={({item})=><SliderItem data={item} navigatePage={()=>navigateToChat(item)} keyExtractor={(item)=>item.id.toString()} />} />
            </Container>
        )
    }
   
}