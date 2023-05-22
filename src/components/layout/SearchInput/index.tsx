import { useTheme } from "styled-components";
import { Container } from "./styles";
import { Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps {
  title?: string;
}

export function SearchInput({ title }: SearchInputProps) {
  const theme = useTheme();
  return (
    <Container>
      <Input
        borderColor={theme.color.cardBackground}
        backgroundColor={theme.color.cardBackground}
        color={theme.color.text}
        borderRadius={10}
        placeholder={`Buscar ${title}`}
        
        InputLeftElement={<Icon as={<Ionicons name="search"/>} ml="3"/>}
      />
    </Container>
  );
}
