import styled from 'styled-components'


export const Header = styled.View`
    width: 100%;
    height: 8%;
    background-color:rgb(37,99,235);
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
export const HeaderButton = styled.TouchableOpacity`
    padding: 0 14px;
`

export const Container = styled.SafeAreaView`
    flex: 1
    background-color:#fff;
    padding: 4px 0;
    justify-content: center;
    align-items: center;
`

export const ListInvites = styled.FlatList`
    flex-direction: column;
    background-color:#fff;
`

export const TextInfo = styled.Text`
    font-size: 24px;
`