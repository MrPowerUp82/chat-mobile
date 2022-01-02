import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackRoutes from './stackRoutes'
import {Feather} from '@expo/vector-icons'

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
        </Drawer.Navigator>
    )
}