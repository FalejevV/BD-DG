import styled, { css } from "styled-components/native";

export const NewRoutePageContainer = styled.View`
    width:100%;
    height:100%;
`

export const NewRoutePageHeader = styled.View`
    width:100%;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color:${({ theme }) => theme.accentColor || "red"};
    margin-bottom: 20px;
` 

export const CloseContainer = styled.View`
    position: absolute;
    right:0px;
`
export const FormScroll = styled.ScrollView`
    width:100%;
    height:100%;
`

export const FormContainer = styled.View<{
    isSmall: boolean,
}>`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:15px;

    ${({ isSmall }) => isSmall && css`
        flex-direction: column;
        justify-content: flex-start;
    `}
`

export const InputsContainer = styled.View<{
    isSmall: boolean,
}>`
    display:flex;
    flex-direction: column;
    gap:15px;
    width:100%;
    max-width:500px;

    ${({ isSmall }) => isSmall && css`
        max-width:100%;
    `}
`

export const CheckBoxesContainer = styled.View<{
    isSmall: boolean,
}>`
    min-width: 400px;
    width:100%;
    max-width:450px;
    display: flex;
    flex-direction: column;
    gap:10px;

    ${({ isSmall }) => isSmall && css`
        max-width:100%;
    `}
`

export const LineFlexContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    gap:15px;
`

export const NewRouteSubmitButtonText = styled.Text<{
    isSmall: boolean,
}>`
    margin:0 auto;
    margin-top:auto;
    color:${({ theme }) => theme.accentColor || "red"};
    max-width: 300px;
    width:100%;
    font-size: 18px;
    padding:15px 40px;
    background-color: ${({ theme }) => theme.frameColor || "red"};
    text-align: center;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.accentColor || "red"};

    ${({ isSmall }) => isSmall && css`
        margin-top:50px;
    `} 
`