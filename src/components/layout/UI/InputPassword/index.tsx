import { Input, FormControl, Icon, IInputProps } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { H5 } from "../../../shared/text";
import { useState } from "react";

const { Label } = FormControl;

interface InputPasswordProps {
  label: string;
  config?: IInputProps
}

export function InputPassword({ label, config }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Label>
        <H5 color="#277BC0" size={10}>
          {label}
        </H5>
      </Label>
      <Input
        focusOutlineColor="#277BC0"
        variant="underlined"
        {...config}
        type={!showPassword ? "password" : "text"}
        InputRightElement={
          <Icon
            onPress={() => setShowPassword(!showPassword)}
            as={Ionicons}
            name={!showPassword ? "eye" : "eye-off"}
            size={4}
            ml="2"
            color="#2C3333"
          />
        }
      />
    </>
  );
}
