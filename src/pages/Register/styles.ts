import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: ${(theme) => theme.theme.color.primaryColor};
`;

export const ContentForm = styled.View`
  flex: 2;
  background: ${(theme) => theme.theme.color.white};
  padding: 50px;  
  z-index: 1;
  
  
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const DateGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`