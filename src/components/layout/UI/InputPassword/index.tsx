import { Input, FormControl, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { H5 } from "../../../shared/subtitle";
import { useState } from "react";

const { Label } = FormControl;

interface InputPasswordProps {
  label: string;
}

export function InputPassword({ label }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Label>
        <H5 color="#277BC0" size={10}>
          {label}
        </H5>
      </Label>
      <Input
        borderBottomColor="#277BC0"
        variant="underlined"
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
