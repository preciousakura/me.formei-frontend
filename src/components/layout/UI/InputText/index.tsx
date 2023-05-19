import { Input, FormControl } from "native-base";
import { H5 } from "../../../shared/text";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import { useTheme } from "styled-components";

const { Label } = FormControl;

interface InputTextProps {
  label: string;
  config?: IInputProps;
}

export function InputText({ label, config }: InputTextProps) {
  const theme = useTheme();
  return (
    <>
      <Label>
        <H5 color={theme.color.primaryColor} size={10}>
          {label}
        </H5>
      </Label>
      <Input color={theme.color.text} focusOutlineColor={theme.color.primaryColor} variant="underlined" {...config} />
    </>
  );
}
