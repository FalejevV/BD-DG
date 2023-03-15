import { CSWHeaderContainer, CSWScrollView, CloseIconContainer, CountryButtonWrapper, CountrySelectWindowContainer } from "./CountrySelectWindow.styled";
import CButton from "../../components/CButton/CButton";
import {TouchableWithoutFeedback } from "react-native";
import uuid from 'react-native-uuid';
import ImageButton from "../../components/ImageButton/ImageButton";
import React from "react";
import { Title } from "../../styles/Styled.styled";

function CountrySelectWindow(props:{
    setCountry:Function,
    setWindowToggle:Function,
    usedCountries:string[],
    setWindowToggleCustom:Function,
}){
      
    return(
        <CountrySelectWindowContainer>
            <CSWHeaderContainer>
                <Title>Выбор страны</Title>
                <TouchableWithoutFeedback onPress={() => props.setWindowToggle()}>
                    <CloseIconContainer>
                        <ImageButton onPress={() => props.setWindowToggleCustom("")} imageName={"close"}  />
                    </CloseIconContainer>
                </TouchableWithoutFeedback>
            </CSWHeaderContainer>
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
