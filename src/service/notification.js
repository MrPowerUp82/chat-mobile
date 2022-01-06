import React, { useEffect } from 'react';
import * as Notification from 'expo-notifications';


//=======================================================

//Trigger Function Called by click of the button to
//trigger notification

//=======================================================
const triggerNotification = () => {

Notification.setNotificationHandler({
handleNotification: async () => {
return {
    shouldShowAlert: true,
    shouldPlaySound: true
};
}
});

    //When app is closed
const backgroundSubscription = Notification.addNotificationResponseReceivedListener(response => {
    console.log(response);
});
//When the app is open
const foregroundSubscription = Notification.addNotificationReceivedListener(notification => {
    console.log(notification);
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