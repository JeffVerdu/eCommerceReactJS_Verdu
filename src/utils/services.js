import {
  query,
  collection,
  getDocs,
  getFirestore,
  where,
  addDoc,
} from "firebase/firestore";
import { app } from "../firebase";

//Función para obtener todas las películas
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

//Función para obtener las películas según género seleccionado
export const getMoviesByGenre = (genre) => {
  const db = getFirestore(app);
  const movieCollection = collection(db, "movies");
  const filter = query(
    movieCollection,
    where("genres_ids", "array-contains", parseInt(genre))
  );
  const queryResult = getDocs(filter);

  return queryResult
    .then((result) => {
      const movies = result.docs.map((doc) => doc.data());
      return movies;
    })
    .catch((error) => {
      console.error(error);
    });
};

//Función para obtener los detalles de una película seleccionada
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

export const createSale = async (sale) => {
  const db = getFirestore(app);
  await addDoc(collection(db, "sales"), sale);
};
