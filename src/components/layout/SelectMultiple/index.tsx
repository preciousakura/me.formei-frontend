import { H5 } from "../../shared/text";
import { Container, Content, DisciplineItem } from "./styles";
import { TouchableOpacity, Modal, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { HStack, Icon, VStack, useTheme as useNativeTheme } from "native-base";
import { useTheme } from "../../../hooks/useTheme";
import { Entypo } from "@expo/vector-icons";
import { CustomizedStatusBar } from "../CustomizedStatusBar";
import { SearchInput } from "../SearchInput";

interface Discipline {
  name: string;
  cod: string;
}

interface SelectMultipleProps {
  data: Discipline[];
  onChange: () => void;
  defaultValue?: string[];
  placeholder?: string;
  max?: number;
}

export function SelectMultiple({
  data,
  onChange,
  defaultValue = [],
  placeholder,
  max,
}: SelectMultipleProps) {
  const { colors } = useNativeTheme();
  const { theme } = useTheme();

  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<Discipline[]>([]);
  const [list, setList] = useState<Discipline[]>([]);

  const [termo, setTermo] = useState("");

  useEffect(() => {
    setOptions(data);
    setList(data);
  }, [data]);

  function renderItem(item: Discipline, index: number) {
    return (
      <TouchableOpacity key={index}>
        <DisciplineItem>
          <H5 color={theme.colors.trueGray[400]}>#{item.cod}</H5>
          <H5 color={theme.colors.text}>{item.name}</H5>
        </DisciplineItem>
      </TouchableOpacity>
    );
  }

  const filteredList =
    termo.length > 0
      ? options.filter(
          (d) =>
            d.name.toLowerCase().includes(termo.toLowerCase()) ||
            d.cod.toLowerCase().includes(termo.toLowerCase())
        )
      : [];

  return (
    <Container onPress={() => setVisible(true)}>
      <H5 color={colors.trueGray[400]} weight="regular">
        {placeholder}
      </H5>
      <Icon as={Entypo} name="chevron-down" size={4} />
      <Modal
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        visible={visible}
      >
        <CustomizedStatusBar />
        <Content>
          <VStack space={2}>
            <HStack justifyContent="space-between" alignItems="center">
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Icon
                  as={Entypo}
                  name="chevron-left"
                  color={theme.colors.text}
                  size={36}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <H5 color={theme.colors.text} size={22}>
                  OK
                </H5>
              </TouchableOpacity>
            </HStack>
            <SearchInput
              title="disciplina"
              config={{ defaultValue: termo, onChangeText: setTermo }}
            />
          </VStack>
          <FlatList
            style={{ marginTop: 65 }}
            keyExtractor={(_, i) => `${i}`}
            data={termo.length > 0 ? filteredList : list}
            // ListHeaderComponent={HeaderContent}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
        </Content>
      </Modal>
    </Container>
  );
}
