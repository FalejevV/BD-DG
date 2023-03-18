import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { SettingsContainer, SettingsList, SwitchButtonContainer,SwitchButtonTextButton,SwitchButtonTitle } from "./SettingsPage.styled";
import { ISettings } from "../../interface";
import { TouchableWithoutFeedback } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Divider } from "../../styles/Styled.styled";
import { fileName } from "../../database";

function SettingsPage(props:{
    setWindowToggle:Function,
    setSettings:Function,
    settings:ISettings,
}){

    const [removeCounter, setRemoveCounter] = useState(10);
    
    async function saveDatabase(){
        
    }
    return(
        <SettingsContainer>
            <PageHeader setWindowToggle={() => props.setWindowToggle("")} title={"Настройки"} />
            <SettingsList>
                <TouchableWithoutFeedback onPress={() => {
                            props.setSettings((prev:ISettings) => ({
                                ...prev,
                                theme: prev.theme === 1 ? 0 : 1,
                            }))
                        }}>
                    <SwitchButtonContainer>
                        <SwitchButtonTitle>Выбор темы: </SwitchButtonTitle>
                        
                            <SwitchButtonTextButton>{props.settings.theme === 0 ? "Светлая" : "Темная"}</SwitchButtonTextButton>
                        
                    </SwitchButtonContainer>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                            props.setSettings((prev:ISettings) => ({
                                ...prev,
                                floatingMenuPosition: prev.floatingMenuPosition === 1 ? 0 : 1,
                            }))
                        }}>
                    <SwitchButtonContainer>
                        <SwitchButtonTitle>Позиция бокового меню:</SwitchButtonTitle>
                        
                            <SwitchButtonTextButton>{props.settings.floatingMenuPosition === 0 ? "Слева" : "Справа"}</SwitchButtonTextButton>
                        
                    </SwitchButtonContainer>
                </TouchableWithoutFeedback>

                <Divider></Divider>

                <TouchableWithoutFeedback onPress={saveDatabase}>
                    <SwitchButtonContainer>                      
                            <SwitchButtonTextButton>Сохранить базу данных</SwitchButtonTextButton>
                    </SwitchButtonContainer>
                </TouchableWithoutFeedback>
            </SettingsList>
        </SettingsContainer>
    )
}

export default SettingsPage;