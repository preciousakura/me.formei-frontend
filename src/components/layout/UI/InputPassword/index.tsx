import { Input, FormControl, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import { H5 } from "../../../shared/subtitle";

const { Label } = FormControl;

interface InputPasswordProps {
  label: string;
}

export function InputPassword({ label }: InputPasswordProps) {
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
        type="password"
        InputRightElement={
          <Icon
            as={Ionicons}
            name="eye"
            size={3}
            ml="2"
            color="#2C3333"
            right={3}
          />
        }
      />
    </>
  );
}
