import { Title } from "../../styles/Styled.styled";
import ImageButton from "../ImageButton/ImageButton";
import { CloseContainer, PageHeaderContainer } from "./PageHeader.styled";



function PageHeader(props:{
    setWindowToggle:Function,
    title:string,
}){
    return(
        <PageHeaderContainer>
            <Title>{props.title}</Title>
            <CloseContainer>
                <ImageButton onPress={() => props.setWindowToggle()} imageName={"close"} />
            </CloseContainer>
        </PageHeaderContainer>
    )
}

export default PageHeader;