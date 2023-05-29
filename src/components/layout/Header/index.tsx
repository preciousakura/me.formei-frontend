import React from "react";
import { Container } from "./styles";
import { Subtitle } from "../../shared/text";
import { Icon, IconButton, View } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  backButton?: boolean;
  title?: string;
  colorText?: string;
  colorIcon?: string;
  align?: string;
  isSpaced?: boolean;
}

export function Header({
  backButton = false,
  title,
  colorText = "white",
  colorIcon = "white",
  align = "right",
  isSpaced = true,
}: HeaderProps) {
  const navigation = useNavigation<any>();

  return (
    <Container style={{ padding: isSpaced ? 20 : 0 }}>
      {backButton && (
        <IconButton
          onPress={() => navigation.goBack()}
          icon={<Icon as={Entypo} name="chevron-left" />}
          _icon={{
            color: colorIcon,
            size: 36,
          }}
          padding={0}
          borderRadius={30}
        />
      )}
      <Subtitle align={align} color={colorText} size={22}>
        {title}
      </Subtitle>
    </Container>
  );
}
