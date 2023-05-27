import { Input, FormControl } from "native-base";
import { H5 } from "../../../shared/text";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import { useTheme } from "styled-components";
import { useState } from "react";
import { numberMask } from "../../../../utils/masks";

const { Label } = FormControl;

interface InputNumberProps {
  label: string;
  config?: IInputProps;
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function InputNumber({
  label,
  config,
  touched,
  isValid,
  errors,
}: InputNumberProps) {
  const theme = useTheme();

  const [values, setValues] = useState({ number: "" });

  const inputChange = (value: string) => {
    setValues({
      number: value,
    });
  };

  return (
    <>
      <Label>
        <H5 color={theme.color.primaryColor} size={12}>
          {label}
        </H5>
      </Label>
      <Input
        value={numberMask(values.number)}
        color={theme.color.text}
        focusOutlineColor={theme.color.primaryColor}
        variant="underlined"
        {...config}
        onChangeText={inputChange}
      />
    </>
  );
}
