import { ThemeProvider } from 'styled-components/native';
import { MainView } from './styles/Styled.styled';
import { useEffect, useState } from 'react';
import CountrySelectWindow from './layout/CountrySelectWindow/CountrySelectWindow';
import HomePage from './layout/HomePage/HomePage';
import { readFile, saveFile } from './database';
import { IRoute } from './interface';
import NewRoutePage from './layout/NewRoutePage/NewRoutePage';
import { BackHandler } from 'react-native';
import countries from './countries';
import RoutePage from './layout/RoutePage/RoutePage';

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

  const [routePreview, setRoutePreview] = useState<null | IRoute>(null);

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (windowToggle.trim() !== "" || routePreview !== null) {
        setWindowToggle("");
        setRoutePreview(null);
        return true;
      }else{
        return false;
      }
    });
    
    return () => subscription.remove();
  },[windowToggle,routePreview]);
  

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
    if(data.length > 0){
      saveFile({
        routes:data
      });
    }
  }, [data]);

  function appendData(newRoute:IRoute){
    setData(prev => {
      let prevData = [...prev];
      prevData.unshift(newRoute);
      return prevData;
    })
  }

  useEffect(() => {
    readFile().then(res => setData(res.routes));
  },[]);

  return (
    <ThemeProvider theme={lightTheme}>
      <MainView>
          {routePreview === null && <>
            {windowToggle.trim() === "" && <HomePage setRoutePreview={setRoutePreview} data={data} search={search} setSearch={setSearch}  country={country} setWindowToggle={setWindowToggle}/>}
            {windowToggle === "country" && <CountrySelectWindow setWindowToggleCustom={setWindowToggle} usedCountries={usedCountries} setCountry={setCountry} setWindowToggle={() => setWindowToggle("")} />}
            {windowToggle === "new route country" && <CountrySelectWindow setWindowToggleCustom={setWindowToggle} usedCountries={countries.slice(1,countries.length)} setCountry={setNewCountrySelect} setWindowToggle={() => setWindowToggle("new route")} />}
            {windowToggle === "new route" && <NewRoutePage addNewRoute={appendData} countrySelected={newCountrySelect} setWindowToggle={setWindowToggle} windowToggle={windowToggle}/> }
          </>}

          {routePreview && <RoutePage route={routePreview} setRoutePreview={setRoutePreview} />}          
      </MainView>
    </ThemeProvider>
  );
}
