import React, { useRef } from "react";

const ApiKeyForm = () => {
  const apiKey = localStorage.getItem("apiKey");
  const inputTest = useRef(null);

  // Store data
  function storeData() {
    var apiKey = inputTest.current.value;
    localStorage.setItem("apiKey", apiKey);
  }

  return (
    <form onSubmit={storeData}>
      <div className="form-group">
        <label>API Key</label>
        <input
          ref={inputTest}
          type="text"
          className="form-control"
          id="tradingPostInput"
          placeholder="API Key"
          defaultValue={apiKey}
        />
      </div>
      <input className="btn-dark btn" type="submit" value="Submit" />
    </form>
  );
};

export default ApiKeyForm;
