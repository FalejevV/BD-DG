import styled from "styled-components/native";
import { RouteInfoTitle } from "../RouteInfoItem/RouteInfoItem.styled";

export const CheckBoxInfoContainer = styled.View`
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:10px;
    padding:0px 15px;
`

export const CheckBoxInfoTitle = styled(RouteInfoTitle)`
    width:auto;
    flex:1;
`

export const CheckBoxInfoIcon = styled.Image`
    width:25px;
    height:25px;
`
