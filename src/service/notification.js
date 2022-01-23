import React from 'react'
import * as Notification from 'expo-notifications';
import {USER_FACING_NOTIFICATIONS} from 'expo-permissions'


//=======================================================

//Trigger Function Called by click of the button to
//trigger notification

//=======================================================
const triggerNotification = () => {

const foregroundSubscription = Notification.addNotificationReceivedListener(notification => {
    console.log(notification);
    });
//When app is closed
const backgroundSubscription = Notification.addNotificationResponseReceivedListener(response => {
    console.log(response);
});
//When the app is open


Notification.setNotificationHandler({
handleNotification: async () => {
return {
    shouldShowAlert: true,
    shouldPlaySound: true
};
}
});


Notification.scheduleNotificationAsync({
    content: {
    title: "Você Recebeu Novas Mensagens",
    body: "Clique aqui, para conferir..."
    },
    trigger: {
    seconds: 2
    }
});
}

export default {triggerNotification}