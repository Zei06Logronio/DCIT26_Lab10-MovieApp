import { View, Text, Pressable } from "react-native";
import { CATEGORIES } from "../data/movies";

export default function Movies({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a", paddingHorizontal: 16, paddingTop: 24 }}>
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 32 }}>
        Browse Movies
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {CATEGORIES.map((cat) => (
          <View key={cat.id} style={{ width: "50%", padding: 4 }}>
            <Pressable
              onPress={() => navigation.navigate(cat.target)}
              style={{ backgroundColor: "white", borderRadius: 8, padding: 16, alignItems: "center" }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0f172a" }}>{cat.title}</Text>
              <Text style={{ fontSize: 12, color: "#64748b", textAlign: "center", marginTop: 4 }}>{cat.desc}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}