import { Divider } from "../../styles/Styled.styled";
import { AboutSVG, AboutText, AboutTextContainer, AboutTextTitle, RouteCardContainer, RouteCardTitle } from "./RouteCard.styled";


function RouteCard(props:{
    companyName:string,
    country:string,
    address:string,
    cIndex:string,
}){
    return(
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
            
            <AboutSVG xml='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>' />
        </RouteCardContainer>
    )
}

export default RouteCard;