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
    padding:5px 20px;
    text-align: center;
`