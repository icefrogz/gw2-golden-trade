import React, { useEffect, useState } from "react";
import { listing } from "../../helper/listing";
import { goldConverter } from "../../helper/goldConverter";
import { iconRetriever } from "../../helper/iconRetriever";
const Listing = ({ itemId }) => {
  const [list, setList] = useState([]);
  const [icon, setIcon] = useState([]);
  useEffect(() => {
    listing(itemId).then((response) => {
      setList(response);
    });
  }, [itemId]);

  return (
    <div className="row ">
      <div className="col-sm-6 ">
        <div className="card">
          <div className="card-body ">
            <h5 className="card-title">Current Buyer</h5>
            <div className="overflow-auto" style={{ maxHeight: "500px" }}>
              <table className=" table table-sm table-striped table-dark ">
                <thead className="">
                  <tr>
                    <th scope="col">Buyer</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {list.sells &&
                    list.sells.map((test) => {
                      return (
                        <tr>
                          <td>{test.listings}</td>
                          <td>
                            Ordered
                            <br />
                            Buyer
                          </td>
                          <td>{goldConverter(test.unit_price)}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body ">
            <h5 className="card-title">Current Seller</h5>
            <div className="overflow-auto" style={{ maxHeight: "500px" }}>
              <table className=" table table-sm table-striped table-dark ">
                <thead>
                  <tr>
                    <th scope="col">Seller</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {list.buys &&
                    list.buys.map((test) => {
                      return (
                        <tr>
                          <td>{test.listings}</td>
                          <td>
                            Ordered
                            <br />
                            Seller
                          </td>
                          <td>{goldConverter(test.unit_price)}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
