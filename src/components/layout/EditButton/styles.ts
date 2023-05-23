import styled from "styled-components/native";

export const Container = styled.View`
    width: 55px;
    height: 100%;
    background-color: ${props => props.theme.color.green};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;