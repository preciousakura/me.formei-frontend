import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 19, 32, 0.5);
  top: 0;
  height: ${Dimensions.get("window").height -
  (Platform.OS === "ios" ? 12 : 0)}px;
  width: ${Dimensions.get("window").width}px;
  position: absolute;
  z-index: 999;
  justify-content: center;
  align-items: center;
`;
