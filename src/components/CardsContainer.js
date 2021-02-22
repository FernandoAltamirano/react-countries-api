import React from "react";
import Card from "./Card";

function CardsContainer(props) {
  const data = props.data;
  return (
    <div className="card-container">
      {data.map(({ alpha2Code, name, population, region, capital, flag }) => {
        return (
          <React.Fragment key={alpha2Code}>
            <Card
              alpha2Code={alpha2Code}
              name={name}
              population={population}
              region={region}
              capital={capital}
              flag={flag}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default CardsContainer;
