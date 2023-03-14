import { TouchableOpacity } from "react-native";
import { IBImage, ImageButtonContainer } from "./ImageButton.styled";
import images from "../../images";



function ImageButton(props:{
    onPress:Function,
    imageName:keyof typeof images
}){

    return(
        <TouchableOpacity onPress={() => props.onPress()}>
            <ImageButtonContainer>
                <IBImage source={images[props.imageName]} />
            </ImageButtonContainer>
        </TouchableOpacity>
    )
}


export default ImageButton;