import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import itemList from "../../assets/static/itemsList.json";

const ItemSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchInput = useRef();
  const kataJennifer = useRef();
  const $ = window.$;
  function onChange(e) {
    e.preventDefault();
    setQuery(searchInput.current.value);
  }

  useEffect(() => {
    function filterItem() {
      const regex = new RegExp(query, "i");
      const itemResults = itemList.filter((item) => {
        return regex.test(item.name);
      });
      $(kataJennifer.current).dropdown("toggle");
      setResults(itemResults);
    }
    if (query.length > 1) {
      filterItem();
    }
  }, [query]);
  return (
    <form>
      <div className="form-group">
        <label htmlFor="item-search">Item Search</label>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            style={{ visibility: "hidden" }}
            ref={kataJennifer}
          />

          <div className="dropdown-menu">
            {results.map((result1) => {
              return (
                <Link
                  className="dropdown-item"
                  style={{ fontSize: "14px" }}
                  to={`/item/${result1.id}`}
                >
                  {result1.name}
                </Link>
              );
            })}
          </div>
          <input
            type="text"
            className="form-control "
            id="item-search"
            aria-describedby="itemSearch"
            placeholder="Enter item name"
            ref={searchInput}
            onChange={onChange}
          />
        </div>
      </div>

      <button type="submit" onChange={onChange} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ItemSearch;
