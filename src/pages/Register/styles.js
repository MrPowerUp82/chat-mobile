import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 4px 0;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

export const InputContainer = styled.View`
    flex-direction: column;
    padding: 14px;
    background-color: #fff;
    height:65%;
    width:85%;
    background-color: rgba(37,99,235, 0.8);
    justify-content: center;
    align-items: center;
    border-radius:20px;
`

export const Input = styled.TextInput`
background-color: rgba(255,255,255, 0.8)
width: 95%;
height: 50px;
border-radius: 50px;
padding: 8px 15px;
font-size: 18px;
color: #fff;
margin-bottom:5px;
`

export const Title = styled.Text`
    top: -17%;
    font-size:25px;
    font-weight:bold;
    color: #fff;
`

export const Button = styled.TouchableOpacity`
top: 15%;
padding: 10px;
background-color: #fff;
border-radius: 15px;
width: 45%;
height: 55px;
justify-content: center;
align-items: center;
`
export const ButtonTitle = styled.Text`
color:#0066ff;
font-size:18px; 
font-weight:bold;
`