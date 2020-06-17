import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import itemList from "../../assets/static/itemsList.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const ItemSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShow] = useState(false);
  const searchInput = useRef();

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

      setResults(itemResults);
    }
    if (query.length > 1) {
      filterItem();
      setShow(true);
    } else {
      setResults([]);
      setShow(false);
    }
  }, [query]);
  return (
    <form>
      <div className="form-group mb-0">
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
          <div
            className="dropdown-menu show"
            style={{
              display: showDropdown ? "block" : "none",
              overflow: "auto",
              maxHeight: "300px",
            }}
          >
            {results.map((result1) => {
              return (
                <Link className="dropdown-item" to={`/item/${result1.id}`}>
                  <img style={{ height: "24px" }} src={result1.icon} />{" "}
                  {result1.name}
                </Link>
              );
            })}
          </div>
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
      </div>
    </form>
  );
};

export default ItemSearch;
