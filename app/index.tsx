import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import RowView from "@/components/RowView";

const App = () => {
  const [showMore, setShowMore] = useState(false);
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
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
          marginBottom: 24,
        }}
      >
        {!showMore && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Inter_Regular",
                  fontSize: 12,
                  color: "white",
                }}
              >
                "The science of operations, as derived from mathematics more
                especially, is a science of itself and has own abstract truth
                and value"
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  color: "white",
                  marginTop: 8,
                }}
              >
                - Ads Lovelace
              </Text>
            </View>
            <Image source={require("../assets/refresh.png")} />
          </View>
        )}

        <View style={{ marginTop: 36 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../assets/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter-Bold",
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
                  fontFamily: "Inter-Regular",
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
                fontFamily: "Inter-Bold",
                fontSize: 15,
                color: "white",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>

          {/* Button */}
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              flexDirection: "row",
              height: 40,
              width: 115,
              backgroundColor: "white",
              borderRadius: 30,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              {showMore ? "LESS" : "MORE"}
            </Text>
            <Image
              source={
                showMore
                  ? require("../assets/arrow-up.png")
                  : require("../assets/arrow-down.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Expanded View */}
      {showMore && (
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView label={"Current Timezone"} value="Europe/London" />
          <RowView label={"Day of the year"} value="295" />
          <RowView label={"Day of the week"} value="5" />
          <RowView label={"Week number"} value="42" />
        </View>
      )}
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
