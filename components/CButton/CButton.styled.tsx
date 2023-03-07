import styled from "styled-components/native";

export const CButtonContainer = styled.View`
    width:150px;
    height:40px;
    padding:5px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border:2px solid ${({ theme }) => theme.accentColor || "red"};
`

export const CButtonText = styled.Text`
    font-size: 16px;
    color:${({ theme }) => theme.accentColor || "red"};
`
