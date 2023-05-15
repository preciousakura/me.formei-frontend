import { FormControl, Icon, Select } from "native-base";
import { H5 } from "../../../shared/text";
import { Entypo } from "@expo/vector-icons";
import { ISelectProps } from "native-base/lib/typescript/components/primitives/Select";
const { Item } = Select;
const { Label } = FormControl;

interface SelectData {
  label: string;
  value: string;
}

interface InputSelectProps {
  label: string;
  config?: ISelectProps;
  values: SelectData[];
}

export function InputSelect({ label, config, values }: InputSelectProps) {
  return (
    <>
      <Label>
        <H5 color="#277BC0" size={10}>
          {label}
        </H5>
      </Label>

      <Select
        {...config}
        focusOutlineColor="#277BC0"
        variant="underlined"
        dropdownIcon={<Icon as={Entypo} name="chevron-down" size={4} />}
      >
        {values.map((value) => { 
          return <Item key={value.label} {...value} />;
        })}
      </Select>
    </>
  );
}
