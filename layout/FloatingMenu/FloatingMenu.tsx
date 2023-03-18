import ImageButton from "../../components/ImageButton/ImageButton";
import { FMWrap, FloatingBackgroundFrame, FloatingMenuContainer } from "./FloatingMenu.styled";


function FloatingMenu(props:{
    setWindowToggle:Function,
    positionSide:0 | 1,
}){
    return(
        <FMWrap positionSide={props.positionSide || 0}>
            <FloatingBackgroundFrame></FloatingBackgroundFrame>
            <FloatingMenuContainer>
                <ImageButton padding="5px" onPress={() => props.setWindowToggle("settings")} imageName={("settings")}/>
                <ImageButton padding="5px" onPress={() => props.setWindowToggle("new route country")} imageName={("plus")}/>
            </FloatingMenuContainer>
        </FMWrap>
    )
}

export default FloatingMenu;