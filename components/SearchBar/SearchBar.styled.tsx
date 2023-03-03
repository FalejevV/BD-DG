import styled from "styled-components/native"

export const SearchBarContainer = styled.View`
    max-width: 515px;
    width:100%;
    background-color: #F8F8F8;
    border-radius: 5px;
    height:40px;
    border: 2px solid #32271C;

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
`

export const SearchBarClearIcon = styled.Image`
    width:25px;
    height:25px;
    position:absolute;
    right:5px;
`