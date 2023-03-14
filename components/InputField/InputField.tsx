import { ChangeEvent, useState } from "react";
import { InputFieldContainer, InputTitle, TextInputField } from "./InputField.styled";
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from "react-native";

function InputField(props:{
    title:string,
    name:string,
    inputRef:any,
    maxWidth?:string,
    multiLine?:boolean
}){

    const[value,setValue] = useState("");

    return(
        <InputFieldContainer maxWidth={props.maxWidth || "300px"}>
            <InputTitle>{props.title}</InputTitle>
            <TextInputField multiline={props.multiLine} multiLine={props.multiLine} numberOfLines={4} maxLength={400} value={value} onChangeText={(text) => setValue(text)} ref={props.inputRef}/>
        </InputFieldContainer>
    )
}

export default InputField;