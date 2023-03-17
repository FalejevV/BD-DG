import { checkboxImages } from "../CCheckBox/CCheckBox";
import { CheckBoxInfoContainer, CheckBoxInfoIcon, CheckBoxInfoTitle } from "./CheckBoxInfo.styled";



function CheckBoxInfo(props:{
    title:string,
    value:number,
}){
    return(
        <CheckBoxInfoContainer>
            <CheckBoxInfoTitle>{props.title}</CheckBoxInfoTitle>
            <CheckBoxInfoIcon source={checkboxImages[props.value || 0]} />
        </CheckBoxInfoContainer>
    )
}

export default CheckBoxInfo;