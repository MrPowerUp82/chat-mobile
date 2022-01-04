import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MsgBoxLeft, MsgBoxRight,Text} from './styles.js'

export default function RenderMsg({data, user_id}){


    return(
        <>
        {user_id.toString() === data.send_user_msg_id.toString() ? (
                <MsgBoxRight>
                <Text size={16}>{data.msg}</Text>
                <Text>{data.data.split('T')[0].split('-').reverse().join('/')} ás {data.data.split('T')[1].split('.')[0].split('').splice(0,5)}</Text>
                </MsgBoxRight>
        ) : <></>}
        {user_id.toString() === data.recv_user_msg_id.toString() ? (
                <MsgBoxLeft>
                <Text color="#fff" size={16}>{data.msg}</Text>
                <Text color="#fff">{data.data.split('T')[0].split('-').reverse().join('/')} ás {data.data.split('T')[1].split('.')[0].split('').splice(0,5)}</Text>
                </MsgBoxLeft>
        ) : <></>}                
        </>
    )
}
/*
<>
<MsgBoxRight>
    <Text>Teste</Text>
</MsgBoxRight>
<MsgBoxLeft>
    <Text>Teste</Text>
</MsgBoxLeft>
</>
*/