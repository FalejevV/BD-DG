import styled from "styled-components/native";

export const CheckBoxContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:10px;
    gap:15px;
`

export const CheckBoxIconWrap = styled.View`
    padding:10px;
    background-color:${({ theme }) => theme.frameColor || "red"};
    border-radius:5px;
    border:2px solid ${({ theme }) => theme.accentColor || "red"};
`

export const CheckBoxIcon = styled.Image`
    width:35px;
    height:35px;
`

export const CheckBoxTitle = styled.Text`
    font-size: 18px;
`