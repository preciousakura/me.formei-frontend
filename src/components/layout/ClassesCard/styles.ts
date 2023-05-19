import styled from "styled-components/native";

export const Container = styled.View<{current_class: boolean}>`
  flex-direction: row;
  background: ${(props) => props.current_class ? props.theme.color.orangeLight : props.theme.color.cardBackground};
  border-radius: 10px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`