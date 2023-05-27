import { FormControl, Icon, Select, VStack } from "native-base";
import { H5 } from "../../../shared/text";
import { Entypo } from "@expo/vector-icons";
import { ISelectProps } from "native-base/lib/typescript/components/primitives/Select";
import { useTheme } from "styled-components";
const { Item } = Select;
const { Label } = FormControl;

interface SelectData {
  label: string;
  value: string;
}

interface InputSelectProps {
  label: string;
  config?: ISelectProps;
  values: SelectData[];
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function InputSelect({
  label,
  config,
  values,
  touched,
  isValid,
  errors,
}: InputSelectProps) {
  const theme = useTheme();
  return (
    <VStack>
      <Label>
        <H5 color={theme.color.primaryColor} size={12}>
          {label}
        </H5>
      </Label>

      <Select
        {...config}
        color={theme.color.text}
        variant="underlined"
        dropdownIcon={<Icon as={Entypo} name="chevron-down" size={4} />}
      >
        {values.map((value) => {
          return <Item key={value.label} {...value} />;
        })}
      </Select>
    </VStack>
  );
}
