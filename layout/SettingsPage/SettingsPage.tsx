import PageHeader from "../../components/PageHeader/PageHeader";
import { SettingsContainer } from "./SettingsPage.styled";


function SettingsPage(props:{
    setWindowToggle:Function,
}){
    return(
        <SettingsContainer>
            <PageHeader setWindowToggle={() => props.setWindowToggle("")} title={"Настройки"} />
        </SettingsContainer>
    )
}

export default SettingsPage;