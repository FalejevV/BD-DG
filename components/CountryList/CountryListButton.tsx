import { CountryListContainer, CountryText} from "./CountryListButton.styled";
import { TouchableWithoutFeedback } from "react-native";


function CountryListButton(props:{
    country:string,
    setWindowToggle:Function,
}){

    return(
        <TouchableWithoutFeedback onPress={() => props.setWindowToggle("country")}>
            <CountryListContainer>
                <CountryText>{props.country}</CountryText>
            </CountryListContainer>
        </TouchableWithoutFeedback>
    )
}

export default CountryListButton;