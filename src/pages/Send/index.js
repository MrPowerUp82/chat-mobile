import React from 'react';
import {Container, ListInvites, HeaderButton, Header} from './styles'
import RenderInvites from '../../components/RenderInvites'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Send(){

    const navigation = useNavigation();

    const data= [1,2,3]

    function navigateToSearchPage(){
        navigation.navigate('Search')
    }

    return(
        <Container>
            <Header>
                <HeaderButton onPress={()=>navigateToSearchPage()}>
                    <Feather name="search" size={28} color="#fff"/>
                </HeaderButton>
            </Header>
            <ListInvites data={data} renderItem={({item})=><RenderInvites/>}/>
        </Container>
    )
}