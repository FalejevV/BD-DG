import ImageButton from "../../components/ImageButton/ImageButton";
import { FloatingMenuContainer } from "./FloatingMenu.styled";


function FloatingMenu(props:{
    setWindowToggle:Function
}){
    return(
        <FloatingMenuContainer>
            <ImageButton padding="5px" onPress={() => props.setWindowToggle("new route country")} imageName={("plus")}/>
        </FloatingMenuContainer>
    )
}

export default FloatingMenu;