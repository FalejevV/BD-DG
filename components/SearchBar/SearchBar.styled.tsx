import { ThemeProvider } from "styled-components"
import styled from "styled-components/native"

export const SearchBarContainer = styled.View`
    max-width: 515px;
    width:100%;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border-radius: 5px;
    height:40px;
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};

    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

export const SearchBarInput = styled.TextInput`
    position: absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    padding:0px 15px;

    color: ${({ theme }) => theme.accentColor || "red"};
    font-size: 16px;
    font-weight: 600;
`

export const SearchBarClearIcon = styled.Image`
    width:25px;
    height:25px;
    position:absolute;
    right:5px;
`