import AsyncStorage from "@react-native-async-storage/async-storage";

export async function checkLogin(){
    let check = await AsyncStorage.getItem('token')
    console.log(check)
    if (check === null){
        return false
    }else{
        return true
    }
}