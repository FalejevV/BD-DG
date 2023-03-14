import styled from "styled-components/native";

export const CountrySelectWindowContainer = styled.View`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CSWHeaderContainer = styled.View`
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

export const CloseIconContainer = styled.View`
    position: absolute;
    right:0px;
    top:0px;
`

export const CSWScrollView = styled.ScrollView`
    display: flex;
    flex:1;
    width:100%;
`

export const CountryButtonWrapper = styled.View`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`