import styled from 'styled-components/native'

export const Container = styled.ScrollView``

export const TopContent = styled.View`
    flex: 1;
    background: ${(theme) => theme.theme.color.primaryColor};
    align-items: flex-start;
    justify-content: center;
    padding: 0 20px;
`

export const Content = styled.View`
    flex: 5;
    padding: 20px;
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`