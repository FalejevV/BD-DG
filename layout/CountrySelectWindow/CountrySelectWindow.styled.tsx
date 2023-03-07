import styled from "styled-components/native";
import Svg from 'react-native-svg';

export const CountrySelectWindowContainer = styled.View`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CSWHeaderContainer = styled.View`
    width:100%;
    height:50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const CSWTitle = styled.Text`
    font-size: 20px;
    color:${({ theme }) => theme.accentColor || "red"};
    font-weight: bold;   
`

export const CloseIconContainer = styled.View`
    position: absolute;
    right:0px;
    top:0px;
`

export const CSWScrollView = styled.ScrollView`
    display: flex;
    flex:1;
    width:100%;
`

export const CountryButtonWrapper = styled.View`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`