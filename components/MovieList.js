import { View, Text, ScrollView, Pressable } from "react-native";
import MovieCard from "./MovieCard";
import { MOVIES } from "../data/movies";

export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) => movie.categories.includes(category));

  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a", paddingHorizontal: 16, paddingTop: 16 }}>
      <Pressable onPress={() => navigation.navigate("Movies")}>
        <Text style={{ color: "#60a5fa", marginBottom: 8 }}>← Back to Movies</Text>
      </Pressable>
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>{title}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}