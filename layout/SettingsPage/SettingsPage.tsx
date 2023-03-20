import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { ImportExportContainer, InfoContainer, InfoContainerText, SettingsContainer, SettingsList, SettingsScroll, SpaceTaker, SwitchButtonContainer,SwitchButtonTextButton,SwitchButtonTitle } from "./SettingsPage.styled";
import { ISettings } from "../../interface";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { Divider } from "../../styles/Styled.styled";
import kilodata from "../../kilodata.json";

function SettingsPage(props:{
    setWindowToggle:Function,
    setSettings:Function,
    settings:ISettings,
    exportDB:Function,
    importDB:Function,
    clearDB:Function,
    testDatabaseImport:Function,
}){

    const [removeCounter, setRemoveCounter] = useState(10);
    const [testDatabaseCounter, setTestDatabaseCounter] = useState(5);

    function importDocument(){
        DocumentPicker.getDocumentAsync().then((res:any) => {
            if(res.uri){
                props.importDB(res.uri);
            }
        });
    }

    function removeDatabase(){
        if(removeCounter <= 0){
            props.clearDB();
            setRemoveCounter(10);
        }else{
            setRemoveCounter(prev => prev - 1);
        }
    }

    function importTextDatabase(){
        if(testDatabaseCounter <= 0){
            props.testDatabaseImport(kilodata);
            setTestDatabaseCounter(5);
        }else{
            setTestDatabaseCounter(prev => prev - 1);
        }
    }
    return(
        
            <SettingsContainer>
                <PageHeader setWindowToggle={() => props.setWindowToggle("")} title={"Настройки"} />
                <SettingsScroll>
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
                        
                        <ImportExportContainer>
                            <InfoContainer>
                                <InfoContainerText>
                                    После нажатия на кнопку нужно выбрать папку где хотите сохранить запасной файл базы данных. 
                                </InfoContainerText>

                                <SpaceTaker></SpaceTaker>

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

                                <SpaceTaker></SpaceTaker>

                                <TouchableWithoutFeedback onPress={() => importDocument()}>
                                    <SwitchButtonContainer>                      
                                            <SwitchButtonTextButton>Загрузить базу данных</SwitchButtonTextButton>
                                    </SwitchButtonContainer>
                                </TouchableWithoutFeedback>
                            </InfoContainer>
                        </ImportExportContainer>

                        <ImportExportContainer>
                            <InfoContainer backgroundColor="#ff000075">
                                <InfoContainerText>
                                    Чтобы удалить базу данных нужно 10 раз нажать на кнопку.
                                </InfoContainerText>

                                <SpaceTaker></SpaceTaker>

                                <TouchableOpacity onPress={removeDatabase}>
                                    <SwitchButtonContainer>                      
                                            <SwitchButtonTextButton>УДАЛИТЬ БАЗУ ДАННЫХ ({removeCounter})</SwitchButtonTextButton>
                                    </SwitchButtonContainer>
                                </TouchableOpacity>
                            </InfoContainer>

                            <InfoContainer>
                                <InfoContainerText>
                                    Чтобы загрузить тестовую базу данных с 2000 записей, нужно нажать 5 раз на кнопку. 
                                </InfoContainerText>

                                <SpaceTaker></SpaceTaker>
                                
                                <TouchableOpacity onPress={importTextDatabase}>
                                    <SwitchButtonContainer>                      
                                            <SwitchButtonTextButton>Загрузить 2000 записей ({testDatabaseCounter})</SwitchButtonTextButton>
                                    </SwitchButtonContainer>
                                </TouchableOpacity>
                            </InfoContainer>
                        </ImportExportContainer>
                    </SettingsList>
                </SettingsScroll>
            </SettingsContainer>
    )
}

export default SettingsPage;