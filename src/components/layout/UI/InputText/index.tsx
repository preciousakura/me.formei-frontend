import { Input, FormControl, VStack } from "native-base";
import { H5 } from "../../../shared/text";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import { useTheme } from "styled-components";

const { Label } = FormControl;

interface InputTextProps {
  label: string;
  config?: IInputProps;
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function InputText({
  label,
  config,
  touched,
  isValid,
  errors,
}: InputTextProps) {
  const theme = useTheme();
  return (
    <VStack>
      <Label>
        <H5 color={theme.color.primaryColor} size={12}>
          {label}
        </H5>
      </Label>
      <Input color={theme.color.text} variant="underlined" {...config} />
    </VStack>
  );
}
