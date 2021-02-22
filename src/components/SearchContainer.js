import React from "react";
import CardsContainer from "./CardsContainer";

import searchIcon from "../images/search.svg";
function useSearchItems(items) {
  const [query, setQuery] = React.useState("");
  const [filterItems, setFilterItems] = React.useState(items);

  React.useMemo(() => {
    if (
      query === "Africa" ||
      query === "America" ||
      query === "Europe" ||
      query === "Oceania" ||
      query === "Asia"
    ) {
      const resultItem = items.filter((item) => {
        return item.region.toLowerCase().includes(query.toLowerCase());
      });
      setFilterItems(resultItem);
    } else {
      const resultItem = items.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setFilterItems(resultItem);
    }
  }, [items, query]);
  return { query, setQuery, filterItems };
}

function SearchContainer(props) {
  const { query, setQuery, filterItems } = useSearchItems(props.data);
  if (filterItems.length === 0) {
    return (
      <React.Fragment>
        <div className="searching">
          <div className="Input">
            <img id="searchh" src={searchIcon} alt="" width="50" height="50" />
            <input
              onChange={(ev) => {
                setQuery(ev.target.value);
              }}
              value={query}
              type="search"
              placeholder="Search for a country..."
            />
          </div>
          <div className="filter">
            <label className="filter-header" htmlFor="filter-options">
              <p>Filter by Region </p>
              <img id="arrow" src="./images/arrow.svg" alt="" />
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
                    console.log(ev.target.value);
                    setQuery(ev.target.value);
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
                    console.log(ev.target.value);
                    setQuery(ev.target.value);
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
                    console.log(ev.target.value);
                    setQuery(ev.target.value);
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
                    console.log(ev.target.value);
                    setQuery(ev.target.value);
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
                    console.log(ev.target.value);
                    setQuery(ev.target.value);
                  }}
                />
                <label htmlFor="Oceania">Oceania</label>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="searching">
        <div className="Input">
          <img src={searchIcon} alt="" />
          <input
            onChange={(ev) => {
              setQuery(ev.target.value);
            }}
            value={query}
            type="search"
            placeholder="Search for a country..."
          />
        </div>
        <div className="filter">
          <label className="filter-header" htmlFor="filter-options">
            <p>Filter by Region </p>
            <img src="./images/arrow.svg" alt="" />
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
                  console.log(ev.target.value);
                  setQuery(ev.target.value);
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
                  console.log(ev.target.value);
                  setQuery(ev.target.value);
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
                  console.log(ev.target.value);
                  setQuery(ev.target.value);
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
                  console.log(ev.target.value);
                  setQuery(ev.target.value);
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
                  console.log(ev.target.value);
                  setQuery(ev.target.value);
                }}
              />
              <label htmlFor="Oceania">Oceania</label>
            </div>
          </div>
        </div>
      </div>
      <CardsContainer data={filterItems} />
    </React.Fragment>
  );
}

export default SearchContainer;
