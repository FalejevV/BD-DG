import React from "react-native";
import ImageButton from "../../components/ImageButton/ImageButton";
import { Title } from "../../styles/Styled.styled";
import { CloseContainer, FormContainer, FormScroll, LineFlexContainer, NewRoutePageContainer, NewRoutePageHeader } from "./NewRoutePage.styled";
import InputField from "../../components/InputField/InputField";
import { useRef } from "react";
import {Text} from "react-native";

function NewRoutePage(props:{
    setWindowToggle:Function,
    windowToggle:string,
    countrySelected:string,
}){

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
                <FormContainer>
                    <Title>Страна --- {props.countrySelected}</Title>
                    <InputField title={"Название фирмы"} name={"countryName"} inputRef={nameRef} />

                    <LineFlexContainer>
                        <InputField title={"Адрес"} name={"address"} inputRef={addressRef} />
                        <InputField title={"Индекс"} name={"index"} inputRef={indexRef} />
                    </LineFlexContainer>

                    <LineFlexContainer>
                        <InputField title={"Широта"} name={"lat"} inputRef={latRef} maxWidth="100px"/>
                        <InputField title={"Долгота"} name={"long"} inputRef={longRef} maxWidth="100px"/>
                    </LineFlexContainer>

                    <InputField multiLine={true} title={"Дополнительная информация"} name={"addInfo"} inputRef={addInfo}/>
                </FormContainer>
            </FormScroll>
        </NewRoutePageContainer>
    )
}

export default NewRoutePage;