import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0f172a" }}>
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Zea Antonia Logronio</Text>
      <Text style={{ color: "#cbd5e1", marginTop: 4 }}>BSIT 3-3 * 202403854</Text>
      <Text style={{ color: "#94a3b8", marginTop: 16 }}>Movie lover and aspiring developer.</Text>
    </View>
  );
}