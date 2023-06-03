import { Container } from "./styles";
import { Subtitle } from "../../shared/text";
import { Icon, IconButton, View } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";

interface HeaderProps {
  backButton?: boolean;
  title?: string;
  colorText?: string;
  colorIcon?: string;
  align?: string;
  isSpaced?: boolean;
  props?: IViewProps;
  rightButton?: () => JSX.Element;
}

export function Header({
  backButton = false,
  title,
  colorText = "white",
  colorIcon = "white",
  align = "right",
  isSpaced = true,
  props,
  rightButton,
}: HeaderProps) {
  const navigation = useNavigation<any>();
  const Component = rightButton as any;
  return (
    <Container
      {...props}
      justifyContent={props?.justifyContent ?? "space-between"}
      style={{ padding: isSpaced ? 20 : 0 }}
    >
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
      <View position="absolute" right={6} zIndex={10}>
        {rightButton && <Component />}
      </View>
    </Container>
  );
}
