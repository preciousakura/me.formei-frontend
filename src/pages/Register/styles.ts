import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(theme) => theme.theme.color.primaryColor};
`;
export const ContainerTop = styled.View`
  flex: 1;
`;
export const ContainerForm = styled.View`
  flex: 10;
  background: ${(theme) => theme.theme.color.white};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  align-items: center;
  justify-content: center;
`;
