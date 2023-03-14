import { ThemeProvider } from 'styled-components/native';
import { MainView } from './styles/Styled.styled';
import { useEffect, useState } from 'react';
import CountrySelectWindow from './layout/CountrySelectWindow/CountrySelectWindow';
import HomePage from './layout/HomePage/HomePage';
import { readFile } from './database';
import { IRoute } from './interface';
import NewRoutePage from './layout/NewRoutePage/NewRoutePage';
import { BackHandler } from 'react-native';
import countries from './countries';

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
  const [windowToggle, setWindowToggle] = useState("");
  const [search,setSearch] = useState("");
  const [data, setData] = useState<IRoute[]>([]);
  const [usedCountries, setUsedCountries] = useState<string[]>([]);

  const [newCountrySelect, setNewCountrySelect] = useState("Страна");
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (windowToggle.trim() !== "") {
        setWindowToggle("");
        return true;
      }else{
        return false;
      }
    });
    
    return () => subscription.remove();
  },[windowToggle]);

  useEffect(() => {
      let usedCountriesArray:string[] = [];

      data.forEach(route => {
          if(!usedCountriesArray.includes(route.country)){
              usedCountriesArray.push(route.country);
          }
      });
      
      usedCountriesArray.unshift("Все");
      setUsedCountries(usedCountriesArray);
  }, [data]);

  
  useEffect(() => {
    readFile().then(res => setData(res.routes));
  },[]);
  return (
    <ThemeProvider theme={lightTheme}>
      <MainView>
        {windowToggle.trim() === "" && <HomePage data={data} search={search} setSearch={setSearch}  country={country} setWindowToggle={setWindowToggle}/>}
        {windowToggle === "country" && <CountrySelectWindow usedCountries={usedCountries} setCountry={setCountry} setWindowToggle={() => setWindowToggle("")} />}
        {windowToggle === "new route country" && <CountrySelectWindow usedCountries={countries.slice(1,countries.length)} setCountry={setNewCountrySelect} setWindowToggle={() => setWindowToggle("new route")} />}
        {windowToggle === "new route" && <NewRoutePage countrySelected={newCountrySelect} setWindowToggle={setWindowToggle} windowToggle={windowToggle}/> }
      </MainView>
    </ThemeProvider>
  );
}
