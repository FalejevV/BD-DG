import { ThemeProvider } from 'styled-components/native';
import SearchBar from './components/SearchBar/SearchBar';
import { MainView } from './styles/Styled.styled';
import * as ScreenOrientation from 'expo-screen-orientation'
import Header from './layout/Header';
import { useState } from 'react';
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
  const [search,setSearch] = useState("");

  return (
    <ThemeProvider theme={lightTheme}>
      <MainView>
        <Header search={search} setSearch={setSearch}  country={country} setCountry={setCountry}/>
      </MainView>
    </ThemeProvider>
  );
}
