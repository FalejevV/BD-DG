import { CountryListContainer, CountryText} from "./CountryListButton.styled";
import { TouchableWithoutFeedback } from "react-native";


function CountryListButton(props:{
    country:string,
    setToggleCountryWindow:Function,
}){

    return(
        <TouchableWithoutFeedback onPress={() => props.setToggleCountryWindow(true)}>
            <CountryListContainer>
                <CountryText>{props.country}</CountryText>
            </CountryListContainer>
        </TouchableWithoutFeedback>
    )
}

export default CountryListButton;