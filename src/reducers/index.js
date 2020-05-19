import { combineReducers } from "redux";
import authReducers from "./authReducer";
import apiKey from "./apiKeyReducer";
// was: auth: () => authReducers
// reducernya uda function, jadi kamu ga perlu bikin jadi function lagi
// sebelomnya pake function soalnya kyknya buat contoh deh
export default combineReducers({
  auth: authReducers,
  apiKey,
});
