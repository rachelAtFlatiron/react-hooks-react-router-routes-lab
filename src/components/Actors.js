import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors</h1>
    {actors.map((el) => {
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

export default Actors;
