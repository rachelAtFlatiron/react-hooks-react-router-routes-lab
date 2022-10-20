import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors</h1>
    {directors.map((el) => {
      return (
        <div>
          <h2>{el.name}</h2>
          <ul>
            {
            el.movies.map((el) => <li>{el}</li>)
            }
          </ul>
        </div>
      )
    })}
  </div>;
}

export default Directors;
