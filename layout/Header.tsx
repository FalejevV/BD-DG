import styled from "styled-components/native";
import SearchBar from "../components/SearchBar/SearchBar";
import CountryList from "../components/CountryList/CountryList";

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
    setCountry:Function,
    search:string,
    setSearch:Function
}){
    return(
        <HeaderContainer>
            <SearchBar search={props.search} setSearch={props.setSearch} />
            <CountryList country={props.country} setCountry={props.setCountry} />
        </HeaderContainer>
    )
}


export default Header;