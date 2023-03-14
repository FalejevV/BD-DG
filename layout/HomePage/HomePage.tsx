import { useState } from "react";
import RouteCard from "../../components/RouteCard/RouteCard";
import Header from "../Header";
import { CardGridScroll, CardGridWrap, EmptyItem, LoadMoreContainer, LoadMoreText } from "./HomePage.styled";
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
        return resultArray;
    }

    function getRoutes(){
        let resultArray: IRoute[] = [];
        filterRoutes().forEach((route) => {
            if(resultArray.length < viewCount){
                resultArray.push(route);
            }
        });

        return resultArray;
    }
    return(
        <>
            <Header search={props.search} setSearch={props.setSearch}  country={props.country} setWindowToggle={props.setWindowToggle}/>
            <CardGridScroll>
                <CardGridWrap>
                    {getRoutes().map(route => <RouteCard key={uuid.v4().toString()} companyName={route.company} country={route.country} address={route.address} cIndex={route.index.toString()} />)}
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
            <FloatingMenu setWindowToggle={props.setWindowToggle} />
        </>
    )
}

export default HomePage;