import styled, { css } from 'styled-components/native';

export const MainView = styled.SafeAreaView`
    display: flex;
    flex-direction: column;
    padding:20px;
    background-color: ${({ theme }) => theme.bgColor || "red"};
    width:100%;
    height:100%;
    flex:1;
`

export const Divider = styled.View`
    width:100%;
    height:1px;
    background-color: ${({ theme }) => theme.accentColor || "red"};
    opacity:0.7;
`

export const VerticalDivider = styled.View<{
    isSmall?: boolean,
}>`
    width:1px;
    height:100%;
    background-color: ${({ theme }) => theme.accentColor || "red"};
    opacity:0.7;

    ${({ isSmall }) => isSmall && css`
        display:none;
    `}
`

export const Title = styled.Text`
    font-size: 20px;
    ${({ theme }) => theme.accentColor || "red"};
    font-weight: bold;
`