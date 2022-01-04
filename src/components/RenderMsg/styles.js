import styled from "styled-components";

export const MsgBoxRight = styled.View`
    background-color:#ddd;
    align-items:flex-end;
    padding: 14px
    width: 50%;
    border-radius:20px;
    left:50%;
    margin-bottom:5px;
`

export const MsgBoxLeft = styled.View`
    background-color: rgba(37,99,235, 0.8);
    align-items:flex-start;
    padding: 14px
    width: 50%;
    border-radius:20px;
    margin-bottom:5px;
`

export const Text = styled.Text`
    color:${props=>(props?.color ? props.color : 'black')};
    font-size:${props=>(props?.size ? props.size : '12')}px;
`