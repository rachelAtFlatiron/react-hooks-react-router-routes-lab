import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link class="nav-link" to="/">Home</Link>
      <Link class="nav-link" to="/movies">Movies</Link>
      <Link class="nav-link" to="/actors">Actors</Link>
      <Link class="nav-link" to="/directors">Directors</Link>
    </div>
    );
}

export default NavBar;
