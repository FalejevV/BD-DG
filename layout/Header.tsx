import styled from "styled-components/native";
import SearchBar from "../components/SearchBar/SearchBar";
import CountryListButton from "../components/CountryList/CountryListButton";
import CButton from "../components/CButton/CButton";
import { insertTable } from "../database";
const HeaderContainer = styled.View`
    width:100%;
    padding-right: 160px;
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:10px;
`


function Header(props:{
    country:string,
    setToggleCountryWindow:Function,
    search:string,
    setSearch:Function,
}){
    return(
        <HeaderContainer>
            <SearchBar search={props.search} setSearch={props.setSearch} />
            <CountryListButton country={props.country} setToggleCountryWindow={props.setToggleCountryWindow} />
            <CButton onPress={() => insertTable()} text={"ADD"} />
        </HeaderContainer>
    )
}


export default Header;