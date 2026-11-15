import MovieList from "../components/MovieList";

export default function Popular({ navigation }) {
  return <MovieList title="Popular" category="Popular" navigation={navigation} />;
}