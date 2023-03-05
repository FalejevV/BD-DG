import styled from 'styled-components/native';

export const MainView = styled.SafeAreaView`
    display: flex;
    flex-direction: column;
    padding:20px;
    background-color: ${({ theme }) => theme.bgColor || "red"};
    width:100%;
    height:100%;
    flex:1;

`