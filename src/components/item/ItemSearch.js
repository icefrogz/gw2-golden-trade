import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import itemList from "../../assets/static/itemsList.json";

const ItemSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchInput = useRef();

  function onSubmit(e) {
    e.preventDefault();
    setQuery(searchInput.current.value);
  }

  useEffect(() => {
    function filterItem() {
      const regex = new RegExp(query, "i");
      const itemResults = itemList.filter((item) => {
        return regex.test(item.name);
      });
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
        <input
          type="text"
          className="form-control"
          id="item-search"
          aria-describedby="itemSearch"
          placeholder="Enter item name"
          ref={searchInput}
        />
      </div>

      <button type="submit" onClick={onSubmit} className="btn btn-primary">
        Submit
      </button>
      <ul className="list-group">
        {results.map((result1) => {
          return (
            <Link to={`/item/${result1.id}`} className="list-group-item">
              {result1.name}
            </Link>
          );
        })}
      </ul>
    </form>
  );
};

export default ItemSearch;
