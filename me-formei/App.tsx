import React, { useCallback } from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { GlobalStyle } from "./src/styles/themes/global";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
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
    <GlobalStyle onLayout={onLayoutRootView}>
      <ThemeProvider theme={themes.light}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <Routes />
      </ThemeProvider>
    </GlobalStyle>
  );
}
