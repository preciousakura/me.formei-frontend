import React, { useCallback } from "react";
import Routes from "./src/routes";
import { StatusBar, useColorScheme } from "react-native";

import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { GlobalStyle } from "./src/styles/themes/global";
import { NativeBaseProvider, extendTheme } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { nativeColors } from "./src/styles/themes/nativeColors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = deviceTheme ? themes[deviceTheme] : themes.light;

  const customTheme = extendTheme({
    colors: nativeColors,
    config: {
      useSystemColorMode: true,
    },
  });

  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-ExtraBold": require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider theme={customTheme}>
        <GlobalStyle onLayout={onLayoutRootView}>
          <ThemeProvider theme={theme}>
            <StatusBar
              backgroundColor={theme.color.primaryColor}
              barStyle="dark-content"
            />
            <Routes />
          </ThemeProvider>
        </GlobalStyle>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
