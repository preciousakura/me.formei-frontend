import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.green[500]};
  border-radius: 10px;
  justify-content: center;
  padding: 10px;
`;

export const IconStyle = styled(Animated.View)`
  width: 50px;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;
