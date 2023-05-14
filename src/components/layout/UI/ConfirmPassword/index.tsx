import { Input, FormControl, Icon, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { H5 } from "../../../shared/subtitle";
import { useState } from "react";

const { Label } = FormControl;

interface Password {
  password: string;
  confirmPassword: string;
}

interface ConfirmPassWordProps {}

export function ConfirmPassword({}: ConfirmPassWordProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <FormControl>
        <InputPassword
          placeholder="Digite sua senha"
          show={showPassword}
          setShow={setShowPassword}
          label="Senha"
        />
      </FormControl>
      <FormControl paddingTop={3}>
        <InputPassword
          placeholder="Confirme sua senha"
          show={showPassword}
          setShow={setShowPassword}
          label="Confirmação de senha"
        />
      </FormControl>
    </>
  );
}

interface InputPasswordProps {
  show: boolean;
  setShow: (value: boolean) => void;
  label: string;
  placeholder: string;
}

export function InputPassword({
  show,
  setShow,
  label,
  placeholder,
}: InputPasswordProps) {
  return (
    <View>
      <Label>
        <H5 color="#277BC0" size={10}>
          {label}
        </H5>
      </Label>
      <Input
        focusOutlineColor="#277BC0"
        variant="underlined"
        type={!show ? "password" : "text"}
        placeholder={placeholder}
        InputRightElement={
          <Icon
            onPress={() => setShow(!show)}
            as={Ionicons}
            name={!show ? "eye" : "eye-off"}
            size={4}
            ml="2"
            color="#2C3333"
          />
        }
      />
    </View>
  );
}
