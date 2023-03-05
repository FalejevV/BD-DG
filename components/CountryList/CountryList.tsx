import { useState } from "react";
import { CountryText, CountryListContainer, CountriesList, CountryElement } from "./CountryList.styled";
import { TouchableWithoutFeedback } from "react-native";
import countries from "../../countries";



function CountryList(props:{
    country:string,
    setCountry:Function
}){

    const [toggleList, setToggleList] = useState(false);

    return(
        <TouchableWithoutFeedback onPress={() => setToggleList(prev => !prev)}>
            <CountryListContainer>
                <CountryText>{props.country}</CountryText>
                <CountriesList toggle={toggleList}>
                    {countries.map((country:string) => <CountryElement onPress={() => {props.setCountry(country); setToggleList(false)}}><CountryText>{country}</CountryText></CountryElement>)}
                </CountriesList>
            </CountryListContainer>
        </TouchableWithoutFeedback>
    )
}

export default CountryList;