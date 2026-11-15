import MovieList from "../components/MovieList";

export default function TopRated({ navigation }) {
  return <MovieList title="Top Rated" category="Top Rated" navigation={navigation} />;
}