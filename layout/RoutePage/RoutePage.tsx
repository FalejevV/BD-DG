import { useEffect, useState } from "react";
import CheckBoxInfo from "../../components/CheckboxInfo/CheckBoxInfo";
import ImageButton from "../../components/ImageButton/ImageButton";
import RouteInfoItem from "../../components/RouteInfoItem/RouteInfoItem";
import { IRoute } from "../../interface";
import { Divider, Title } from "../../styles/Styled.styled";
import { RemoveRouteContainer, RouteContainer, RouteHeader, RouteInfoContainer, RouteInfoScroll, RouteLeftInfoBar, RouteRightInfoBar, RouteRightInfoText, RouteTitleAndEditContainer } from "./RoutePage.styled";
import { Alert, Dimensions, TouchableOpacity } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';


function RoutePage(props:{
    route:IRoute,
    setRoutePreview:Function,
    setWindowToggle:Function,
    removeRoute:Function,
}){


    const [isSmallScreenMedia, setIsSmallScreenMedia] = useState(false);

    useEffect(() => {

        if(Dimensions.get('window').width < 700){
            setIsSmallScreenMedia(true);
          }else{
            setIsSmallScreenMedia(false);
        }

        const subscription = ScreenOrientation.addOrientationChangeListener(() => {
          if(Dimensions.get('window').width < 700){
            setIsSmallScreenMedia(true);
          }else{
            setIsSmallScreenMedia(false);
          }
        });
        return () => {
          ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, []);
    
    function removePrompt(){
        props.removeRoute(props.route);
    }

    const twoOptionAlertHandler = () => {
        //function to make two option alert
        Alert.alert(
          //title
          'Удаление записи',
          //body
          'Удалить '+props.route.company + "?",
          [
            { text: 'Удалить', onPress: () => removePrompt() },
            {
              text: 'Отмена',
              onPress: () => {},
              style: 'cancel',
            },
          ],
          { cancelable: false }
          //clicking out side of alert will not cancel
        );
      };
      

    return(
        <RouteContainer style={{shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 20,}}>

            <RouteHeader>
                <RouteTitleAndEditContainer>
                    <Title>{props.route.company}</Title>
                    <ImageButton onPress={() =>props.setWindowToggle("edit")} imageName={"edit"} size="26px"/>
                </RouteTitleAndEditContainer>
                <ImageButton onPress={() => props.setRoutePreview(null)} imageName={"close"} size="35px" padding="0px"/>
            </RouteHeader>
            
            <RouteInfoScroll>
                <RouteInfoContainer isSmall={isSmallScreenMedia}>
                    <RouteLeftInfoBar isSmall={isSmallScreenMedia}>
                        <RouteInfoItem infoTitle={"Страна"} infoValue={props.route.country} />
                        <RouteInfoItem infoTitle={"Город"} infoValue={props.route.city} />
                        <RouteInfoItem infoTitle={"Адрес"} infoValue={props.route.address} />
                        <RouteInfoItem infoTitle={"Индекс"} infoValue={props.route.index} />

                        <Divider></Divider>

                        <RouteInfoItem infoTitle={"Широта"} infoValue={props.route.cords.lat?.toString() || "0"} />
                        <RouteInfoItem infoTitle={"Долгота"} infoValue={props.route.cords.long?.toString() || "0"} />

                        <Divider></Divider>

                        <CheckBoxInfo title={"Парковка"} value={props.route.checkMarks.parking} />
                        <CheckBoxInfo title={"Магазин рядом"} value={props.route.checkMarks.shopNear} />
                        <CheckBoxInfo title={"Отель рядом"} value={props.route.checkMarks.hotelNear} />
                    </RouteLeftInfoBar>

                    <RouteRightInfoBar>
                        <Title>Дополнительная информация</Title>
                        <RouteRightInfoText>
                            {props.route.addInfo.length > 0 ? props.route.addInfo : "Информация отсутствует"}
                        </RouteRightInfoText>
                    </RouteRightInfoBar>
                </RouteInfoContainer>
            </RouteInfoScroll>

                <RemoveRouteContainer>
                    <ImageButton size="25px" onPress={twoOptionAlertHandler} imageName={"delete"} />
                </RemoveRouteContainer>
        </RouteContainer>
    )
}

export default RoutePage;