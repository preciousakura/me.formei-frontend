import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(theme) => theme.theme.color.primaryColor};
`;


export const ContentForm = styled.View`
  flex: 2;
  background: ${(theme) => theme.theme.color.white};
  padding: 80px 50px;  
  z-index: 1;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
