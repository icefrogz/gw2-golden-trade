import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import itemList from "../../../assets/static/itemsList.json";
import { tradingPost } from "../../../helper/tradingPost";
import chunk from "lodash/chunk";
import queryString from "query-string";
import { goldConverter } from "../../../helper/goldConverter";

const ItemSearch = () => {
  const { search } = useLocation();
  const goldConverter1 = goldConverter;
  const $ = window.$;
  const { name: query = "" } = queryString.parse(search);
  const [results, setResults] = useState([]);
  const [buySell, setBuySell] = useState([]);
  const table = useRef();
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
        const newData = results.reduce((array, test) => {
          const somethingElse = response.find((ele) => ele.id == test.id);
          if (somethingElse) {
            array.push({
              name: test.name,
              sellsPrice: somethingElse.sells.unit_price,
              buysPrice: somethingElse.buys.unit_price,
            });
          }
          return array;
        }, []);
        $(table.current).bootstrapTable({
          data: newData,
          pagination: true,
          sortName: "name",
          sortOrder: "asc",
          columns:[
            {
              
            }
          ]
        });
        setBuySell(response);
        console.log(response);
      });
    }
  }, [results]);
  return (
    <div className="container">
      <table ref={table} className="table">
        <thead>
          <tr>
            <th data-field="name" data-sortable="true">
              Name
            </th>
            <th
              data-field="sellsPrice"
              data-formatter={goldConverter}
              data-sortable="true"
            >
              Sells
            </th>
            <th data-field="buysPrice" data-sortable="true">
              Buys
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ItemSearch;
