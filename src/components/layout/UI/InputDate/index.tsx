import { FormControl } from "native-base";
import { H5 } from "../../../shared/text";
import { useTheme } from "styled-components";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const { Label } = FormControl;

interface InputDateProps {
  label: string;
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

export function InputDate({ label, touched, isValid, errors }: InputDateProps) {
  const theme = useTheme();
  return (
    <>
      <Label>
        <H5 color={theme.color.primaryColor} size={12}>
          {label}
        </H5>
      </Label>
      <RNDateTimePicker mode="date" value={new Date()} />
    </>
  );
}
