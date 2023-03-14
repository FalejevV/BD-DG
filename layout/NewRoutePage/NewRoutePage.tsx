import React from "react-native";
import ImageButton from "../../components/ImageButton/ImageButton";
import { Title } from "../../styles/Styled.styled";
import { CloseContainer, NewRoutePageContainer, NewRoutePageHeader } from "./NewRoutePage.styled";

function NewRoutePage(props:{
    setWindowToggle:Function,
    windowToggle:string,
}){

    return(
        <NewRoutePageContainer>
            <NewRoutePageHeader>
                <Title>Новая запись</Title>
                <CloseContainer>
                    <ImageButton onPress={() => props.setWindowToggle("")} imageName={"close"} />
                </CloseContainer>
            </NewRoutePageHeader>
        </NewRoutePageContainer>
    )
}

export default NewRoutePage;

function useFocusEffect(arg0: () => () => any) {
    throw new Error("Function not implemented.");
}
