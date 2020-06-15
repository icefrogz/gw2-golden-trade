import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import itemList from "../../assets/static/itemsList.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      $(kataJennifer.current).dropdown("show");
      setResults(itemResults);
    }
    if (query.length > 1) {
      filterItem();
    }
  }, [query]);
  return (
    <form>
      <div className="form-group ">
        <div className="input-group input-group-sm">
          <input
            type="text"
            className="form-control "
            id="item-search"
            aria-describedby="itemSearch"
            placeholder="Enter item name"
            ref={searchInput}
            onChange={onChange}
            autocomplete="off"
          />
          <div className="input-group-append">
            <button
              type="submit"
              onChange={onChange}
              className="btn btn-outline-secondary"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="dropdown ">
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
        </div>
      </div>
    </form>
  );
};

export default ItemSearch;
