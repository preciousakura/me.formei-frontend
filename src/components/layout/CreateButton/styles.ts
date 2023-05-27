import styled from "styled-components/native";

export const Container = styled.TouchableHighlight`
  background-color: ${(props) => props.theme.color.primaryColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;