import { H5 } from "../../shared/text";
import { Container, Content, DisciplineItem } from "./styles";
import { TouchableOpacity, Modal, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { HStack, Icon, VStack, useTheme as useNativeTheme } from "native-base";
import { useTheme } from "../../../hooks/useTheme";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { CustomizedStatusBar } from "../CustomizedStatusBar";
import { SearchInput } from "../SearchInput";

interface Discipline {
  name: string;
  cod: string;
  id: number;
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
  const [selected, setSelected] = useState<Discipline[]>([]);
  const [isFull, setIsFull] = useState(false);

  const [termo, setTermo] = useState("");

  useEffect(() => {
    setOptions(data);
    setList(data);
  }, [data]);

  useEffect(() => {
    if (max) setIsFull(selected.length >= max);
  }, [selected]);

  const toggleSelection = (item: Discipline) => {
    const index = selected.findIndex((i) => i.id === item.id);
    const arrSelected = [...selected];
    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      if (max) {
        if (arrSelected.length < max) arrSelected.push(item);
      } else arrSelected.push(item);
    }
    setSelected(arrSelected);
  };

  function renderItem(item: Discipline, index: number) {
    const selectedItem = selected.findIndex((i) => i.id === item.id) !== -1;
    return (
      <TouchableOpacity
        key={index}
        disabled={!selectedItem && isFull}
        style={{
          opacity: !selectedItem && isFull ? 0.4 : 1,
        }}
        onPress={() => toggleSelection(item)}
      >
        <HStack alignItems="center">
          {!selectedItem && isFull ? (
            <Icon
              as={AntDesign}
              name="pluscircle"
              color={theme.colors.red[500]}
              size={36}
            />
          ) : (
            <Icon
              as={AntDesign}
              name="minuscircle"
              color={theme.colors.red[500]}
              size={36}
            />
          )}

          <DisciplineItem>
            <H5 color={theme.colors.trueGray[400]}>#{item.cod}</H5>
            <H5 color={theme.colors.text}>{item.name}</H5>
          </DisciplineItem>
        </HStack>
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
