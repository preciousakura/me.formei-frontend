import { View } from "react-native";
import { Container, Row } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H5, Subtitle } from "../../shared/text";
import { useTheme } from "styled-components";

export function UserInfo() {
  const theme = useTheme();
  return (
    <Container>
      <Row>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <MaterialCommunityIcons
            name="account-circle"
            size={60}
            color={theme.color.textButton}
          />
          <View>
            <Subtitle  color={theme.color.textButton}>
              Isabel Cristina
            </Subtitle>
            <H5 color={theme.color.textButton} >
              Curso:{" "}
              <H5 color={theme.color.textButton}  weight="regular">
                Ciência da Computação
              </H5>
            </H5>
            <H5 color={theme.color.textButton} >
              Ano de entrada:{" "}
              <H5 color={theme.color.textButton}  weight="regular">
                2020.1
              </H5>
            </H5>
          </View>
        </View>
        <View>
          <MaterialCommunityIcons name="exit-to-app" size={30} color={theme.color.textButton} />
        </View>
      </Row>
    </Container>
  );
}
