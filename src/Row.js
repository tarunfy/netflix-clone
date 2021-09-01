import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which  runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* container -> posters */}
      <div className="row-posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title}
            className={`row-poster ${isLargeRow && "row-poster-large"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
