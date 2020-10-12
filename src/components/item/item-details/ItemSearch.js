import React, { useRef, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useLocation } from "react-router-dom";
import itemList from "../../../assets/static/itemsList.json";
import { tradingPost } from "../../../helper/tradingPost";
import chunk from "lodash/chunk";
import queryString from "query-string";
import { goldConverterString } from "../../../helper/goldConverter";

const ItemSearch = () => {
  const { search } = useLocation();

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
    const itemList = results.map((itemResult) => {
      return itemResult.id;
    });
    if (itemList.length > 0) {
      tradingPost(itemList).then((response) => {
        const newData = results.reduce((array, item) => {
          const somethingElse = response.find((ele) => ele.id == item.id);
          if (somethingElse) {
            array.push({
              name: item.name,
              rarity: item.rarity,
              icon: item.icon,
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
          columns: [
            {
              title: "Name",
              field: "name",
              formatter: (value, row) => {
                return (
                  "<img class='item-img-sm border-" +
                  row.rarity.toLowerCase() +
                  "' src='" +
                  row.icon +
                  "'></img>" +
                  "<span class='text-" +
                  row.rarity.toLowerCase() +
                  "'>" +
                  value +
                  "</span>"
                );
              },
              sortable: true,
            },
            {
              title: "Sells Price",
              field: "sellsPrice",
              sortable: true,
              formatter: goldConverterString,
            },
            {
              title: "Buys Price",
              field: "buysPrice",
              sortable: true,
              formatter: goldConverterString,
            },
          ],
        });
        setBuySell(response);
        console.log(response);
      });
    }
  }, [results]);
  return (
    <div className="container">
      <table ref={table} className="table"></table>
    </div>
  );
};

export default ItemSearch;
