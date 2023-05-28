import { View } from "native-base";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 20px;
`;

export const ScrollContent = styled.ScrollView`
  background: ${(props) => props.theme.colors.background};
`;

export const BorderedContent = styled(View)`
  flex: 2;
  background: ${(props) =>
    props.theme.isDark ? props.theme.colors.black : props.theme.colors.white};
  padding: 40px 30px; 

  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const DateGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
