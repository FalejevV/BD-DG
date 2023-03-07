import styled from "styled-components/native";

export const CardGridScroll = styled.ScrollView`
    margin-top: 20px;
    width:100%;
    height:100%;
`

export const CardGridWrap = styled.View`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:20px;
`

export const EmptyItem = styled.View`
    width:100%;
    height:90px;
`

export const LoadMoreContainer = styled.View`
    width:100%;
    height:90px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

export const LoadMoreText = styled.Text`
    font-size:18px;
    padding:10px 30px;
    background-color: ${({ theme }) => theme.frameColor};
    color:${({ theme }) => theme.accentColor};
    border:2px solid ${({ theme }) => theme.accentColor};
    border-radius: 5px;
`