import styled, { css } from "styled-components/native";

export const FloatingMenuContainer = styled.View`
    border:2px solid ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    padding:5px;
    background-color: ${({ theme }) => theme.frameColor};
    z-index: 100;
`

export const FloatingBackgroundFrame = styled.View`
    position: absolute;
    left:-25px;
    top:-25px;
    width:110px;
    height:200%;
    background-color: ${({ theme }) => theme.frameColor};
    opacity:0.7;
    border-radius: 5px;
`

export const FMWrap = styled.View<{
    positionSide: 1 | 0,
}>`
    position: absolute;
    bottom: 20px;

    ${({ positionSide }) => positionSide === 1 && css`
        right:20px;
    `}

    ${({ positionSide }) => positionSide === 0 && css`
        left:20px;
    `}
`