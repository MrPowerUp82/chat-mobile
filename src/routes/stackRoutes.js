import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/Home';
import Chat from '../pages/Chat'


const Stack  =  createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}