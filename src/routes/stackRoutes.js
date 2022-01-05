import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/Home';
import Chat from '../pages/Chat'
import Search from '../pages/Search'
import Login from '../pages/Login'
import { checkLogin } from '../utils/check_login'


const Stack  =  createNativeStackNavigator()

export default function StackRoutes(){

    const [check, setCheck] = useState('')

    useEffect(async()=>{
        const check = await checkLogin()
        setCheck(check)
    },[])


    return(
        <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />
                <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}