import { FormControl, IInputProps, Icon, Input, VStack } from "native-base";
import { H5 } from "../../../shared/text";
import { useTheme } from "styled-components";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Platform, Pressable } from "react-native";

const { Label } = FormControl;

interface InputDateProps {
  label: string;
  config?: IInputProps;
  touched?: boolean;
  isValid?: boolean;
  errors?: string;
}

const zeroLeft = (value: number) => {
  return ("0000" + value).slice(-2);
};

export function InputDate({
  label,
  config,
  touched,
  isValid,
  errors,
}: InputDateProps) {
  const theme = useTheme();

  const [date, setDate] = useState<Date>(new Date());
  const [dateValue, setDateValue] = useState(
    `${zeroLeft(date.getDate())}/${zeroLeft(
      date.getMonth()
    )}/${date.getFullYear()}`
  );
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event: DateTimePickerEvent, d?: Date) => {
    if (event.type === "set") {
      const currentDate = d ?? new Date();
      const dateValue = `${zeroLeft(currentDate.getDate())}/${zeroLeft(
        currentDate.getMonth()
      )}/${currentDate.getFullYear()}`;
      setDate(currentDate);
      if (Platform.OS === "android") {
        togglePicker();
        setDateValue(dateValue);
      }
    } else togglePicker();
  };

  return (
    <VStack>
      <Label>
        <H5 color={theme.colors.primary[500]} size={14}>
          {label}
        </H5>
      </Label>
      {showPicker && (
        <DateTimePicker
          locale="pt-BR"
          onChange={onChange}
          display="spinner"
          value={date}
          mode="date"
        />
      )}

      {!showPicker && (
        <Pressable onPress={togglePicker}>
          <Input
            fontFamily="Nunito-Regular"
            fontSize={14}
            variant="underlined"
            color={theme.colors.text}
            {...config}
            value={dateValue}
            onChangeText={setDateValue}
            editable={false}
            InputRightElement={
              <Icon
                as={FontAwesome}
                name="calendar"
                size={4}
                ml="2"
                color={theme.colors.text}
              />
            }
          />
        </Pressable>
      )}
    </VStack>
  );
}
