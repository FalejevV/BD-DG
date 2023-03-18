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
`

export const SwitchButtonText = styled.Text`
    color:${({ theme }) => theme.accentColor || "red"};
    font-size: 18px;
`