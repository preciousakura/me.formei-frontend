import { useTheme } from "styled-components";
import { Container } from "./styles";
import { IInputProps, Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useTheme as Theme } from "../../../hooks/useTheme";

interface SearchInputProps {
  title?: string;
  config?: IInputProps;
}

export function SearchInput({ title, config }: SearchInputProps) {
  const theme = useTheme();
  const { isDark } = Theme();

  return (
    <Container>
      <Input
        borderColor={isDark ? theme.colors.black : theme.colors.white}
        backgroundColor={isDark ? theme.colors.black : theme.colors.white}
        color={theme.colors.text}
        borderRadius={10}
        height={12}
        fontSize={14}
        placeholder={`Buscar ${title}`}
        InputLeftElement={<Icon as={<Ionicons name="search" />} ml="3" />}
        {...config}
      />
    </Container>
  );
}
