import styled from "styled-components/native";

export const Subtitle = styled.Text<{ color?: string; size?: number }>`
  font-family: "Nunito-Bold";
  font-size: ${(props) => (props.size ? props.size : 18)}px;
  color: ${(props) =>
    props.color ? props.color : props.theme.color.primaryColor};
  text-align: center;
`;

export const H5 = styled.Text<{ color?: string; size?: number }>`
  font-family: "Nunito-Bold";
  font-size: ${(props) => (props.size ? props.size : 14)}px;
  color: ${(props) => (props.color ? props.color : props.theme.color.white)};
  text-align: center;
`;
