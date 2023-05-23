import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.color.background};
  padding: 20px;
`;
