import { auth, db, storage } from "../config/firebase";
import {
  getDocs,
  collection,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useState, useEffect } from "react";

import { uploadBytes, ref } from "firebase/storage";

const Sample = () => {
  // console.log(auth);
  // console.log(auth.currentUser);
  // console.log(auth.currentUser.displayName);
  // console.log(auth.currentUser.email);
  const [moviesList, setMoviesList] = useState([]);
  const [formData, setFormData] = useState({
    copiesSold: 0,
    genre: "",
    isGlobalHit: false,
    releaseDate: 0,
    title: "",
  });

  const [file, SetFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "movies"), { ...formData });
      getMoviesList();
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesList = async () => {
    try {
      const moviesCollectionRef = collection(db, "movies");

      const moviesDocs = await getDocs(moviesCollectionRef);
      console.log(moviesDocs);
      const filteredMovies = moviesDocs.docs.map((movie) => ({
        ...movie.data(),
        id: movie.id,
      }));
      setMoviesList(filteredMovies);
      console.log(filteredMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, []);

  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
      getMoviesList();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(file);

  const handleStorageFormSubmission = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("file is empty");
      return;
    }

    const imagesFolderRef = ref(storage, `images/${file?.name}`);
    console.log(imagesFolderRef);
    console.log(imagesFolderRef.fullPath);
    console.log(imagesFolderRef.parent);
    console.log(imagesFolderRef.root);

    try {
      const uploadResult = await uploadBytes(imagesFolderRef, file);
      console.log(uploadResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <div>
        <p>First Name: {auth.currentUser.displayName}</p>{" "}
      </div> */}
      {/* <div>
        <p>First Name: {auth.currentUser.email}</p>{" "}
      </div>
      <div>
        <p>First Name: {auth.currentUser.photoURL}</p>{" "}
      </div> */}

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Movie Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter movie title..."
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="isGlobalHit">Movie Global Hit Status</label>
          <input
            type="checkbox"
            checked={formData.isGlobalHit}
            name="isGlobalHit"
            id="isGlobalHit"
            // placeholder="Enter movie isGlobalHit..."
            // value={formData.isGlobalHit}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="genre">Movie Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Enter movie genre..."
            value={formData.genre}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="copiesSold">Movie Copies Sold</label>
          <input
            type="number"
            name="copiesSold"
            id="copiesSold"
            placeholder="Enter movie copiesSold..."
            value={formData.copiesSold}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="releaseDate">Movie Release Date</label>
          <input
            type="number"
            name="releaseDate"
            id="releaseDate"
            placeholder="Enter movie releaseDate..."
            value={formData.releaseDate}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit Movie</button>
      </form>

      {moviesList.map((movie) => {
        return (
          <div key={movie.id} className="bg-purple-500">
            <h1>Movie Title: {movie.title}</h1>
            <h2>Genre: {movie.genre}</h2>
            <div>
              <label htmlFor="updateGenre">Genre:</label>
              <input
                type="text"
                name="updateGenre"
                id="updateGenre"
                value={movie.genre}
                onChange={() => updateMovieGenre}
              />
            </div>
            <p>Number of Copies sold are: {movie.copiesSold}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <button type="button" onClick={() => deleteMovie(movie.id)}>
              DELETE A MOVIE
            </button>
          </div>
        );
      })}

      <form onSubmit={handleStorageFormSubmission}>
        <div>
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => SetFile(e.target.files[0])}
          />
        </div>

        <button type="submit">Submit Storage File</button>
      </form>
    </div>
  );
};

export default Sample;
