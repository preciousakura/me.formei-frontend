import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.color.background};
  padding: 20px;
`;

export const DetailContainer = styled.ScrollView`
  background: ${(props) => props.theme.color.background};
`;

export const DetailContent = styled.View`
  flex: 2;
  background: ${(props) => props.theme.color.cardBackground};
  padding: 40px 30px;

  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;
