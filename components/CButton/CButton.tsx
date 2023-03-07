import { TouchableOpacity } from "react-native";
import { CButtonContainer, CButtonText } from "./CButton.styled";


function CButton(props:{
    onPress:Function,
    text:string,
}){
    return(
        <TouchableOpacity onPress={() => props.onPress()}>
            <CButtonContainer>
                <CButtonText>{props.text}</CButtonText>
            </CButtonContainer>
        </TouchableOpacity>
    )
}

export default CButton;