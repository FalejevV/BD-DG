import ImageButton from "../../components/ImageButton/ImageButton";
import { IBImage } from "../../components/ImageButton/ImageButton.styled";
import { FloatingMenuContainer } from "./FloatingMenu.styled";


function FloatingMenu(){
    return(
        <FloatingMenuContainer>
            <ImageButton onPress={() => {}} image={<IBImage source={require("../../assets/plus.png")}/>} />
        </FloatingMenuContainer>
    )
}

export default FloatingMenu;