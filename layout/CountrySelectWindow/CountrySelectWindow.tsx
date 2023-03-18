import { CSWScrollView, CountryButtonWrapper, CountrySelectWindowContainer } from "./CountrySelectWindow.styled";
import CButton from "../../components/CButton/CButton";
import uuid from 'react-native-uuid';
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

function CountrySelectWindow(props:{
    setCountry:Function,
    setWindowToggle:Function,
    usedCountries:string[],
    setWindowToggleCustom:Function,
}){
      
    return(
        <CountrySelectWindowContainer>
           <PageHeader setWindowToggle={() => props.setWindowToggle("")} title={"Выбор страны"} />
            <CSWScrollView >
                {props.usedCountries.map((country:string, index:number) => <CountryButtonWrapper key={uuid.v4().toString()}><CButton text={country} onPress={() => {props.setCountry(country); props.setWindowToggle("")}} /></CountryButtonWrapper>)}
            </CSWScrollView>
        </CountrySelectWindowContainer>
    )
}

export default CountrySelectWindow;

function useFocusEffect(arg0: () => () => any) {
    throw new Error("Function not implemented.");
}
