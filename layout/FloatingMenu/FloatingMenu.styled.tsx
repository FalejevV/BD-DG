import styled from "styled-components/native";

export const FloatingMenuContainer = styled.View`
    position: absolute;
    bottom: 20px;
    left:20px;
    width:70px;
    border:2px solid ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
    padding:5px;
    background-color: ${({ theme }) => theme.frameColor};
`