import React from "react";

function CardDescription(props) {
  const data = props.description;
  console.log(data);
  return (
    <div className="description">
      <div className="description-image">
        <img src={data.flag} alt="" />
      </div>
      <div className="description-content">
        <div className="description-text">
          <div className="principal">
            <h2>{data.name}</h2>
            <p>
              <strong>Native Name: </strong>
              {data.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {data.population}
            </p>
            <p>
              <strong>Region: </strong>
              {data.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {data.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {data.capital}
            </p>
          </div>
          <div className="secondary">
            <p>
              <strong>Top Level Domain: </strong>
              {data.topLevelDomain}
            </p>
            <p>
              <strong>Currencies: </strong>
              {data.currencies.map((item) => {
                return `${item.name}  `;
              })}
            </p>
            <p>
              <strong>Languages: </strong>{" "}
              {data.languages.map((item) => {
                return `${item.name}  `;
              })}
            </p>
          </div>
        </div>
        <div className="border-countries">
          <p>Border Countries: </p>
          <div className="border-countries-wrap">
            {data.borders.map((item) => {
              return (
                <div key={item} className="border-item">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDescription;
