import React, { Dimensions } from "react-native";
import ImageButton from "../../components/ImageButton/ImageButton";
import { Title, VerticalDivider } from "../../styles/Styled.styled";
import { CheckBoxesContainer, CloseContainer, FormContainer, FormScroll, InputsContainer, LineFlexContainer, NewRoutePageContainer, NewRoutePageHeader } from "./NewRoutePage.styled";
import InputField from "../../components/InputField/InputField";
import { useEffect, useRef, useState } from "react";
import CCheckBox from "../../components/CCheckBox/CCheckBox";
import '@expo/match-media';
import * as ScreenOrientation from 'expo-screen-orientation';


function NewRoutePage(props:{
    setWindowToggle:Function,
    windowToggle:string,
    countrySelected:string,
}){

    const [isSmallScreenMedia, setIsSmallScreenMedia] = useState(false);

    useEffect(() => {

        if(Dimensions.get('window').width < 860){
            setIsSmallScreenMedia(true);
          }else{
            setIsSmallScreenMedia(false);
        }

        const subscription = ScreenOrientation.addOrientationChangeListener(() => {
          if(Dimensions.get('window').width < 860){
            setIsSmallScreenMedia(true);
          }else{
            setIsSmallScreenMedia(false);
          }
        });
        return () => {
          ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, []);
      
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const indexRef = useRef(null);

    const latRef = useRef(null);
    const longRef = useRef(null);

    const addInfo = useRef(null);
    

    return(
        <NewRoutePageContainer>
            <NewRoutePageHeader>
                <Title>Новая запись</Title>
                <CloseContainer>
                    <ImageButton onPress={() => props.setWindowToggle("")} imageName={"close"} />
                </CloseContainer>
            </NewRoutePageHeader>

            <FormScroll>
                <FormContainer isSmall={isSmallScreenMedia}>
                    <InputsContainer isSmall={isSmallScreenMedia}>
                        <Title>Страна --- {props.countrySelected}</Title>
                        <InputField title={"Название фирмы"} name={"countryName"} inputRef={nameRef} />

                        <LineFlexContainer>
                            <InputField title={"Адрес"} name={"address"} inputRef={addressRef} />
                            <InputField title={"Индекс"} name={"index"} inputRef={indexRef} maxWidth="175px" />
                        </LineFlexContainer>

                        <LineFlexContainer>
                            <InputField title={"Широта"} name={"lat"} inputRef={latRef} maxWidth="100px"/>
                            <InputField title={"Долгота"} name={"long"} inputRef={longRef} maxWidth="100px"/>
                        </LineFlexContainer>

                        <InputField multiLine={true} title={"Дополнительная информация"} name={"addInfo"} inputRef={addInfo}/>
                    </InputsContainer>

                    <VerticalDivider isSmall={isSmallScreenMedia} ></VerticalDivider>

                    <CheckBoxesContainer>
                        <CCheckBox />
                    </CheckBoxesContainer>

                </FormContainer>
            </FormScroll>
        </NewRoutePageContainer>
    )
}

export default NewRoutePage;