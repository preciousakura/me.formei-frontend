import { Dimensions } from "react-native";
import styled from "styled-components/native";

const dimensions = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  height: ${dimensions.height/7.5}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;