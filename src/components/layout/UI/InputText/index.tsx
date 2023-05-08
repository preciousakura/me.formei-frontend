import { Input, FormControl } from "native-base";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { H5 } from "../../../shared/subtitle";

const { Label } = FormControl;

interface InputTextProps {
    label: string;
}

export function InputText({label}: InputTextProps) {
  return (
    <>
      <Label>
        <H5 color="#277BC0" size={10}>
          {label}
        </H5>
      </Label>
      <Input borderBottomColor="#277BC0" variant="underlined" />
    </>
  );
}
