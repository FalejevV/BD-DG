import { ThemeProvider } from 'styled-components/native';
import { MainView } from './styles/Styled.styled';
import { useEffect, useState, version } from 'react';
import CountrySelectWindow from './layout/CountrySelectWindow/CountrySelectWindow';
import HomePage from './layout/HomePage/HomePage';
import randomData from './randomData';
import * as SQLite from 'expo-sqlite';

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
  const [data, setData] = useState(randomData);
  const [usedCountries, setUsedCountries] = useState<string[]>([]);

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
    const db = SQLite.openDatabase("DG.db");
    db.transaction(tx => {
      tx.executeSql(`CREATE TABLE routes (
        contact_id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL UNIQUE
      );`,[],
      (tx, response) => {
        console.log(response);
      },);
    });

    db.transaction(tx => {
      tx.executeSql(`select * from routes`,[],
      (tx, response) => {
        console.log(response);
      },);
    });
  },[]);  
  return (
    <ThemeProvider theme={lightTheme}>
      <MainView>
        {!countryToggleWindow && <HomePage data={data} search={search} setSearch={setSearch}  country={country} setToggleCountryWindow={setToggleCountryWindow}/>}
        {countryToggleWindow && <CountrySelectWindow usedCountries={usedCountries} setCountry={setCountry} setToggleCountryWindow={setToggleCountryWindow} />}
      </MainView>
    </ThemeProvider>
  );
}
