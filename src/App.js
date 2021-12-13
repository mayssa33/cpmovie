import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Movies } from "./component/Data";
import MovieList from "./component/MovieList";
import MovieSearch from "./component/MovieSearch";
import AddMovie from "./component/AddMovie";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const handleChange = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x);
  const handleadd = (newmovies) => setMovies([...movies, newmovies]);
  return (
    <div className="App">
      <MovieSearch
        text={text}
        handleChange={handleChange}
        rating={rating}
        handleRating={handleRating}
      />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(text.toLowerCase()) &&
            movie.Rating >= rating
        )}
      />
      <AddMovie add={handleadd} />
    </div>
  );
}

export default App;
