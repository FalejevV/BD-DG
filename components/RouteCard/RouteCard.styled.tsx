import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

export const RouteCardContainer = styled.View`
    flex:1;
    min-width: 300px;
    height:250px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};
    padding:10px;
    display: flex;
    flex-direction: column;
    gap:10px;
`

export const RouteCardTitle = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color:${({ theme }) => theme.accentColor || "red"};
`


export const AboutTextTitle = styled(RouteCardTitle)`
    font-size: 17px;
`
export const AboutText = styled(RouteCardTitle)`
    font-size: 17px;
    font-weight: 500;
`

export const AboutTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    width:100%;
    gap:5px;
    padding-right:60px;
`

export const AboutSVG = styled(SvgXml)`
    fill:${({ theme }) => theme.accentColor || "red"};
    opacity:0.7;
    width:50px;
    height:50px;
    margin:0 auto;
    margin-top:auto;
`