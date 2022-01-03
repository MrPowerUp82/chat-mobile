import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1
    background-color:#fff;
    padding: 4px 0;
`

export const Header = styled.View`
    width: 100%;
    height: 8%;
    background-color:rgb(37,99,235);
    flex-direction: row;
    align-items: center;
    margin-bottom:5px;
`
export const HeaderButton = styled.TouchableOpacity`
    padding: 0 14px;
`
export const Title = styled.Text`
    font-size:20;
    font-weight:bold;
    color:#fff;
    margin-left: 15%;
`

export const InviteBox = styled.View`
    justify-content:center;
    align-items: center;
    flex-direction:column;
`

export const Select = styled.Picker`
height: 80px;
width: 150px;
margin-bottom: 5px;
`

export const Button = styled.TouchableOpacity`
    background-color:rgb(37,99,235);
    padding:14px;
    border-radius:12px;
`
export const TextButton = styled.Text`
    color:#fff;
    font-size:20px;
`