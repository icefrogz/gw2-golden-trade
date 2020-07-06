import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import itemList from "../../assets/static/itemsList.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import chunk from "lodash/chunk";

const ItemSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchInput = useRef();
  const dropdown = useRef();
  const $ = window.$;

  function onChange(e) {
    e.preventDefault();

    setQuery(searchInput.current.value);
  }

  function onClick() {
    $(dropdown.current).dropdown("show");
  }

  useEffect(() => {
    function filterItem() {
      const MAX_RESULTS_COUNT = 10;
      const regex = new RegExp(query, "i");
      const itemsChunk = chunk(itemList, 100);
      let searchResults = [];

      for (let i = 0; i < itemsChunk.length; i++) {
        const chunk = itemsChunk[i];
        const res = chunk.filter((item) => regex.test(item.name));

        if (res.length > 0) {
          searchResults = searchResults.concat(res);
        }

        if (searchResults.length > MAX_RESULTS_COUNT) break;
      }

      setResults(searchResults.slice(0, MAX_RESULTS_COUNT));
    }

    if (query.length > 1) {
      setTimeout(filterItem, 500);
      $(dropdown.current).dropdown("show");
    } else {
      setResults([]);
      $(dropdown.current).dropdown("hide");
    }
  }, [$, query]);

  return (
    <form>
      <div className="form-group mb-0">
        <div className="input-group input-group-sm dropdown">
          <input
            type="text"
            className="form-control "
            id="item-search"
            aria-describedby="itemSearch"
            placeholder="Enter item name"
            ref={searchInput}
            onChange={onChange}
            autoComplete="off"
          />
          <button
            ref={dropdown}
            className="d-none btn"
            data-toggle="dropdown"
          />
          <div
            className="dropdown-menu"
            style={{
              overflow: "auto",
              maxHeight: "300px",
            }}
          >
            {results.map((result1) => {
              return (
                <Link
                  className={`dropdown-item text-${result1.rarity.toLowerCase()}`}
                  to={`/item/${result1.id}`}
                >
                  <img style={{ height: "24px" }} src={result1.icon} />
                  {result1.name}
                </Link>
              );
            })}
          </div>
          <div className="input-group-append">
            <Link
              to={{
                pathname: "/item/tp/search",
                search: `?name=${query}`,
              }}
              className="btn btn-outline-secondary"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ItemSearch;
