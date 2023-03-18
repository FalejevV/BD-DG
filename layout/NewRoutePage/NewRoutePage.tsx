import React, { Dimensions, TouchableWithoutFeedback } from "react-native";
import { Title, VerticalDivider } from "../../styles/Styled.styled";
import { CheckBoxesContainer, FormContainer, FormScroll, InputsContainer, LineFlexContainer, NewRoutePageContainer, NewRouteSubmitButtonText } from "./NewRoutePage.styled";
import InputField from "../../components/InputField/InputField";
import { useEffect, useState } from "react";
import CCheckBox from "../../components/CCheckBox/CCheckBox";
import * as ScreenOrientation from 'expo-screen-orientation';
import uuid from 'react-native-uuid';
import PageHeader from "../../components/PageHeader/PageHeader";

function NewRoutePage(props:{
    setWindowToggle:Function,
    windowToggle:string,
    countrySelected:string,
    addNewRoute:Function,
}){

    const [isSmallScreenMedia, setIsSmallScreenMedia] = useState(false);

    useEffect(() => {

        if(Dimensions.get('window').width < 860){
            setIsSmallScreenMedia(true);
          }else{
            setIsSmallScreenMedia(false);
        }

        const subscription = ScreenOrientation.addOrientationChangeListener(() => {
          if(Dimensions.get('window').width < 860){
            setIsSmallScreenMedia(true);
          }else{
            setIsSmallScreenMedia(false);
          }
        });
        return () => {
          ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, []);
      
    const [name,setName] = useState("");
    const [city, setCity] = useState("");
    const [address,setAddress] = useState("");
    const [index,setIndex] = useState("");

    const [lat,setLat] = useState("");
    const [long,setLong] = useState("");

    const [addInfo,setAddInfo] = useState("");
    
    const [isHotelNear, setIsHotelNear] = useState(0);
    const [isParking, setIsParking] = useState(0);
    const [isShopNear, setIsShopNear] = useState(0);

    function saveRoute(){
        if(name.trim() !== "" && address.trim() !== "" && index.trim() !== "" && lat.trim() !== "" && long.trim() !== "" && city.trim() !== ""){
            let newRoute = {
                id:uuid.v4().toString(),
                company:name,
                country: props.countrySelected,
                city:city,
                address:address,
                index:index,
                cords:{
                    lat:Number(lat),
                    long:Number(long),
                },
                checkMarks:{
                    parking: isParking,
                    shopNear:isShopNear,
                    hotelNear:isParking
                },
                addInfo: addInfo,
            }
            props.addNewRoute(newRoute);
            props.setWindowToggle("");
        }else{
            alert("Все поля кроме 'Дополнительная информация' должны быть заполнены");
        }
    }

    return(
        <NewRoutePageContainer>
            <PageHeader setWindowToggle={() => props.setWindowToggle("")} title={"Новая запись"} />

            <FormScroll>
                <FormContainer isSmall={isSmallScreenMedia}>
                    <InputsContainer isSmall={isSmallScreenMedia}>
                        <Title>Страна --- {props.countrySelected}</Title>

                        <LineFlexContainer>
                            <InputField title={"Название фирмы"} name={"countryName"} value={name} setValue={setName}/>
                            <InputField title={"Город"} name={"city"} value={city} setValue={setCity} maxWidth="175px" />
                        </LineFlexContainer>

                        <LineFlexContainer>
                            <InputField title={"Адрес"} name={"address"} value={address} setValue={setAddress} />
                            <InputField title={"Индекс"} name={"index"} value={index} setValue={setIndex} maxWidth="175px" />
                        </LineFlexContainer>

                        <LineFlexContainer>
                            <InputField title={"Широта"} name={"lat"} value={lat} setValue={setLat} maxWidth="100px"/>
                            <InputField title={"Долгота"} name={"long"} value={long} setValue={setLong} maxWidth="100px"/>
                        </LineFlexContainer>

                        <InputField multiLine={true} title={"Дополнительная информация"} name={"addInfo"} value={addInfo} setValue={setAddInfo}/>
                    </InputsContainer>

                    <VerticalDivider isSmall={isSmallScreenMedia} ></VerticalDivider>

                    <CheckBoxesContainer isSmall={isSmallScreenMedia}>
                        <CCheckBox value={isParking} setValue={setIsParking} title={"Парковка"} />
                        <CCheckBox value={isShopNear} setValue={setIsShopNear} title={"Магазин рядом"} />
                        <CCheckBox value={isHotelNear} setValue={setIsHotelNear} title={"Отель рядом"} />
                        
                        <TouchableWithoutFeedback onPress={saveRoute}>
                            <NewRouteSubmitButtonText isSmall={isSmallScreenMedia}>Сохранить запись</NewRouteSubmitButtonText>
                        </TouchableWithoutFeedback>
                    </CheckBoxesContainer>

                </FormContainer>
            </FormScroll>
        </NewRoutePageContainer>
    )
}

export default NewRoutePage;