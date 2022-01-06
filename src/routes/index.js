import React, {useEffect, useState} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackRoutes from './stackRoutes'
import {Feather} from '@expo/vector-icons'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Send from '../pages/Send'
import { checkLogin } from '../utils/check_login'
import Logout from '../pages/Logout'

const Drawer = createDrawerNavigator()

export default function Routes(){

    const [check,setCheck] = useState('')

    useEffect(async()=>{
        const check = await checkLogin()
        setCheck(check)
    },[])

    return(
        <Drawer.Navigator>
            {check ? (
                <>
                <Drawer.Screen name="HomeStack" component={StackRoutes} options={{
                title: 'Chat',
                drawerIcon: ({focused,size,color})=>(
                    <Feather name="message-square" size={size} color={color} />
                )
            }}/>
            <Drawer.Screen name="Send" component={Send} options={{
                title:'Solicitações',
                drawerIcon: ({focused,size,color})=>(<Feather name="inbox" size={size} color={color} />)
            }} />
                <Drawer.Screen name="Logout" component={Logout} options={{
                    drawerIcon: ({focused,size,color})=>(<Feather name="log-out" size={size} color={color} />)
                }}/>
                </>
            ) : (
                <>
                <Drawer.Screen name="LoginDrawer" component={Login} options={{
                    title: 'Login',
                    drawerIcon: ({focused,size,color})=>(<Feather name="log-in" size={size} color={color} />)
                }}/>
                <Drawer.Screen name="Register" component={Register} options={{
                    drawerIcon: ({focused,size,color})=>(<Feather name="user" size={size} color={color} />)
                }}/>
                </>
            )}
        </Drawer.Navigator>
    )
}