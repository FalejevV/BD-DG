import { CSWHeaderContainer, CSWScrollView, CSWTitle, CloseIconContainer, CountryButtonWrapper, CountrySelectWindowContainer } from "./CountrySelectWindow.styled";
import CButton from "../../components/CButton/CButton";
import {SvgXml} from "react-native-svg";
import { TouchableWithoutFeedback } from "react-native";
import uuid from 'react-native-uuid';

function CountrySelectWindow(props:{
    setCountry:Function,
    setToggleCountryWindow:Function,
    usedCountries:string[],
}){

    return(
        <CountrySelectWindowContainer>
            <CSWHeaderContainer>
                <CSWTitle>Выбор страны</CSWTitle>
                <TouchableWithoutFeedback onPress={() => props.setToggleCountryWindow(false)}>
                    <CloseIconContainer>
                        <SvgXml xml={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="black"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>'} />
                    </CloseIconContainer>
                </TouchableWithoutFeedback>
            </CSWHeaderContainer>
            <CSWScrollView >
                {props.usedCountries.map((country:string, index:number) => <CountryButtonWrapper key={uuid.v4().toString()}><CButton text={country} onPress={() => {props.setCountry(country); props.setToggleCountryWindow(false)}} /></CountryButtonWrapper>)}
            </CSWScrollView>
        </CountrySelectWindowContainer>
    )
}

export default CountrySelectWindow;