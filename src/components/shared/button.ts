import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    background: ${(props) => props.theme.color.primaryColor};
    border-radius: 15px;
    padding: 12px 0;
    width: 50%;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: 'Nunito-Bold';
    text-align: center;
    color: ${(props) => props.theme.color.text};
`;

