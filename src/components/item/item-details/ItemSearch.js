import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import itemList from "../../../assets/static/itemsList.json";
import { tradingPost } from "../../../helper/tradingPost";
import chunk from "lodash/chunk";
import queryString from "query-string";
const ItemSearch = () => {
  const { search } = useLocation();
  const { name: query = "" } = queryString.parse(search);
  const [results, setResults] = useState([]);
  const [buySell, setBuySell] = useState([]);

  useEffect(() => {
    function filterItem() {
      const regex = new RegExp(query, "i");
      const searchResults = itemList.filter((item) => regex.test(item.name));
      setResults(searchResults);
    }

    if (query.length > 1) {
      filterItem();
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const imTryingToSay = results.map((testResult) => {
      return testResult.id;
    });
    if (imTryingToSay.length > 0) {
      tradingPost(imTryingToSay).then((response) => {
        setBuySell(response);
        console.log(response);
      });
    }
  }, [results]);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Sell</th>
            <th scope="col">Buy</th>
          </tr>
        </thead>
        <tbody>
          {results.reduce((array, test) => {
            const somethingElse = buySell.find((ele) => ele.id == test.id);
            if (somethingElse) {
              array.push(
                <tr>
                  <td>{test.name} </td>

                  <td>{somethingElse.sells.unit_price}</td>
                </tr>
              );
            }
            return array;
          }, [])}
        </tbody>
      </table>
    </div>
  );
};

export default ItemSearch;
