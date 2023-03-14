import styled from "styled-components/native";

export const NewRoutePageContainer = styled.View`
    width:100%;
    height:100%;
`

export const NewRoutePageHeader = styled.View`
    width:100%;
    height:40px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color:${({ theme }) => theme.accentColor || "red"};
` 

export const CloseContainer = styled.View`
    position: absolute;
    right:0px;
    
`