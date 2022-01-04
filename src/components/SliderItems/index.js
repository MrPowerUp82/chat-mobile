import React from 'react';
import {Container, Name} from './styles.js'

export default function SliderItem({data, navigatePage}){
    return(
        <Container onPress={()=> navigatePage(data)}>
            <Name>{data[0].username}</Name>
        </Container>
    )
}