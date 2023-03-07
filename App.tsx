import { ThemeProvider } from 'styled-components/native';
import SearchBar from './components/SearchBar/SearchBar';
import { MainView } from './styles/Styled.styled';
import * as ScreenOrientation from 'expo-screen-orientation'
import Header from './layout/Header';
import { useState } from 'react';
import CountrySelectWindow from './layout/CountrySelectWindow/CountrySelectWindow';
ScreenOrientation.unlockAsync();

const lightTheme = {
  bgColor:"#E1D5C9",
  frameColor:"#F8F8F8",
  accentColor:"#32271C",
}
const darkTheme = {
  bgColor:"#E1D5C9",
  frameColor:"#F8F8F8",
  accentColor:"#32271C",
}

export default function App() {

  const [country,setCountry] = useState("Все");
  const [countryToggleWindow,setToggleCountryWindow] = useState(false);
  const [search,setSearch] = useState("");

  return (
    <ThemeProvider theme={lightTheme}>
      <MainView>
        {!countryToggleWindow && <Header search={search} setSearch={setSearch}  country={country} setToggleCountryWindow={setToggleCountryWindow}/>}
        {countryToggleWindow && <CountrySelectWindow setCountry={setCountry} setToggleCountryWindow={setToggleCountryWindow} />}
      </MainView>
    </ThemeProvider>
  );
}
