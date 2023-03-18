import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { SettingsContainer, SettingsList, SwitchButtonContainer, SwitchButtonText } from "./SettingsPage.styled";
import { ISettings } from "../../interface";
import { TouchableWithoutFeedback } from "react-native";


function SettingsPage(props:{
    setWindowToggle:Function,
    setSettings:Function,
    settings:ISettings,
}){

    const [removeCounter, setRemoveCounter] = useState(10);
    
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
                        <SwitchButtonText>Тема: </SwitchButtonText>
                        
                            <SwitchButtonText>{props.settings.theme === 0 ? "Светлая" : "Темная"}</SwitchButtonText>
                        
                    </SwitchButtonContainer>
                </TouchableWithoutFeedback>
            </SettingsList>
        </SettingsContainer>
    )
}

export default SettingsPage;