import { RouteInfoItemContainer, RouteInfoTitle, RouteInfoValue } from "./RouteInfoItem.styled";


function RouteInfoItem(props:{
    infoTitle:string,
    infoValue:string,
}){
    return(
        <RouteInfoItemContainer >
            <RouteInfoTitle>{props.infoTitle}:</RouteInfoTitle>
            <RouteInfoValue >{props.infoValue}</RouteInfoValue>
        </RouteInfoItemContainer>
    )
}

export default RouteInfoItem;