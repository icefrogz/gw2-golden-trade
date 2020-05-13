import React, { useRef, useEffect } from "react";

const ApiKeyForm = () => {
  const apiKey = localStorage.getItem("apiKey");
  const inputTest = useRef(null);

  // Store data
  function storeData() {
    const newApiKey = inputTest.current.value;
    localStorage.setItem("apiKey", newApiKey);
  }

  useEffect(() => {
    inputTest.current.value = apiKey;
  }, [apiKey]);

  return (
    <form>
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
      <button className="btn-dark btn" type="button" onClick={storeData}>
        Save
      </button>
    </form>
  );
};

export default ApiKeyForm;
