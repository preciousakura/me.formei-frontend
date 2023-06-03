import { ScrollView, View } from "native-base";
import styled from "styled-components/native";

export const Container = styled(ScrollView)`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled(View)`
  padding: 20px;
`;
