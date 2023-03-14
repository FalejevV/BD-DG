import styled from "styled-components/native";
import SearchBar from "../components/SearchBar/SearchBar";
import CountryListButton from "../components/CountryList/CountryListButton";

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
    setWindowToggle:Function,
    search:string,
    setSearch:Function,
}){
    return(
        <HeaderContainer>
            <SearchBar search={props.search} setSearch={props.setSearch} />
            <CountryListButton country={props.country} setWindowToggle={() => props.setWindowToggle()} />
        </HeaderContainer>
    )
}


export default Header;