import { ChangeEvent, useState } from "react";
import { InputFieldContainer, InputTitle, TextInputField } from "./InputField.styled";
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from "react-native";

function InputField(props:{
    title:string,
    name:string,
    maxWidth?:string,
    multiLine?:boolean,
    value:string,
    setValue:Function,
}){

    return(
        <InputFieldContainer multiline={props.multiLine} maxWidth={props.maxWidth || "300px"}>
            <InputTitle>{props.title}</InputTitle>
            <TextInputField multiline={props.multiLine} multiLine={props.multiLine} numberOfLines={4} maxLength={400} value={props.value} onChangeText={(text) => props.setValue(text)}/>
        </InputFieldContainer>
    )
}

export default InputField;