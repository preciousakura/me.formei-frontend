import { Input, FormControl, Icon, IInputProps } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { H5 } from "../../../shared/text";
import { useState } from "react";
import { useTheme } from "styled-components";

const { Label } = FormControl;

interface InputPasswordProps {
  label: string;
  config?: IInputProps
}

export function InputPassword({ label, config }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Label>
        <H5 color={theme.color.primaryColor} size={10}>
          {label}
        </H5>
      </Label>
      <Input
        focusOutlineColor={theme.color.primaryColor}
        variant="underlined"
        color={theme.color.text}
        {...config}
        type={!showPassword ? "password" : "text"}
        InputRightElement={
          <Icon
            onPress={() => setShowPassword(!showPassword)}
            as={Ionicons}
            name={!showPassword ? "eye" : "eye-off"}
            size={4}
            ml="2"
            color={theme.color.text}
          />
        }
      />
    </>
  );
}
