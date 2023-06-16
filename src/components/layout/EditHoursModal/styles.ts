import { View } from "native-base";
import styled from "styled-components/native";

export const Container = styled.View``;

export const ContainerModal = styled(View)`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 20px;
`;