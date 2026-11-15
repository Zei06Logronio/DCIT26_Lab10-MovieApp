import { View, Text, Image } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 12, padding: 12, marginBottom: 12 }}>
      <Image source={movie.image} style={{ width: 80, height: 120, borderRadius: 8 }} resizeMode="cover" />
      <View style={{ flex: 1, marginLeft: 12, justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#0f172a" }}>{movie.title}</Text>
        <Text style={{ fontSize: 14, color: "#64748b" }}>
          {movie.year} • ⭐ {movie.rating}
        </Text>
        <Text style={{ fontSize: 14, color: "#334155", marginTop: 4 }} numberOfLines={3}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
}