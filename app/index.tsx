import React from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
    <ImageBackground
      source={require("../assets/light-bg.png")}
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 12,
                color: "white",
              }}
            >
              "The science of operations, as derived from mathematics more
              especially, is a science of itself and has own abstract truth and
              value"
            </Text>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                color: "white",
                marginTop: 8,
              }}
            >
              - Ads Lovelace
            </Text>
          </View>
          <Image source={require("../assets/refresh.png")} />
        </View>

        <View style={{ marginTop: 36 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../assets/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 15,
                color: "white",
                marginLeft: 1,
                letterSpacing: 3,
              }}
            >
              GOOD MORNING
            </Text>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter_400Regular",
                  fontSize: 100,
                  color: "white",
                }}
              >
                11:30
              </Text>
              <Text
                style={{
                  fontFamily: "Inter_400Regular",
                  fontSize: 15,
                  color: "white",
                }}
              >
                BST
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 15,
                color: "white",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
