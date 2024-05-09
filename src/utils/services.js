import {
  query,
  collection,
  getDocs,
  getFirestore,
  where,
  addDoc,
  getDoc,
  doc,
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
  const docRef = await addDoc(collection(db, "orders"), sale);
  return docRef.id;
};

export const getOrder = async (id) => {
  const db = getFirestore(app);
  const orderDocRef = doc(db, "orders", id);

  const docSnap = await getDoc(orderDocRef);

  return docSnap.data();
};

export const getCategories = () => {
  const db = getFirestore(app);
  const categoriesCollection = collection(db, "categories");
  const query = getDocs(categoriesCollection);

  return query
    .then((result) => {
      const categories = result.docs.map((doc) => doc.data());
      return categories;
    })
    .catch((error) => {
      console.error(error);
    });
};
