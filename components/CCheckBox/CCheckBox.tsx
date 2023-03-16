import { useState } from "react";
import { CheckBoxContainer, CheckBoxIcon, CheckBoxIconWrap, CheckBoxTitle } from "./CCheckBox.styled";
import { TouchableWithoutFeedback } from "react-native";

const checkboxImages = [
    require("../../assets/question.png"),
    require("../../assets/check.png"),
    require("../../assets/close.png")
]

function CCheckBox(props:{
    value:number,
    setValue:Function,
    title:string,
}){

    function switchCheckBox(){
        if(props.value + 1 >= checkboxImages.length){
            props.setValue(0);
        }else{
            props.setValue((prev:number) => prev +1);
        }
    }

    return(
        <TouchableWithoutFeedback onPress={switchCheckBox}>
            <CheckBoxContainer>
                <CheckBoxIconWrap>
                    <CheckBoxIcon source={checkboxImages[props.value] || checkboxImages[0]}/>
                </CheckBoxIconWrap>
                <CheckBoxTitle>{props.title}</CheckBoxTitle>
            </CheckBoxContainer>
        </TouchableWithoutFeedback>
    )
}

export default CCheckBox;