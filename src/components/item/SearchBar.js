import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Item Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Item Name"
        />
      </div>
    </form>
  );
};

export default SearchBar;
