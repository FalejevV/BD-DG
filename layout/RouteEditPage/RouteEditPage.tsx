import React, { Dimensions, TouchableWithoutFeedback } from "react-native";
import ImageButton from "../../components/ImageButton/ImageButton";
import { Title, VerticalDivider } from "../../styles/Styled.styled";
import { CheckBoxesContainer, CloseContainer, FormContainer, FormScroll, InputsContainer, LineFlexContainer, NewRoutePageContainer, NewRoutePageHeader, NewRouteSubmitButtonText } from "../NewRoutePage/NewRoutePage.styled";
import InputField from "../../components/InputField/InputField";
import { useEffect, useState } from "react";
import CCheckBox from "../../components/CCheckBox/CCheckBox";
import * as ScreenOrientation from 'expo-screen-orientation';
import { IRoute } from "../../interface";

function RouteEditPage(props:{
    setWindowToggle:Function,
    windowToggle:string,
    countrySelected:string,
    editNewRoute:Function,
    data:IRoute,
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
      
    const [name,setName] = useState(props.data.company);
    const [city, setCity] = useState(props.data.city);
    const [address,setAddress] = useState(props.data.address);
    const [index,setIndex] = useState(props.data.index);

    const [lat,setLat] = useState(props.data.cords.lat.toString());
    const [long,setLong] = useState(props.data.cords.long.toString());

    const [addInfo,setAddInfo] = useState(props.data.addInfo);
    
    const [isHotelNear, setIsHotelNear] = useState(props.data.checkMarks.hotelNear);
    const [isParking, setIsParking] = useState(props.data.checkMarks.parking);
    const [isShopNear, setIsShopNear] = useState(props.data.checkMarks.shopNear);

    function editRoute(){
        if(name.trim() !== "" && address.trim() !== "" && index.trim() !== "" && lat.trim() !== "" && long.trim() !== "" && city.trim() !== ""){
            let editedRoute = {
                id:props.data.id,
                company:name,
                country: props.countrySelected.trim() !== "" ? props.countrySelected : props.data.country,
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
            props.editNewRoute(editedRoute);
            props.setWindowToggle("");
        }else{
            alert("Все поля кроме 'Дополнительная информация' должны быть заполнены");
        }
    }

    return(
        <NewRoutePageContainer>
            <NewRoutePageHeader>
                <Title>Новая запись</Title>
                <CloseContainer>
                    <ImageButton onPress={() => props.setWindowToggle("")} imageName={"close"} />
                </CloseContainer>
            </NewRoutePageHeader>

            <FormScroll>
                <FormContainer isSmall={isSmallScreenMedia}>
                    <InputsContainer isSmall={isSmallScreenMedia}>
                        <LineFlexContainer>
                            <Title>Страна --- {props.countrySelected.trim() !== "" ? props.countrySelected : props.data.country}</Title> 
                            <ImageButton onPress={() => props.setWindowToggle("edit country")} imageName={"edit"} size="25px" padding="0px"/>
                        </LineFlexContainer>

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

                        <InputField multiLine={true} title={"Дополнительная информация"} name={"addInfo"} value={addInfo || ""} setValue={setAddInfo}/>
                    </InputsContainer>

                    <VerticalDivider isSmall={isSmallScreenMedia} ></VerticalDivider>

                    <CheckBoxesContainer isSmall={isSmallScreenMedia}>
                        <CCheckBox value={isParking} setValue={setIsParking} title={"Парковка"} />
                        <CCheckBox value={isShopNear} setValue={setIsShopNear} title={"Магазин рядом"} />
                        <CCheckBox value={isHotelNear} setValue={setIsHotelNear} title={"Отель рядом"} />
                        
                        <TouchableWithoutFeedback onPress={editRoute}>
                            <NewRouteSubmitButtonText isSmall={isSmallScreenMedia}>Сохранить запись</NewRouteSubmitButtonText>
                        </TouchableWithoutFeedback>
                    </CheckBoxesContainer>

                </FormContainer>
            </FormScroll>
        </NewRoutePageContainer>
    )
}

export default RouteEditPage;