import React, { useCallback } from "react";
import Routes from "./src/routes";
import { StatusBar, useColorScheme } from "react-native";

import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { GlobalStyle } from "./src/styles/themes/global";
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

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
      <NativeBaseProvider>
        <GlobalStyle onLayout={onLayoutRootView}>
          <ThemeProvider theme={theme}>
            <StatusBar
              backgroundColor={theme.color.background}
              barStyle="dark-content"
            />
            <Routes />
          </ThemeProvider>
        </GlobalStyle>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
