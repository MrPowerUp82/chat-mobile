import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackRoutes from './stackRoutes'
import {Feather} from '@expo/vector-icons'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Drawer = createDrawerNavigator()

export default function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="HomeStack" component={StackRoutes} options={{
                title: 'Chat',
                drawerIcon: ({focused,size,color})=>(
                    <Feather name="message-square" size={size} color={color} />
                )
            }}/>
            <Drawer.Screen name="Login" component={Login}></Drawer.Screen>
            <Drawer.Screen name="Register" component={Register}></Drawer.Screen>
        </Drawer.Navigator>
    )
}