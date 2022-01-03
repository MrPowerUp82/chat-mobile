import React from 'react';
import {Container, Name} from './styles.js'
import {Feather} from '@expo/vector-icons'

export default function RenderInvites(){
    return(
        <Container>
            <Name>Teste</Name>
            <Feather name="check" size={28} color="green"/>
            <Feather name="x" size={28} color="red"/>
        </Container>
    )
}