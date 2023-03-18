import styled, { css } from "styled-components/native";

export const InputFieldContainer = styled.View<{
    maxWidth:string,
    multiline?:boolean,
}>`
    width:100%;
    max-width: ${({maxWidth}) => maxWidth};
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    ${({ multiline }) => multiline && css`
        max-width:100%;
        flex:1;
    `}
`
export const TextInputField = styled.TextInput<{
    multiLine?:boolean,
}>`
    width:100%;
    height:40px;
    font-size: 16px;
    padding:0px 15px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border:2px solid ${({ theme }) => theme.accentColor || "red"};
    border-radius: 5px;
    color:${({ theme }) => theme.accentColor || "red"};
    ${({ multiLine }) => multiLine && css`
        height:auto;
        flex:1;
    `}
`

export const InputTitle = styled.Text`
    font-size: 18px;
    color:${({ theme }) => theme.accentColor || "red"};
    font-weight: 500;
`