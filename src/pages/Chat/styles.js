import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 4px 0;
    background-color:#fff;
`

export const Header = styled.View`
    width: 100%;
    height: 8%;
    background-color:rgb(37,99,235);
    flex-direction: row;
    align-items: center;
`
export const HeaderButton = styled.TouchableOpacity`
    padding: 0 14px;
`

export const NameChat = styled.Text`
    font-size:20;
    font-weight:bold;
    color:#fff;
    margin-left: 25%;
`

export const ChatMessage = styled.FlatList`
background-color:#fff;
height: 83%;
flex-direction:column;
padding: 4px 0;
`
export const InputContainer = styled.View`
height: 9%;
flex-direction: row;
`
export const Input = styled.TextInput`
    background-color: rgba(37,99,235, 0.8);
    width: 85%;
    height: 100%;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 18px;
    color: #fff;
    border: 2px solid black;
`
export const SendButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`