const INITIAL_STATE = {
  apiKey: localStorage.getItem("apiKey"),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_API_KEY":
      return { ...state, apiKey: action.payload.key };
    case "DELETE_API_KEY":
      return { ...state, apiKey: null };
    default:
      return state;
  }
};
