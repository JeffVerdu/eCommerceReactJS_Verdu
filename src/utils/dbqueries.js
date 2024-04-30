import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase";

export const getMovies = () => {
  const db = getFirestore(app);
  const moviesCollection = collection(db, "movies");
  const query = getDocs(moviesCollection);

  return query
    .then((result) => {
      const movies = result.docs.map((doc) => {
        return doc.data();
      });
      return movies;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getMoviesByGenre = (genre) => {};

export const getMovieDetails = (id) => {};

export const createSale = (sale) => {};
