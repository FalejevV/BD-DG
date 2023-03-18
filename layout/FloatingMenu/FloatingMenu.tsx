import ImageButton from "../../components/ImageButton/ImageButton";
import { FMWrap, FloatingBackgroundFrame, FloatingMenuContainer } from "./FloatingMenu.styled";


function FloatingMenu(props:{
    setWindowToggle:Function
}){
    return(
        <FMWrap>
            <FloatingBackgroundFrame></FloatingBackgroundFrame>
            <FloatingMenuContainer>
                <ImageButton padding="5px" onPress={() => props.setWindowToggle("settings")} imageName={("settings")}/>
                <ImageButton padding="5px" onPress={() => props.setWindowToggle("new route country")} imageName={("plus")}/>
            </FloatingMenuContainer>
        </FMWrap>
    )
}

export default FloatingMenu;