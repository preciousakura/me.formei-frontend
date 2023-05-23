import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.color.errorColor};
  border-radius: 10px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
`;

export const IconStyle = styled(Animated.View)`
  width: 50px;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;
