import React from "react";

import arrow from "../images/arrow.svg";
function Filter() {
  return (
    <div className="filter">
      <label className="filter-header" htmlFor="filter-options">
        <p>Filter by Region </p>
        <img src={arrow} alt="" />
      </label>
      <input type="checkbox" id="filter-options" />
      <div className="filter-options">
        <div>
          <input
            type="radio"
            id="Africa"
            value="Africa"
            name="input-radio"
            onChange={(ev) => {
              setSelectedRegion(ev.target.value);
            }}
          />
          <label htmlFor="Africa">Africa</label>
        </div>
        <div>
          <input
            type="radio"
            id="America"
            value="America"
            name="input-radio"
            onChange={(ev) => {
              setSelectedRegion(ev.target.value);
            }}
          />
          <label htmlFor="America">America</label>
        </div>
        <div>
          <input
            type="radio"
            id="Asia"
            value="Asia"
            name="input-radio"
            onChange={(ev) => {
              setSelectedRegion(ev.target.value);
            }}
          />
          <label htmlFor="Asia">Asia</label>
        </div>
        <div>
          <input
            type="radio"
            id="Europe"
            value="Europe"
            name="input-radio"
            onChange={(ev) => {
              setSelectedRegion(ev.target.value);
            }}
          />
          <label htmlFor="Europe">Europe</label>
        </div>
        <div>
          <input
            type="radio"
            id="Oceania"
            value="Oceania"
            name="input-radio"
            onChange={(ev) => {
              setSelectedRegion(ev.target.value);
            }}
          />
          <label htmlFor="Oceania">Oceania</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
