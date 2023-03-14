import styled from "styled-components/native";

export const NewRoutePageContainer = styled.View`
    width:100%;
    height:100%;
`

export const NewRoutePageHeader = styled.View`
    width:100%;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color:${({ theme }) => theme.accentColor || "red"};
    margin-bottom: 20px;
` 

export const CloseContainer = styled.View`
    position: absolute;
    right:0px;
`
export const FormScroll = styled.ScrollView`
    width:100%;
    height:100%;
`

export const FormContainer = styled.View`
    display:flex;
    flex-direction: column;
    gap:15px;

`

export const LineFlexContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    gap:15px;
`