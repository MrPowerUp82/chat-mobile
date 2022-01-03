import React from 'react';
import { Text } from 'react-native';
import {MsgBoxLeft, MsgBoxRight} from './styles.js'

export default function RenderMsg(){
    return(
        <>
            <MsgBoxRight>
                <Text>Teste</Text>
            </MsgBoxRight>
            <MsgBoxLeft>
                <Text>Teste</Text>
            </MsgBoxLeft>
        </>
    )
}