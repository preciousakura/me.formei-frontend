import { Input, FormControl } from "native-base";
import { H5 } from "../../../shared/text";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import { useTheme } from "styled-components";
import { useState } from "react";
import { cnpjMask } from "../../../../utils/masks";

const { Label } = FormControl;

interface InputCNPJProps {
  label: string;
  config?: IInputProps;
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function InputCNPJ({
  label,
  config,
  touched,
  isValid,
  errors,
}: InputCNPJProps) {
  const theme = useTheme();

  const [values, setValues] = useState({ cnpj: "" });

  const inputChange = (value: string) => {
    setValues({
      cnpj: value,
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
        value={cnpjMask(values.cnpj)}
        color={theme.color.text}
        focusOutlineColor={theme.color.primaryColor}
        variant="underlined"
        {...config}
        onChangeText={inputChange}
      />
    </>
  );
}
