import React from 'react';
import {Container, SliderFriends} from './styles.js'
import SliderItem from '../../components/SliderItems/index.js';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation()

    const data = [1,2,3,4,5,6,7,8,9]

    function navigateToChat(item){
        navigation.navigate('Chat', {id:item})
    }

    return(
        <Container>
            <SliderFriends data={data} renderItem={({item})=><SliderItem data={item} navigatePage={()=>navigateToChat(item)} />} />
        </Container>
    )
}