import { Discipline } from "Discipline";
import { H5 } from "../../shared/text";
import { Container, Content } from "./styles";
import { TouchableOpacity, Modal, FlatList } from "react-native";
import { useState } from "react";
import {
  HStack,
  Icon,
  VStack,
  View,
  theme,
  useTheme as useNativeTheme,
} from "native-base";
import { useTheme } from "../../../hooks/useTheme";
import { Entypo } from "@expo/vector-icons";
import { CustomizedStatusBar } from "../CustomizedStatusBar";
import { SearchInput } from "../SearchInput";

interface SelectMultipleProps {
  data: Discipline[];
  onChange: () => void;
  defaultValue?: Discipline[];
  placeholder?: string;
  max?: number
}

export function SelectMultiple({
  data,
  onChange,
  defaultValue = [],
  placeholder,
  max
}: SelectMultipleProps) {
  const { colors } = useNativeTheme();
  const { theme } = useTheme();
  
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState(data);
  const [list, setList] = useState([...data]);
  
  return (
    <Container onPress={() => setVisible(true)}>
      <H5 color={colors.trueGray[500]} weight="regular">
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
            <SearchInput title="disciplina" />
          </VStack>
        </Content>
      </Modal>
    </Container>
  );
}
