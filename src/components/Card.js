import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <Link to={`/${props.alpha2Code}`}>
          <img src={props.flag} alt={`bandera de ${props.name}`} />
        </Link>
      </div>
      <div className="card-description">
        <h2>{props.name}</h2>
        <div className="card-description-secondary">
          <p>
            <strong>Population: </strong>
            {props.population}
          </p>
          <p>
            <strong>Region: </strong>
            {props.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {props.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

// name={name}
// population={population}
// region={region}
// capital={capital}
// image={image}
