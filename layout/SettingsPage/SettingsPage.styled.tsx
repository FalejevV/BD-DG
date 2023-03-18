import styled from "styled-components/native";

export const SettingsContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap:10px;
`

export const SettingsList = styled.View`
    display: flex;
    flex-direction: column;
    gap:15px;
    padding:15px;
    width:100%;
`

export const SwitchButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:15px;
    max-width: 300px;
`

export const SwitchButtonTitle = styled.Text`
    color:${({ theme }) => theme.accentColor || "red"};
    font-size: 18px;
`

export const SwitchButtonTextButton = styled.Text`
    padding:7px 20px;
    text-align: center;
    color:${({ theme }) => theme.accentColor || "red"};
    font-size: 18px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};
`