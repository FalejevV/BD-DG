import { TouchableOpacity } from "react-native";
import { IBImage, ImageButtonContainer } from "./ImageButton.styled";

function ImageButton(props:{
    onPress:Function,
    image:JSX.Element,
}){
    return(
        <TouchableOpacity onPress={() => props.onPress()}>
            <ImageButtonContainer>
                {props.image}
            </ImageButtonContainer>
        </TouchableOpacity>
    )
}


export default ImageButton;