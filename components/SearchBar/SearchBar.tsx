import { useState } from "react";
import { SearchBarClearIcon, SearchBarContainer, SearchBarInput } from "./SearchBar.styled";
import { NativeSyntheticEvent, Text, TextInputChangeEventData } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

function SearchBar(props:{
    search:string,
    setSearch:Function
}){
    return(
        <SearchBarContainer>
            <SearchBarInput value={props.search} onChangeText={(text) => props.setSearch(text)} placeholder="Поиск"></SearchBarInput>
            {props.search.trim() !== "" &&
                <TouchableWithoutFeedback onPress={() => props.setSearch('')}>
                    <SearchBarClearIcon source={require("../../assets/close.png")} />
                </TouchableWithoutFeedback>
            }  
        </SearchBarContainer>
    )
}

export default SearchBar;