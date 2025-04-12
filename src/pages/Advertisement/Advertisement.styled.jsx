import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #d9d9d9;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const MainContent = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    width: 100%;
`;

export const ComponentsWrapper = styled.div`
    flex: 1;
    max-width: 700px;
    padding-bottom: 0px;
    background-color: #D9D9D9;
    overflow-y: auto;
`;