import { TouchableOpacity } from "react-native";
import { IBImage, ImageButtonContainer } from "./ImageButton.styled";
import images from "../../images";



function ImageButton(props:{
    onPress:Function,
    imageName:keyof typeof images,
    size?:string,
    padding?:string,
}){

    return(
        <TouchableOpacity onPress={() => props.onPress()}>
            <ImageButtonContainer cPadding={props.padding || "10px"}>
                <IBImage size={props.size || "35px"} source={images[props.imageName]} />
            </ImageButtonContainer>
        </TouchableOpacity>
    )
}


export default ImageButton;