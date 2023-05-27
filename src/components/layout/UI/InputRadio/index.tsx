import { Radio, FormControl, IRadioProps, HStack } from "native-base";
import { H5 } from "../../../shared/text";
import { useTheme } from "styled-components";

const { Label } = FormControl;

interface InputRadioProps {
  label: string;
  defaultValue?: string;
  values: string[];
  config?: IRadioProps;
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function InputRadio({
  label,
  defaultValue,
  values,
  config,
  touched,
  isValid,
  errors,
}: InputRadioProps) {
  const theme = useTheme();
  return (
    <>
      <Label>
        <H5 color={theme.color.primaryColor} size={12}>
          {label}
        </H5>
      </Label>
      <Radio.Group
        defaultValue={defaultValue}
        {...config}
        name="groupRadio"
        accessibilityLabel="favorite colorscheme"
      >
        <HStack space={6}>
          {values.map((value, index) => {
            return (
              <Radio size="sm" key={index} value={value} my={1}>
                <H5 color={theme.color.text} size={12}>
                  {value}
                </H5>
              </Radio>
            );
          })}
        </HStack>
      </Radio.Group>
    </>
  );
}
