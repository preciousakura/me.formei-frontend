import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: ${(theme) => theme.theme.colors.primary[500]};
`;


export const ContentForm = styled.View`
  flex: 1;
  background: ${(theme) => theme.theme.colors.background};
  padding: 80px 50px;  
  z-index: 1;
`;

export const ContainerLogo = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: ${Dimensions.get('window').height/5}px;
  background: ${(theme) => theme.theme.colors.primary[500]};
`;
