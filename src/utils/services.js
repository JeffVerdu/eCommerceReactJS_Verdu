import {
  query,
  collection,
  getDocs,
  getFirestore,
  where,
} from "firebase/firestore";
import { app } from "../firebase";

export const getMovies = () => {
  const db = getFirestore(app);
  const moviesCollection = collection(db, "movies");
  const query = getDocs(moviesCollection);

  return query
    .then((result) => {
      const movies = result.docs.map((doc) => doc.data());
      return movies;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getMoviesByGenre = (movies, genre) => {
  let filteredMovies = [];
  return (filteredMovies = movies.filter((movie) =>
    movie.genres_ids.includes(parseInt(genre))
  ));
};

export const getItemDetail = (id) => {
  const db = getFirestore(app);
  const movieCollection = collection(db, "movies");
  const filter = query(movieCollection, where("movie_id", "==", parseInt(id)));
  const queryResult = getDocs(filter);

  return queryResult
    .then((result) => {
      const doc = result.docs[0];
      const movie = doc.data();
      return movie;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createSale = (sale) => {};
