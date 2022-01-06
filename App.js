import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native'
import MyTask from './src/service/MyTask'


export default function App(){

  useEffect(()=>{
    MyTask.register().then(()=>console.log('ok'))
  },[])

  return(
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes/>
    </NavigationContainer>
  )
}
