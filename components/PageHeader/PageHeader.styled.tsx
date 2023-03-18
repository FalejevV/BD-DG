import styled from "styled-components/native";

export const PageHeaderContainer = styled.View`
    width:100%;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color:${({ theme }) => theme.accentColor || "red"};
    margin-bottom: 20px;
    background-color:${({ theme }) => theme.frameColor || "red"};
` 

export const CloseContainer = styled.View`
    position: absolute;
    right:0px;
`