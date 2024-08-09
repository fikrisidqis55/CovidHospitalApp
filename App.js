import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HospitalList from "./screens/HospitalList"; // Ganti dengan path yang sesuai
import HospitalDetail from "./screens/HospitalDetail"; // Ganti dengan path yang sesuai
import ProvinceMap from "./screens/ProvinceMap"; // Ganti dengan path yang sesuai

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Roboto_400Regular: require("@expo-google-fonts/roboto/Roboto_400Regular.ttf"),
          Roboto_500Medium: require("@expo-google-fonts/roboto/Roboto_500Medium.ttf"),
        });
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error("Error loading fonts", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can also return a loading indicator here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HospitalList">
        <Stack.Screen
          name="HospitalList"
          component={HospitalList}
          options={{ title: "Daftar Rumah Sakit" }}
        />
        <Stack.Screen
          name="HospitalDetail"
          component={HospitalDetail}
          options={{ title: "Detail Rumah Sakit" }}
        />
        <Stack.Screen
          name="ProvinceMap"
          component={ProvinceMap}
          options={{ title: "Peta Provinsi" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
