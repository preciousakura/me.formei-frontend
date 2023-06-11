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

export const userSave = {
  get: async () => {
    try {
      return await AsyncStorage.getItem("@token");
    } catch (e) {
      return null;
    }
  },
  set: async (token: string) => {
    try {
      await AsyncStorage.setItem("@token", token);
    } catch (e) {
      console.log(e);
    }
  },
};
