import { Input, FormControl } from "native-base";
import { H5 } from "../../../shared/text";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

const { Label } = FormControl;

interface InputTextProps {
  label: string;
  config?: IInputProps;
}

export function InputText({ label, config }: InputTextProps) {
  return (
    <>
      <Label>
        <H5 color="#277BC0" size={10}>
          {label}
        </H5>
      </Label>
      <Input focusOutlineColor="#277BC0" variant="underlined" {...config} />
    </>
  );
}
