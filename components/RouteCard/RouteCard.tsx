import { TouchableWithoutFeedback } from "react-native";
import { Divider } from "../../styles/Styled.styled";
import { AboutSVG, AboutText, AboutTextContainer, AboutTextTitle, RouteCardContainer, RouteCardTitle } from "./RouteCard.styled";


function RouteCard(props:{
    companyName:string,
    country:string,
    address:string,
    cIndex:string,
    id:string,
    setRoutePreview:Function,
}){
    return(
        <TouchableWithoutFeedback onPress={() => props.setRoutePreview()}>
            <RouteCardContainer>
                <RouteCardTitle>{props.companyName}</RouteCardTitle>
                <Divider></Divider>
                <AboutTextContainer>
                    <AboutTextTitle>Страна:</AboutTextTitle>
                    <AboutText>{props.country}</AboutText>
                </AboutTextContainer>
                
                <AboutTextContainer>
                    <AboutTextTitle>Адрес:</AboutTextTitle>
                    <AboutText>{props.address}</AboutText>
                </AboutTextContainer>

                <AboutTextContainer>
                    <AboutTextTitle>Индекс:</AboutTextTitle>
                    <AboutText>{props.cIndex}</AboutText>
                </AboutTextContainer>
                
                <AboutSVG source={require("../../assets/more.png")}/>
            </RouteCardContainer>
        </TouchableWithoutFeedback>
    )
}

export default RouteCard;