import MovieList from "../components/MovieList";

export default function Recommended({ navigation }) {
  return <MovieList title="Recommended" category="Recommended" navigation={navigation} />;
}