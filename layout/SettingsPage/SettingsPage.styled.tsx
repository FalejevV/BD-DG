import styled from "styled-components/native";

export const SettingsScroll = styled.ScrollView`
    width:100%;
    height:100%;
`

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

export const InfoContainer = styled.View`
    width:100%;
    max-width: 400px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:15px;
    gap:15px;
`

export const InfoContainerText = styled.Text`
    width:100%;
    text-align: left;
    font-size: 17px;
`