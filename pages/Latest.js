import MovieList from "../components/MovieList";

export default function Latest({ navigation }) {
  return <MovieList title="Latest" category="Latest" navigation={navigation} />;
}