import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background: ${(props) => props.theme.color.cardBackground};
  border-radius: 10px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
