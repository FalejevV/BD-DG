import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { InfoContainer, InfoContainerText, SettingsContainer, SettingsList, SettingsScroll, SwitchButtonContainer,SwitchButtonTextButton,SwitchButtonTitle } from "./SettingsPage.styled";
import { ISettings } from "../../interface";
import { TouchableWithoutFeedback } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Divider } from "../../styles/Styled.styled";
import { importDatabase } from "../../database";

function SettingsPage(props:{
    setWindowToggle:Function,
    setSettings:Function,
    settings:ISettings,
    exportDB:Function,
    importDB:Function,
}){

    const [removeCounter, setRemoveCounter] = useState(10);


    function importDocument(){
        DocumentPicker.getDocumentAsync().then((res:any) => {
            if(res.uri){
                props.importDB(res.uri);
            }
        });
    }
    return(
        <SettingsScroll>
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
                    
                    <InfoContainer>
                        <InfoContainerText>
                            После нажатия на кнопку нужно выбрать папку где хотите сохранить запасной файл базы данных. 
                        </InfoContainerText>

                        <InfoContainerText>
                            (Можно сохранять файлы в одну и туже папку.)
                        </InfoContainerText>


                        <TouchableWithoutFeedback onPress={() => props.exportDB()}>
                            <SwitchButtonContainer>                      
                                    <SwitchButtonTextButton>Сохранить базу данных</SwitchButtonTextButton>
                            </SwitchButtonContainer>
                        </TouchableWithoutFeedback>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoContainerText>
                            После нажатия на кнопку нужно выбрать файл который хотите загрузить. 
                        </InfoContainerText>

                        <TouchableWithoutFeedback onPress={() => importDocument()}>
                            <SwitchButtonContainer>                      
                                    <SwitchButtonTextButton>Загрузить базу данных</SwitchButtonTextButton>
                            </SwitchButtonContainer>
                        </TouchableWithoutFeedback>
                    </InfoContainer>
                </SettingsList>
            </SettingsContainer>
        </SettingsScroll>
    )
}

export default SettingsPage;