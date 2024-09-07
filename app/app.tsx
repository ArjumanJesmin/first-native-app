import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Inter_100Thin", fontSize: 20 }}>
        Thin Text Example
      </Text>
      <Text style={{ fontFamily: "Inter_400Regular", fontSize: 24 }}>
        Regular Text Example
      </Text>
    </View>
  );
};

export default App;
