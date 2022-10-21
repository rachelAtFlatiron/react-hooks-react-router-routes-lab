import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors</h1>
    {actors.map((el) => {
      return (
        <Card>
          <Card.Content>
            <Card.Header>{el.name}</Card.Header>
            <Card.Description>
              {
              el.movies.map((el) => <li>{el}</li>)
              }
            </Card.Description>
          </Card.Content>
        </Card>
      )
    })}
  </div>;
}

export default Actors;
