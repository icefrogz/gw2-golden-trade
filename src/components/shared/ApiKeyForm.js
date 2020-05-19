import React, { useRef, useEffect } from "react";
import { saveApiKey } from "../../actions/apiKey";
import { useDispatch, useSelector } from "react-redux";
const ApiKeyForm = () => {
  //first is state of reducer
  //second is the name of the reducers
  //third is the key of the value
  const apiKey = useSelector((state) => state.apiKey.apiKey);
  const inputTest = useRef(null);
  const dispatch = useDispatch();

  // Store data
  function storeData(e) {
    e.preventDefault();
    const newApiKey = inputTest.current.value;
    dispatch(saveApiKey(newApiKey));

    // localStorage.setItem("apiKey", newApiKey);
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
