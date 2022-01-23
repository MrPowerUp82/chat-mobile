import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import Notification from './Notification';
import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_NAME = 'NOTIFICATION_TASK'

async function CheckMsg(){
  const [msgs, token] = await Promise.all([
    parseInt(await AsyncStorage.getItem('msgs')),
    await AsyncStorage.getItem('token')
  ])
  let check = 0
  await fetch(`https://webcoffee.herokuapp.com/api/v1/check/`,{
    headers: {'Authorization': `Bearer ${token}`}
}).then(r=>r.json()).then(json=>{
  check = json.lenght
})
console.log(msgs,check)
if(check > msgs){
  return Notification.triggerNotification()
}else{
  return false
}
}


TaskManager.defineTask(TASK_NAME, () => {
  try {
    const receivedNewData = CheckMsg()
    return receivedNewData ? BackgroundFetch.Status.NewData : BackgroundFetch.Status.NoData;
  } catch (error) {
    return BackgroundFetch.Status;
  }
});

const register = () =>{
    return BackgroundFetch.registerTaskAsync(TASK_NAME,{
        minimumInterval: 10,
        stopOnTerminate: true,
        startOnBoot: true,
    })
}

const unregister = () =>{
  return BackgroundFetch.unregisterTaskAsync(TASK_NAME)
}

export default {register,unregister}