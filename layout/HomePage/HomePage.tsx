import { useEffect, useState } from "react";
import RouteCard from "../../components/RouteCard/RouteCard";
import Header from "../Header";
import { CardGridScroll, CardGridWrap, EmptyItem, LoadMoreContainer, LoadMoreText, TotalConterContainer, TotalCounterText } from "./HomePage.styled";
import uuid from 'react-native-uuid';
import { TouchableWithoutFeedback } from "react-native";
import { IRoute } from "../../interface";
import FloatingMenu from "../FloatingMenu/FloatingMenu";


function HomePage(props:{
    country:string,
    setWindowToggle:Function,
    search:string,
    setSearch:Function,
    data: IRoute[],
}){

    const [viewCount, setViewCount] = useState(6);
    const [filteredRoutes,setFilteredRoutes] = useState<IRoute[]>([]);

    function increaseViewCount(){
        if(viewCount + 6 > props.data.length){
            setViewCount(props.data.length);
        }else{
            setViewCount(viewCount + 6);
        }
    }

    function filterRoutes(){
        let resultArray: IRoute[] = [];
        props.data.forEach((route) => {
            if(props.country === "Все"){
                if(route.company.toLowerCase().includes(props.search.toLowerCase())){
                    resultArray.push(route);
                }
            }else{
                if(route.country.toLowerCase() === props.country.toLowerCase()){
                    if(route.company.toLowerCase().includes(props.search.toLowerCase())){
                        resultArray.push(route);
                    }
                }
            }
        })
        setFilteredRoutes(resultArray);
    }

    function getRoutes(){
        let resultArray: IRoute[] = [];
        filteredRoutes.forEach((route) => {
            if(resultArray.length < viewCount){
                resultArray.push(route);
            }
        });

        return resultArray;
    }

    useEffect(() => {
        filterRoutes();
    }, [props.search, props.data]);

    return(
        <>
            <Header search={props.search} setSearch={props.setSearch}  country={props.country} setWindowToggle={() => props.setWindowToggle("country")}/>
            <TotalConterContainer>
                <TotalCounterText>Найдено записей: {filteredRoutes.length} </TotalCounterText>
            </TotalConterContainer>
            <CardGridScroll>
                <CardGridWrap>
                    {getRoutes().map(route => <RouteCard key={uuid.v4().toString()} companyName={route.company} country={route.country} address={route.address} cIndex={route.index.toString()} />)}
                    {viewCount >= filteredRoutes.length && <EmptyItem />}
                    {viewCount < filteredRoutes.length && 
                        <LoadMoreContainer>
                            <TouchableWithoutFeedback onPress={increaseViewCount}>
                                <LoadMoreText>Загрузить еще</LoadMoreText>
                            </TouchableWithoutFeedback>
                        </LoadMoreContainer>
                    }
                        
                </CardGridWrap>
            </CardGridScroll>
            <FloatingMenu setWindowToggle={props.setWindowToggle} />
        </>
    )
}

export default HomePage;