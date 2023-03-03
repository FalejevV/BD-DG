import { useState } from "react";
import { SearchBarClearIcon, SearchBarContainer, SearchBarInput } from "./SearchBar.styled";
import { NativeSyntheticEvent, Text, TextInputChangeEventData } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

function SearchBar(){

    const [value, setValue] = useState("");

    return(
        <SearchBarContainer>
            <SearchBarInput value={value} onChangeText={(text) => setValue(text)} placeholder="Поиск"></SearchBarInput>
            {value.trim() !== "" &&
                <TouchableWithoutFeedback onPress={() => setValue('')}>
                    <SearchBarClearIcon source={require("../../assets/close.svg")} />
                </TouchableWithoutFeedback>
            }  
        </SearchBarContainer>
    )
}

export default SearchBar;