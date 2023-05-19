import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(theme) => theme.theme.color.primaryColor};
`;

export const IconContent = styled.View`
  flex: 2;
  background: ${(theme) => theme.theme.color.primaryColor};
  align-items: center;
  justify-content: center;
`

export const TextContent = styled.View`
  flex: 2;
  padding: 50px 30px;
  background: ${(theme) => theme.theme.color.background};
  align-items: center;
`