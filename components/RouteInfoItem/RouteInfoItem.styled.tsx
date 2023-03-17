import styled from "styled-components/native"

export const RouteInfoItemContainer = styled.View`
    display: flex;
    width:100%;
    flex-direction: row;
    gap:15px;
    padding:0px 15px;
`

export const RouteInfoTitle = styled.Text`
    font-size:18px;
    color:${({ theme }) => theme.accentColor || "red"};
    width:80px;
`

export const RouteInfoValue = styled.Text`
    font-size:18px;
    font-weight: 600;
    color:${({ theme }) => theme.accentColor || "red"};
    flex-wrap:wrap;
    flex:1;
`