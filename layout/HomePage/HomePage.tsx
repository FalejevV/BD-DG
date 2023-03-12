import { useEffect, useState } from "react";
import RouteCard from "../../components/RouteCard/RouteCard";
import Header from "../Header";
import { CardGridScroll, CardGridWrap, EmptyItem, LoadMoreContainer, LoadMoreText } from "./HomePage.styled";
import uuid from 'react-native-uuid';
import { TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native";
import { getData } from "../../database";


function HomePage(props:{
    country:string,
    setToggleCountryWindow:Function,
    search:string,
    setSearch:Function,
    data: { companyName: string; country: string; address: string; cIndex: number; }[],
}){

    const [viewCount, setViewCount] = useState(6);
    const [tempData, setTempData] = useState("");
    useEffect(() => {
        getData().then(res => setTempData(res));
    },[]);

    function increaseViewCount(){
        if(viewCount + 6 > props.data.length){
            setViewCount(props.data.length);
        }else{
            setViewCount(viewCount + 6);
        }
    }

    function filterRoutes(){
        let resultArray: { companyName: string; country: string; address: string; cIndex: number; }[] = [];
        props.data.forEach((route) => {
            if(props.country === "Все"){
                if(route.companyName.toLowerCase().includes(props.search.toLowerCase())){
                    resultArray.push(route);
                }
            }else{
                if(route.country.toLowerCase() === props.country.toLowerCase()){
                    if(route.companyName.toLowerCase().includes(props.search.toLowerCase())){
                        resultArray.push(route);
                    }
                }
            }
        })
        return resultArray;
    }

    function getRoutes(){
        let resultArray: { companyName: string; country: string; address: string; cIndex: number; }[] = [];
        filterRoutes().forEach((route) => {
            if(resultArray.length < viewCount){
                resultArray.push(route);
            }
        });

        return resultArray;
    }
    return(
        <>
            <Header search={props.search} setSearch={props.setSearch}  country={props.country} setToggleCountryWindow={props.setToggleCountryWindow}/>
                <Text>{tempData}</Text>
                <CardGridScroll>
                    <CardGridWrap>
                        {getRoutes().map(route => <RouteCard key={uuid.v4().toString()} companyName={route.companyName} country={route.country} address={route.address} cIndex={route.cIndex.toString()} />)}
                        {viewCount >= filterRoutes().length && <EmptyItem />}
                        {viewCount < filterRoutes().length && 
                            <LoadMoreContainer>
                                <TouchableWithoutFeedback onPress={increaseViewCount}>
                                    <LoadMoreText>Загрузить еще</LoadMoreText>
                                </TouchableWithoutFeedback>
                            </LoadMoreContainer>
                        }
                        
                    </CardGridWrap>
                </CardGridScroll>
            
        </>
    )
}

export default HomePage;