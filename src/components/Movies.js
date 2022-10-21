import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {
      movies.map((el) => {
        return (
          <div>
            <h2>{el.title}</h2>
            <p>{el.time} minutes</p>
            <ul>
            {
              el.genres.map((el) => <li>{el}</li>)
            }
            </ul>
          </div>
        )
      })
    }
  </div>;
}

export default Movies;
