import { ISelectProps, Select, Icon } from "native-base";
import { SelectComponent } from "./styles";
import { useTheme } from "../../../hooks/useTheme";
import { Entypo } from "@expo/vector-icons";

const { Item } = Select;

interface SelectProps {
  label: string;
  value: string;
}

interface FilterSelectProps {
  values: SelectProps[];
  config?: ISelectProps;
}

export function FilterSelect({ values, config }: FilterSelectProps) {
  const { theme, isDark } = useTheme();

  return (
    <SelectComponent
      borderColor={isDark ? theme.colors.black : theme.colors.white}
      backgroundColor={isDark ? theme.colors.black : theme.colors.white}
      color={theme.colors.text}
      borderRadius={10}
      height={12}
      fontSize={14}
      fontFamily="Nunito-Regular"
      {...config}
      dropdownIcon={<Icon as={Entypo} name="chevron-down" size={4} right={2} />}
    >
      {values.map((value) => {
        return <Item key={value.label} {...value} />;
      })}
    </SelectComponent>
  );
}
