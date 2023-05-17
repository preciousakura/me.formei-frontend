import { View } from "react-native";
import { H5 } from "../../shared/text";
import {
  Bar,
  BarGroup,
  Circle,
  Container,
  LegendBar,
  LegendBarGroup,
} from "./styles";

interface DataBar {
  name: string;
  value: number;
  color: string;
  parcial: number;
  total: number;
}

interface ProgressBarProps {
  data: DataBar[];
  legend?: boolean;
}

export function ProgressBar({ data, legend = false }: ProgressBarProps) {
  return (
    <Container>
      <BarGroup>
        {data.map((p, i) => {
          const plusValue = i === 0 ? p.value : p.value + data[i - 1].value;
          return (
            <Bar key={p.name} value={plusValue} color={p.color} zIndex={-i} />
          );
        })}
      </BarGroup>

      {legend && (
        <LegendBarGroup>
          {data.map((p) => {
            return (
              <LegendBar key={p.name}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Circle color={p.color} />
                  <H5 align="left" color="#2C3333">
                    {p.name}
                  </H5>
                </View>
                <H5 align="right" color="#2C3333">
                  {p.parcial}/{p.total}
                </H5>
              </LegendBar>
            );
          })}
        </LegendBarGroup>
      )}
    </Container>
  );
}
