import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { H5, Subtitle } from "../../shared/text";
import { Container, ContainerModal } from "./styles";
import { Modal, TouchableOpacity } from "react-native";
import { HStack, Icon, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { CustomizedStatusBar } from "../CustomizedStatusBar";
import { WeekSelected } from "../WeekSelected";

interface EditHoursModalProps {
  item: {
    name: string;
    cod: string;
  };
}

export function EditHoursModal({ item }: EditHoursModalProps) {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <H5 color={theme.colors.trueGray[400]} numberOfLines={1}>
          #{item.cod}
        </H5>
        <H5 color={theme.colors.text} numberOfLines={1}>
          {item.name}
        </H5>
      </TouchableOpacity>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <CustomizedStatusBar />

        <ContainerModal>
          <VStack>
            <HStack justifyContent="space-between" alignItems="center">
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Icon
                  as={Entypo}
                  name="chevron-left"
                  color={theme.colors.text}
                  size={36}
                />
              </TouchableOpacity>
              <Subtitle align="left" color={theme.colors.text} size={22}>
                Editar Horário
              </Subtitle>
            </HStack>
            <WeekSelected />
          </VStack>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
