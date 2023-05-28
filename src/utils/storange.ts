import AsyncStorage from "@react-native-async-storage/async-storage";

export const colorModeManager = {
  get: async () => {
    try {
      return await AsyncStorage.getItem("@color-mode");
    } catch (e) {
      return null;
    }
  },
  set: async (value: string) => {
    try {
      await AsyncStorage.setItem("@color-mode", value);
    } catch (e) {
      console.log(e);
    }
  },
};
