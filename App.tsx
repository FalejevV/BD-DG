import { ThemeProvider } from 'styled-components/native';
import { MainView } from './styles/Styled.styled';
import { useEffect, useState } from 'react';
import CountrySelectWindow from './layout/CountrySelectWindow/CountrySelectWindow';
import HomePage from './layout/HomePage/HomePage';
import { exportDatabase, importDatabase, readFile, readSettingsFile, saveFile, saveSettingsFile } from './database';
import { IRoute, ISettings } from './interface';
import NewRoutePage from './layout/NewRoutePage/NewRoutePage';
import { BackHandler } from 'react-native';
import countries from './countries';
import RoutePage from './layout/RoutePage/RoutePage';
import RouteEditPage from './layout/RouteEditPage/RouteEditPage';
import SettingsPage from './layout/SettingsPage/SettingsPage';

const lightTheme = {
  bgColor:"#E1D5C9",
  frameColor:"#F8F8F8",
  accentColor:"#32271C",
}
const darkTheme = {
  bgColor:"#19140e",
  frameColor:"#6c4c2c",
  accentColor:"#E1D5C9",
}


export default function App() {
  const [country,setCountry] = useState("Все");
  const [windowToggle, setWindowToggle] = useState("");
  const [search,setSearch] = useState("");
  const [data, setData] = useState<IRoute[]>([]);
  const [usedCountries, setUsedCountries] = useState<string[]>([]);
  const [settings, setSettings] = useState<ISettings>({theme:0, floatingMenuPosition:0});
  const [newCountrySelect, setNewCountrySelect] = useState("Страна");
  const [editCountrySelect, setEditCountrySelect] = useState("");
  const [routePreview, setRoutePreview] = useState<null | IRoute>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
    if(isLoaded){
      saveSettingsFile(settings);
    }
  },[settings]);

  useEffect(() => {
    if(data.length > 0 && isLoaded){
      saveFile({
        routes: data
      });
      console.log("saved")
    }else{
      if(!isLoaded){
        setTimeout(() => {
          setIsLoaded(true);
        }, 1500);
      }
    }
  }, [data]);

  function appendData(newRoute:IRoute){
    setData(prev => {
      let prevData = [...prev];
      prevData.unshift(newRoute);
      return prevData;
    })
  }

  function editRoute(editRoute:IRoute){
    setData(routes => routes.map((route:IRoute) => {
      if(route.id === editRoute.id){
        return editRoute;
      }else{
        return route;
      }
    }));
    setRoutePreview(editRoute);
  }

  function removeRoute(removeRoute:IRoute){
    let routes:IRoute[] = [];

    data.forEach((route:IRoute) =>{
      if(route.id !== removeRoute.id){
        routes.push(route);
      }
    });

    setData(routes);
    setWindowToggle("");
    setRoutePreview(null);
  }

  function exportDB(){
    exportDatabase({
      routes: data
    });
    setWindowToggle('');
  }

  function importDB(uri:string,){
    importDatabase(uri).then((res) => {
      if (res?.routes){
        setData(res.routes);
        alert("Загружаю базу данных");
      }
    });
  }

  function clearDatabase(){
    setData([]);
    alert("База данных удалена");
  }

  function testDatabaseImport(database:IRoute[]){
    setData(database);
    alert("Загружена тестовая база нанных на 1000 записей");
  }

  useEffect(() => {
    readFile().then(res => {
      setData(res.routes)
    });
    readSettingsFile().then((res:ISettings) => {
      setSettings(res);
    });
  },[]);

  return (
    <ThemeProvider theme={settings.theme === 0 ? lightTheme : darkTheme}>
      <MainView>
          {routePreview === null && <>
            {windowToggle.trim() === "" && <HomePage menuPosition={settings.floatingMenuPosition} setRoutePreview={setRoutePreview} data={data} search={search} setSearch={setSearch}  country={country} setWindowToggle={setWindowToggle} theme={settings.theme === 0 ? lightTheme : darkTheme}/> }
            {windowToggle === "country" && <CountrySelectWindow setWindowToggleCustom={setWindowToggle} usedCountries={usedCountries} setCountry={setCountry} setWindowToggle={() => setWindowToggle("")} />}
            {windowToggle === "new route country" && <CountrySelectWindow setWindowToggleCustom={setWindowToggle} usedCountries={countries.slice(1,countries.length)} setCountry={setNewCountrySelect} setWindowToggle={() => setWindowToggle("new route")} />}
            {windowToggle === "new route" && <NewRoutePage addNewRoute={appendData} countrySelected={newCountrySelect} setWindowToggle={setWindowToggle} windowToggle={windowToggle}/> }
            {windowToggle === "settings" && <SettingsPage testDatabaseImport={testDatabaseImport} clearDB={clearDatabase} importDB={importDB} exportDB={exportDB} settings={settings} setSettings={setSettings} setWindowToggle={setWindowToggle} />}
          </>}

          {routePreview && windowToggle.trim() === "" && <RoutePage removeRoute={removeRoute} route={routePreview} setRoutePreview={setRoutePreview} setWindowToggle={setWindowToggle} />}
          {routePreview && windowToggle.trim() === "edit" && <RouteEditPage data={routePreview} editNewRoute={editRoute} countrySelected={editCountrySelect} setWindowToggle={setWindowToggle} windowToggle={windowToggle}/>}  
          {routePreview && windowToggle === "edit country" && <CountrySelectWindow setWindowToggleCustom={setWindowToggle} usedCountries={countries.slice(1,countries.length)} setCountry={setEditCountrySelect} setWindowToggle={() => setWindowToggle("edit")} />}
      </MainView>
    </ThemeProvider>
  );
}
