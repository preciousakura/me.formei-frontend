import { Input, FormControl, Icon, View, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { H5 } from "../../../shared/text";
import { useState } from "react";
import { useTheme } from "styled-components";

const { Label } = FormControl;

interface Password {
  password: string;
  confirmPassword: string;
}

interface ConfirmPassWordProps {
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function ConfirmPassword({
  touched,
  isValid,
  errors,
}: ConfirmPassWordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <VStack>
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
    </VStack>
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
  const theme = useTheme();

  return (
    <View>
      <Label>
        <H5 color={theme.colors.primary[500]} size={14}>
          {label}
        </H5>
      </Label>
      <Input
        fontSize={14}
        fontFamily="Nunito-Regular"
        variant="underlined"
        type={!show ? "password" : "text"}
        placeholder={placeholder}
        color={theme.colors.text}
        InputRightElement={
          <Icon
            onPress={() => setShow(!show)}
            as={Ionicons}
            name={!show ? "eye" : "eye-off"}
            size={5}
            ml="2"
            color={theme.colors.text}
          />
        }
      />
    </View>
  );
}
