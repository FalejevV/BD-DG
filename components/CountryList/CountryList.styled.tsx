import styled, { css } from "styled-components/native";

export const CountryListContainer = styled.View`
    width:100%;
    max-width:150px;
    height:40px;
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};
    border-radius:5px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CountryText = styled.Text`
    color: ${({ theme }) => theme.accentColor || "red"};
    font-size: 16px;
    font-weight: 600;
    user-select: none;
    padding:10px 20px;
    text-align: center;
`

export const CountriesList = styled.View<{
    toggle:boolean
}>`
    display: none;
    max-width: 150px;
    width:100%;
    position:absolute;
    top:38px;
    right:0px;
    height:300px;
    max-height: 300px;
    overflow-y:scroll;
    overflow-x:hidden;

    ${({ toggle }) => toggle && css`
        display: flex;
    `}
`

export const CountryElement = styled.TouchableOpacity`
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};
    border-radius:5px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
`