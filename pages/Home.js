import { View, Text, Pressable } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#1e3a8a" }}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "800" }}>Welcome to Browse Movies</Text>
      <Text style={{ color: "white", marginTop: 8 }}>Discover what to watch next</Text>
      <Pressable
        onPress={() => navigation.navigate("Movies")}
        style={{ backgroundColor: "white", borderRadius: 8, paddingHorizontal: 32, paddingVertical: 12, marginTop: 24 }}
      >
        <Text style={{ color: "#10245b", fontWeight: "bold" }}>Browse Movies</Text>
      </Pressable>
    </View>
  );
}