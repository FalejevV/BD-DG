import styled, { css } from "styled-components/native";

export const RouteContainer = styled.View`
    width:100%;
    height:95%;
    top:2.5%;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    border-radius: 5px;
    border:2px solid ${({ theme }) => theme.accentColor || "red"};
`

export const RouteHeader = styled.View`
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:10px;
    height:50px;
    border-bottom-color:${({ theme }) => theme.accentColor || "red"};
    border-bottom-width:1px;
    padding:5px 15px;
    justify-content: space-between;
    padding-right:10px;
`
export const RouteTitleAndEditContainer = styled.View`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:20px;
`

export const RouteInfoContainer = styled.View<{
    isSmall:boolean,
}>`
    display:flex;
    flex-direction: row;
    gap:10px;
    flex:1 auto;

    ${({ isSmall }) => isSmall && css`
        flex-direction: column;
    `}
    
`

export const RouteInfoScroll = styled.ScrollView`
    width:100%;
    height:100%;
`

export const RouteLeftInfoBar = styled.View<{
    isSmall:boolean,
}>`
    display:flex;
    flex-direction: column;
    gap:15px;
    flex:1;
    max-width:300px;
    padding:15px 0px;
    overflow:hidden;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.accentColor || "red"};

    ${({ isSmall }) => isSmall && css`
        border-right-width:0px;
        max-width:100%;

        border-bottom-width: 1px;
        border-bottom-color: ${({ theme }) => theme.accentColor || "red"};
    `}
`

export const RouteRightInfoBar = styled.View`
    display:flex;
    flex-direction: column;
    flex:1;
    padding:15px;
    gap:20px;
`

export const RouteRightInfoText = styled.Text`
    width:100%;
    font-size:18px;
    ${({ theme }) => theme.accentColor || "red"};
`