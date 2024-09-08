import { Text, View } from "react-native";

const RowView = ({ label, value }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter_400Regular,",
            color: "#303030",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter_400Regular,",
            color: "#303030",
            fontSize: 20,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};
export default RowView;
