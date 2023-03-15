import styled from "styled-components/native";

export const ImageButtonContainer = styled.View<{
    cPadding?:string,
}>`
    padding: ${({ cPadding }) => cPadding || "10px"};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IBImage = styled.Image<{
    size:string,
}>`
    width:${({ size }) => size || "35px" };
    height:${({ size }) => size || "35px" };
    
`